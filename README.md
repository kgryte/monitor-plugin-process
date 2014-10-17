Process Metrics
==========
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Middleware plugin which collects current process metrics.


## Installation

``` bash
$ npm install monitor-plugin-process
```

## Usage

To use the module,

``` javascript
var plugin = require( 'monitor-plugin-process' );
```

The module exports the following method...


#### plugin( obj, clbk )

Appends [process metrics](https://github.com/kgryte/node-metrics-process) to an `object` and then invokes the provided callback.

``` javascript
plugin( {}, function next() {});
```


## Examples

``` javascript
var plugin = require( 'monitor-plugin-process' );

// Initialize a monitor object:
var monitor = {};

// Run the plugin:
plugin( monitor, function next() {
	console.log( JSON.stringify( monitor ) );
});
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Notes

The plugin will append a `process` property to the provided `object`. If a `process` property already exists, the property `value` will be overwritten.



## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```



## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/monitor-plugin-process.svg
[npm-url]: https://npmjs.org/package/monitor-plugin-process

[travis-image]: http://img.shields.io/travis/kgryte/monitor-plugin-process/master.svg
[travis-url]: https://travis-ci.org/kgryte/monitor-plugin-process

[coveralls-image]: https://img.shields.io/coveralls/kgryte/monitor-plugin-process/master.svg
[coveralls-url]: https://coveralls.io/r/kgryte/monitor-plugin-process?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/monitor-plugin-process.svg
[dependencies-url]: https://david-dm.org/kgryte/monitor-plugin-process

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/monitor-plugin-process.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/monitor-plugin-process

[github-issues-image]: http://img.shields.io/github/issues/kgryte/monitor-plugin-process.svg
[github-issues-url]: https://github.com/kgryte/monitor-plugin-process/issues