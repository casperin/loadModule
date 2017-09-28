# Load Module

This is a lowtech way to solve the problem of loading modules in the browser in javascript.

## Usage

Loading a module:

`loadModule` takes 3 arguments:
1. The path of the file (with or without `.js` at the end).
2. The name of the module (see exporting a module below).
3. A callback that receives the module once it's loaded.

```html
<script src='loadModule.js'></script>
<script>
    loadModule('foo.js', 'foo', function (m) {
        // I got my module: m
        m.name === 'foo' // will be true
    })
</script>
```

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
