import { Handler } from '@netlify/functions';
import { getUser } from '@netlify/functions';
import fetch from 'node-fetch';

const handler: Handler = async (event, context) => {
  // Verify authentication
  const user = await getUser(context);
  if (!user || !user.app_metadata.roles?.includes('admin')) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Unauthorized' })
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  try {
    const { content, path } = JSON.parse(event.body || '');
    
    // Get the current commit SHA
    const repoResponse = await fetch(`https://api.github.com/repos/${process.env.GITHUB_REPO}/git/refs/heads/main`, {
      headers: {
        'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    
    const repoData = await repoResponse.json();
    const currentSha = repoData.object.sha;

    // Create blob with file content
    const blobResponse = await fetch(`https://api.github.com/repos/${process.env.GITHUB_REPO}/git/blobs`, {
      method: 'POST',
      headers: {
        'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: Buffer.from(content).toString('base64'),
        encoding: 'base64'
      })
    });

    const blobData = await blobResponse.json();

    // Create tree
    const treeResponse = await fetch(`https://api.github.com/repos/${process.env.GITHUB_REPO}/git/trees`, {
      method: 'POST',
      headers: {
        'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        base_tree: currentSha,
        tree: [{
          path,
          mode: '100644',
          type: 'blob',
          sha: blobData.sha
        }]
      })
    });

    const treeData = await treeResponse.json();

    // Create commit
    const commitResponse = await fetch(`https://api.github.com/repos/${process.env.GITHUB_REPO}/git/commits`, {
      method: 'POST',
      headers: {
        'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: `Add page: ${path}`,
        tree: treeData.sha,
        parents: [currentSha]
      })
    });

    const commitData = await commitResponse.json();

    // Update reference
    await fetch(`https://api.github.com/repos/${process.env.GITHUB_REPO}/git/refs/heads/main`, {
      method: 'PATCH',
      headers: {
        'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sha: commitData.sha
      })
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Page created successfully' })
    };
  } catch (error) {
    console.error('Error creating page:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error creating page' })
    };
  }
};

export { handler };