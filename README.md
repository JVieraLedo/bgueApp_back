# bgueAdmin bgue-admin-angular
## Responsive, bloat free, bootstrap powered admin style dashboard!

bgue-admin-angular is an AngularJS implementation of the bgueAdmin admin dashboard. 
The dashboard uses a small number of modules to get you started.

## Usage
### Requirements
* [NodeJS](http://nodejs.org/) (with [NPM](https://www.npmjs.org/))
* [Bower](http://bower.io)
* [Gulp](http://gulpjs.com)

### Installation
1. Clone the repository: `git clone https://github.com/JVieraLedo/bgueApp_back.git`
2. Install the NodeJS dependencies: `npm install`.
3. Install the Bower dependencies: `bower install`.
4. Run the gulp build task: `gulp build`.
5. Run the gulp default task: `gulp`. 
This will build any changes made automatically, and also run a live reload server on 
[http://localhost:8888](http://localhost:8888).

Ensure your preferred web server points towards the `dist` directory.

### Development
Continue developing the dashboard further by editing the `src` directory.
 With the `gulp` command, any file changes made will automatically be compiled 
 into the specific location within the `dist` directory.

#### Modules & Packages
By default, bgue-admin-angular includes 
[`ui.bootstrap`](http://angular-ui.github.io/bootstrap/), 
[`ui.router`](https://github.com/angular-ui/ui-router) and 
[`ngCookies`](https://docs.angularjs.org/api/ngCookies). 

If you'd like to include any additional modules/packages not included with bgue-admin-angular, 
add them to your `bower.json` file and then update the `src/index.html` file,
 to include them in the minified distribution output.

## Credits
* [JVieraLedo](https://github.com/JVieraLedo)
