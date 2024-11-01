import fs from 'fs/promises';
import path from 'path';

export async function createDirectory(dirPath: string): Promise<void> {
  try {
    await fs.mkdir(path.join(process.cwd(), dirPath), { recursive: true });
  } catch (error) {
    console.error('Failed to create directory:', error);
    throw new Error('Failed to create directory');
  }
}

export async function writeFile(filePath: string, content: string): Promise<void> {
  try {
    await fs.writeFile(path.join(process.cwd(), filePath), content, 'utf-8');
  } catch (error) {
    console.error('Failed to write file:', error);
    throw new Error('Failed to write file');
  }
}

export async function readFile(filePath: string): Promise<string> {
  try {
    return await fs.readFile(path.join(process.cwd(), filePath), 'utf-8');
  } catch (error) {
    console.error('Failed to read file:', error);
    throw new Error('Failed to read file');
  }
}