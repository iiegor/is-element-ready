# is-element-ready

## Usage

```javascript
const isElementReady = require('is-element-ready');

isElementReady('#hello').then(function(element) {
  console.log('The element now exists in the DOM', element);
});
```

## API

### isElementReady(selector[, target])

- selector - *String*
- target - *Node*

## License
MIT © [Iegor Azuaga](https://github.com/iiegor)
