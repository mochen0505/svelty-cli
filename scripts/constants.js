const { resolve } = require('path')

const SVE_PATH = resolve(__dirname, '../');
const PROJECT_PATH = process.cwd();
const PROJECT_NODE_VERSION = process.version;
const SERVER_HOST = '127.0.0.1';
const SERVER_PORT = 8888;
const NPM_VERSION_URL = 'https://registry.npmjs.org/@svelty/cli/latest';

const GITHUB = {
  host: 'github.com/mochen0505'
}

module.exports = {
  SVE_PATH,
  PROJECT_PATH,
  PROJECT_NODE_VERSION,
  SERVER_HOST,
  SERVER_PORT,
  NPM_VERSION_URL,
  GITHUB,
}
