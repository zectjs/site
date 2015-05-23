### $set(keypath, value)
Set a data value on the Vue instance given a valid keypath. If set value to an it will throw error.

### $get(keypath)
Get a data value with specified keypath.

### $watch([keypath], callback)

- keypath `String` `Optional` 
- callback(nextValue, preValue) `Function`

Listen change of the viewModel instance, if keypath is given it will invoke when change with the same keypath.

### $unwatch(callback)
Unlisten changes of the viewModel instance with specified callback function.

### $compile(el, [scope])

- el `Element`
- scope `Object` `Optional`

Compile sub-template of current viewModel.

### $component(id)
Get compoent constructor in the scope of current viewModel.

### $destroy
Destroy current vm. All instance properties and methods will be free.
