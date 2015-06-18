# yardstometers.js

JavaScript conversion of yards to meters.

[![Build Status](https://travis-ci.org/joshause/yardstometers.svg?branch=master)](https://travis-ci.org/joshause/yardstometers)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## Usage

### Node.js

```js
var YardsToMeters = require("yardstometers");
var ytm = new YardsToMeters();
ytm.get(1);
// => 0.9144
```

### Browser

(Add necessary `<script>` tag reference to `yardstometers.js`)

```js
// YardsToMeters is autoloaded to window.YardsToMeters
var ytm = new YardsToMeters();
ytm.get(1);
// => 0.9144
```

## Tests

Jasmine

```bash
$ npm test
```

## License

MIT. By [Josh Ause](http://www.github.com/joshause).
