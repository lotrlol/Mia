import { Handler } from '@netlify/functions';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

const s3Client = new S3Client({
  endpoint: process.env.NETLIFY_BLOB_URL,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || ''
  },
  region: 'us-east-1'
});

const handler: Handler = async (event) => {
  // Check for POST method
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  // Verify admin token
  const token = event.headers.authorization?.split(' ')[1];
  if (token !== process.env.ADMIN_SECRET) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Unauthorized' })
    };
  }

  try {
    const { title, body, metaTitle, metaDescription, slug } = JSON.parse(event.body || '');

    const pageContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${metaTitle}</title>
    <meta name="description" content="${metaDescription}">
    <link rel="stylesheet" href="/assets/main.css">
</head>
<body>
    <article class="prose prose-lg mx-auto px-4 py-12">
        <h1>${title}</h1>
        ${body}
    </article>
</body>
</html>`;

    // Store the page in Netlify Blob Storage
    await s3Client.send(new PutObjectCommand({
      Bucket: process.env.NETLIFY_BLOB_STORE || '',
      Key: `pages/${slug}.html`,
      Body: pageContent,
      ContentType: 'text/html'
    }));

    // Trigger a new deployment to rebuild the site with the new page
    await fetch(process.env.NETLIFY_BUILD_HOOK || '', {
      method: 'POST'
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: 'Page generated successfully',
        slug: `pages/${slug}.html`
      })
    };
  } catch (error) {
    console.error('Error generating page:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error generating page' })
    };
  }
};

export { handler };