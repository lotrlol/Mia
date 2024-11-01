import { Handler } from '@netlify/functions';
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';

const s3Client = new S3Client({
  endpoint: process.env.NETLIFY_BLOB_URL,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || ''
  },
  region: 'us-east-1'
});

const handler: Handler = async (event) => {
  try {
    const path = event.path.replace('/pages/', '');
    
    const command = new GetObjectCommand({
      Bucket: process.env.NETLIFY_BLOB_STORE || '',
      Key: `pages/${path}`
    });

    const response = await s3Client.send(command);
    const pageContent = await response.Body?.transformToString();

    if (!pageContent) {
      return {
        statusCode: 404,
        body: 'Page not found'
      };
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html'
      },
      body: pageContent
    };
  } catch (error) {
    console.error('Error serving page:', error);
    return {
      statusCode: 500,
      body: 'Error serving page'
    };
  }
};

export { handler };