// Modules
global._ =                require("lodash-node");
global.browserSync =      require("browser-sync");
global.del =              require("del");
global.gulp =             require('gulp');
global.gulpif =           require("gulp-if");
global.gulpUtil =         require("gulp-util");
global.gulpWatch =        require("gulp-watch");
global.sourcemaps =       require('gulp-sourcemaps');
global.moduleTranspile =  require('gulp-es6-module-transpiler');
global.Q =                require("q");
global.path =             require("path");
global.plumber =          require("gulp-plumber");
global.ts =               require('gulp-typescript');
global.uglify =           require("gulp-uglify");
global.webpack =          require('webpack-stream');

// Variables
global.Libs = {};
global.devEnvironment = false;

// Paths
global.Paths = {
  javascripts: "./public/javascripts/",
  javascriptsMin: "./public/javascripts-min/"
};

// Libs
require("fs").readdirSync(require("path").join(__dirname, "gulp/libs")).forEach(function(file) {
  global.Libs[file.split(".js")[0]] = require("./gulp/libs/" + file);
});

// Tasks
require("fs").readdirSync(require("path").join(__dirname, "gulp/tasks")).forEach(function(file) {
  require("./gulp/tasks/" + file);
});