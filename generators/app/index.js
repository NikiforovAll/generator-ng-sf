'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('appname', { type: String, required: false });
  }

  hello() {
    this.log(yosay(chalk.red('generator-ng-sf') + '\n for angular-sf-seed'));
  }

  writing() {
    this.fs.copy(this.templatePath('**/*'), this.destinationPath(''));
  }
};
