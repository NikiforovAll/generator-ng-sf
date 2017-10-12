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
        message: 'Enter feature name:'
      },
      {
        type: 'input',
        name: 'state',
        message: 'Enter state name:'
      },
      {
        type: 'input',
        name: 'route',
        message: 'Enter route:'
      }
    ]).then(result => {
      this.fs.copy(
        this.templatePath('view.html'),
        this.destinationPath(
          this.options.path + '/' + result.name + '/' + result.name + '.html'
        )
      );
      var templateParams = {
        name: capitalizeFirstLetter(result.name),
        lname: result.name,
        route: result.route,
        state: result.state
      };
      this.fs.copyTpl(
        this.templatePath('controller.js'),
        this.destinationPath(
          this.options.path + '/' + result.name + '/' + result.name + '.ctrl.js'
        ),
        templateParams
      );
      this.fs.copyTpl(
        this.templatePath('routes.js'),
        this.destinationPath(
          this.options.path + '/' + result.name + '/' + result.name + '.routes.js'
        ),
        templateParams
      );
      this.fs.copyTpl(
        this.templatePath('index.js'),
        this.destinationPath(this.options.path + '/' + result.name + '/index.js'),
        templateParams
      );
      this.log('\n' + chalk.red("Don't forget") + ' to import as a module!\n');
    });
  }
};
