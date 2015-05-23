### el
- Type: `String | HTMLElement`

Provide the Zect instance with an existing DOM element. It can be a CSS selector string, an actual HTMLElement, or a function that returns an HTMLElement. The resolved element will be accessible as vm.$el.

### data
- Type: `Object | Function`

The data object for the Zect instance. It can be accessed as vm.$data:
```js
var data = { a: 1 }
var vm = new Zect({
  data: data
})
vm.$data.a === 1 // -> true
```

### mixins
- Type: `Object`

Merge properties and function from given object to current viewModel's options.

### methods
- Type: `Object`

Methods to be mixed into the Zect instance. You can access these methods directly on the VM instance, or use them in directive expressions. All methods will have their this context automatically bound to the Zect instance.

### template
- Type: `Object`

A string template to be inserted into vm.$el

### computed
- Type: `Object`

Computed properties to be mixed into the Zect instance. All getters and setters have their this context automatically bound to the Zect instance. For more detail see [Computed Properties](https://github.com/switer/Zect#computed-properties)

### directives
- Type: `Object`

Define directives that only be used in current viewMode. About `directive` for more detailt see [Custom Directive](https://github.com/switer/Zect#custom-directive)

### components
- Type: `Object`
Define componens that only be used in current viewMode. About `component` for more detailt see [Reusable Component](https://github.com/switer/Zect#reusable-component)

### created
- Type: `Function`

For more detail see [Lifecyle Methods/created](https://github.com/switer/Zect/wiki/Lifecyle-Methods#created)

### ready
- Type: `Function`

For more detail see [Lifecyle Methods/ready](https://github.com/switer/Zect/wiki/Lifecyle-Methods#ready)

### destroy
- Type: `Function`

For more detail see [Lifecyle Methods/destroy](https://github.com/switer/Zect/wiki/Lifecyle-Methods#destroy)