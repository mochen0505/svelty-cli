#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const { exec } = require('shelljs')
const figlet = require('figlet')
const gradient = require('gradient-string')
const getDirectory = require('../utils/getDirectory')

program
  .usage('[options]')
  .option('-s --scope <scope>', 'test specific component')

program.on('--help', () => {
  console.log(chalk.yellow('# Test all the components'));
  console.log(chalk.white('# sve test'));
  console.log(chalk.yellow('# Test specific component'));
  console.log(chalk.white('# sve test -s <scope>'));
})

const args = require('minimist')(process.argv.slice(2))

if (args.h || args.help) {
  program.help()
}

const scope = args.s || args.scope

const dir = getDirectory(scope, '__tests__/index.test.js')

for(let value of Object.values(dir)) {
  exec(`jest ${value}`, () => {
    const msg = 'Congrats!'
    figlet(msg, (err, data) => {
      console.log(gradient.pastel.multiline(data))
    })
  })
}



