import { existsSync, mkdirSync, writeFileSync } from 'fs';
import path from 'path';
import manifest from '../src/manifest';
import { PluginOption } from 'vite';

const __dirname = process.cwd();
const distDir = path.resolve(__dirname, 'dist');

export function makeManifest(): PluginOption {
  return {
    name: 'make-manifest',
    buildEnd() {
      setTimeout(() => {
        const manifestPath = path.resolve(distDir, 'manifest.json');

        if (!existsSync(distDir)) {
          mkdirSync(distDir);
        }

        writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

        console.log('\nMake Manifest.json OK!\n');
      });
    }
  };
}
