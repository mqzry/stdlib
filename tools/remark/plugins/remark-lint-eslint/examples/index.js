'use strict';

var join = require( 'path' ).join;
var resolve = require( 'path' ).resolve;
var remark = require( 'remark' );
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var factory = require( './../lib' ).factory;

// Define path to an ESLint config file:
var config = resolve( __dirname, '..', '..', '..', '..', '..', 'etc', 'eslint', '.eslintrc.markdown.js' );

// Load a Markdown file:
var fpath = join( __dirname, 'fixtures', 'file.md' );
var file = readFileSync( fpath );

// Define plugin options:
var opts = {
	'config': config
};

// Create a plugin:
var plugin = factory( opts );

// Lint code blocks:
var out = remark().use( plugin ).processSync( file.toString() ); // eslint-disable-line no-sync

console.log( out );
