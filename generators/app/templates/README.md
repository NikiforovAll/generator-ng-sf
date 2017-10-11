### Installation

* Install [node](https://nodejs.org/en/download/) 
* Run `npm install` in directory

### Running app

All bundles will be placed in dist folder. Run `npm run webpack` then `npm run serve`.
Visualforce sample for localy served bundle:
```html
<apex:page sidebar="false" showHeader="false" Controller="ProductController">
    <head>
        <apex:includeScript value="http://localhost:8000/app.bundle.js"/>
    </head>
    <body ng-app="App">
        <app></app>
    </body>
</apex:page>
```
Visualforce sample for deployed bundle:
```html
<apex:page sidebar="false" showHeader="false" Controller="ProductController">
    <head>
        <apex:includeScript value="{!URLFOR($Resource.bundles, 'app.bundle.js')}"/>
    </head>
    <body ng-app="App">
        <app></app>
    </body>
</apex:page>
```

### Deployment 

Deploy runner consumes password and username from command arguments and also from config. Fill use related json in `config` directory and run `npm run deploy -- --env sb`. Also you can run deploy without environment specification, it uses *sb* config by default. *Password shoud be concatenation of user password and security token*

## Scripts

* `npm run webpack` - run webpack and watch directory on changes
* `npm run serve` - run server on localhost 8000
* `npm test` - run unit tests
* `npm run component -- --name *****` - create new component. The parameter following the --name flag is the name of the component to be created.
* `npm run component -- --name ***** --parent ****` - create new component in specified directory
* `npm run deploy -- --username ***** --password ****** --env prod` - run deploy in production. The parameter following the --username flag is the user username. The parameter following the --password flag is the concatenation of user password and security token. The parameter following the --env flag is the organization (sb - sandbox, prod - production)
* `npm run deploy -- --username ***** --password ******` - run deploy in sandbox
* `npm run deploy -- --env prod` - run deploy in production use config
* `npm run deploy` - run deploy in sandbox use config