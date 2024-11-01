import express from 'express';
import { createDirectory, writeFile, readFile } from '../api/fileSystem';

const router = express.Router();

router.post('/api/create-directory', async (req, res) => {
  try {
    const { path } = req.body;
    await createDirectory(path);
    res.status(200).json({ message: 'Directory created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create directory' });
  }
});

router.post('/api/write-file', async (req, res) => {
  try {
    const { path, content } = req.body;
    await writeFile(path, content);
    res.status(200).json({ message: 'File written successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to write file' });
  }
});

router.get('/api/read-file', async (req, res) => {
  try {
    const { path } = req.query;
    if (typeof path !== 'string') {
      throw new Error('Path must be a string');
    }
    const content = await readFile(path);
    res.status(200).json({ content });
  } catch (error) {
    res.status(500).json({ error: 'Failed to read file' });
  }
});

export default router;