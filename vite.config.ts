import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// Function to get all HTML files from pages directory
function getPageFiles() {
  const pagesDir = path.resolve(__dirname, 'pages');
  if (!fs.existsSync(pagesDir)) return [];
  
  return fs.readdirSync(pagesDir)
    .filter(file => file.endsWith('.html'))
    .reduce((acc, file) => {
      acc[`pages/${file}`] = path.resolve(pagesDir, file);
      return acc;
    }, {});
}

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        ...getPageFiles()
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom']
        }
      }
    }
  }
});