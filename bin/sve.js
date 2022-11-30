#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk');
const packageVersion = require('../package.json').version
const requiredNodeVersion = require('../package.json').engines.node
const {
  checkNodeVersion,
  checkSveVersion,
  notifier
} = require('../utils/checkVersion.js')

function programConfig() {
  program
    .version(packageVersion)
    .usage('<cmd> [options]')
    .command('build', 'Build your library')
    .command('test', 'Test your library')
    .parse(process.argv)
}

checkNodeVersion(requiredNodeVersion);
checkSveVersion().then(res => {
  const data = JSON.parse(res.body);
  const latest = data.version;
  notifier(latest);
  programConfig();
}).catch(err => {
  console.log(chalk.red(err));
  process.exit(-1);
});

