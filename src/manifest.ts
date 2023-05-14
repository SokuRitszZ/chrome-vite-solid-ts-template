import { type Manifest } from 'webextension-polyfill';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const pkg = require('../package.json');

const manifest: Manifest.WebExtensionManifest = {
  manifest_version: 3,
  name: pkg.name,
  version: pkg.version,
  description: pkg.description,
  icons: {
    '16': 'icon.png',
    '32': 'icon.png',
    '128': 'icon.png'
  },
  background: {
    service_worker: './src/background/index.js',
    type: 'module'
  },
  action: {
    default_popup: './src/popup/index.html'
  },
  chrome_url_overrides: {
    newtab: './src/newtab/index.html'
  }
};

export default manifest;
