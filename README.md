# generator-ng-sf [![NPM version][npm-image]][npm-url]
> yeoman generator for angular-sf-seed based on [angular-sf-seed](https://github.com/vladborsh/angular-sf-seed)

## Installation

First, install [Yeoman](http://yeoman.io) and generator-ng-sf using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-ng-sf
```

Then generate your new project:

```bash
yo ng-sf
```

To generate component: 
```bash
yo ng-sf:component <component-path>
```
The following parts will be generated: 
```
<component-path>
|_<component-name>
    |_component.html
    |_component.ctrl.js
    |_component.js
```
To generate feature: 
```bash
yo ng-sf:feature <feature-path>
```
The following parts will be generated: 
```
<feature-path>
|_<feature-name>
    |_routes.js
    |_controller.js
    |_index.js
    |_view.html
```
## License

ISC © [NikiforovAll]()


[npm-image]: https://badge.fury.io/js/generator-ng-sf.svg
[npm-url]: https://www.npmjs.com/package/generator-ng-sf
