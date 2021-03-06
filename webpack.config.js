var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'static/js/public');
var APP_DIR = path.resolve(__dirname, 'static/js/app');

var config = {
    entry: {
	comments: APP_DIR + "/comments.jsx",
	recipes: APP_DIR + "/recipes.jsx",
	recipe: APP_DIR + "/recipe.jsx"
    },

    output: {
	path: BUILD_DIR,
	filename: "[name].entry.chunk.js"
    },

    module : {
	loaders : [
	    {
		test : /\.jsx?/,
		include : APP_DIR,
		loader : 'babel'
	    },
	]
    },

    // prevents `Module not found: Error: Cannot resolve module 'fs'`
    node: {
	fs: "empty"
    }
};

module.exports = config;
