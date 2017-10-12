'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('path', { type: String, required: false, default: '.' });
  }

  writing() {
    var capitalizeFirstLetter = function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };
    this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter component name:'
      }
    ]).then(result => {
      this.fs.copy(
        this.templatePath('component.html'),
        this.destinationPath(
          this.options.path + '/' + result.name + '/' + result.name + '.html'
        )
      );
      this.fs.copyTpl(
        this.templatePath('controller.js'),
        this.destinationPath(
          this.options.path + '/' + result.name + '/' + result.name + '.ctrl.js'
        ),
        {
          name: capitalizeFirstLetter(result.name),
          lname: result.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('component.js'),
        this.destinationPath(
          this.options.path + '/' + result.name + '/' + result.name + '.component.js'
        ),
        {
          name: capitalizeFirstLetter(result.name),
          lname: result.name
        }
      );
      this.log('\n' + chalk.red("Don't forget") + ' to import component to module!\n');
    });
  }
};
