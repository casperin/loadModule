# Load Module

This is a lowtech way to solve the problem of loading modules in the browser in javascript.

## Usage

Loading a module:

```html
<script src='loadModule.js'></script>
<script>
    loadModule('foo.js', 'foo', function (m) {
        // I got my module: m
        m.name === 'foo' // will be true
    })
</script>

Exporting a module:

```js
// foo.js
module.exports = {
    name: 'foo',
    // Whatever else you need to export
    init: function () {
        console.log("hello from foo")
    }
}
```
