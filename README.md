# yardstometers.js

JavaScript conversion of yards to meters.

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
