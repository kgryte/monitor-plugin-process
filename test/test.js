
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Proxy the require module:
	proxyquire = require( 'proxyquire' ),

	// Module to be tested:
	plugin = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'monitor-process-plugin', function tests() {
	'use strict';

	// SETUP //

	var monitor;

	beforeEach( function() {
		monitor = {};
	});


	// TESTS //

	it( 'should export a function', function test() {
		expect( plugin ).to.be.a( 'function' );
	});

	it( 'should have an arity of 2', function test() {
		assert.strictEqual( plugin.length, 2 );
	});

	it( 'should append to the monitor object', function test( done ) {
		plugin( monitor, next );
		function next() {
			expect( monitor.process ).to.be.an( 'object' );
			done();
		}
	});

	it( 'should handle errors', function test( done ) {
		var stubs = {};

		stubs[ "metrics-process" ] = function( clbk ) {
			clbk( new Error( 'error message' ) );
		};
		
		var plugin = proxyquire( './../lib', stubs );

		plugin( {}, next );

		function next( error ) {
			if ( error ) {
				assert.ok( true );
			} else {
				assert.notOk( true );
			}
			done();
		}
	});

});