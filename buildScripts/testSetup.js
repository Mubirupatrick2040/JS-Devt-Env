// This file isn't transpiled, so must use CommonJS and ES5

// Regitser babel to transpile before our tests run.
require('babel-register')();

// Diable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function() {};