import { defineConfig } from 'vite';
import * as path from 'path';
import solid from 'vite-plugin-solid';
import { makeManifest } from './plugins/make-manifest';

const __dirname = process.cwd();
const publicDir = path.resolve(__dirname, 'public');
function srcPath(...args: string[]) {
  return path.resolve(__dirname, 'src', ...args);
}

export default defineConfig({
  resolve: {
    alias: {
      '@root': srcPath(),
      '@popup': srcPath('popup'),
      '@newtab': srcPath('newtab'),
      '@background': srcPath('background')
    }
  },
  publicDir,
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    minify: false,
    rollupOptions: {
      input: {
        popup: srcPath('popup', 'index.html'),
        newtab: srcPath('newtab', 'index.html'),
        background: srcPath('background', 'index.ts')
      },
      output: {
        entryFileNames: (chunk) => `src/${chunk.name}/index.js`
      }
    }
  },
  plugins: [makeManifest(), solid()]
});
