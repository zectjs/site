### Zect(options)
It is a constructor function that allows you to create Zect instances. Creating a Zect instance is straightforward:
```js
var vm = new Zect({ /* options */ })
```
When you instantiate a Zect instance, you need to pass in an option object which can include information about the DOM element, data object, mixin methods, lifecycle callbacks and more. See the full list of [Instantiation Options](https://github.com/switer/Zect/wiki/Instance-Options).

### Zect.extend(options)
Create a “subclass” of the base Zect constructor. All instantiation options can be used here. The special cases to note here are `el` and `data`, which must be functions in this case.

**Example**
```js
var Profile = Zect.extend({
  el: document.createElement('p'),
  template: '{{firstName}} {{lastName}} aka {{alias}}'
})
var profile = new Profile({
  data: {
    firstName : 'Walter',
    lastName  : 'White',
    alias     : 'Heisenberg'
  }  
})
profile.$appendTo('body')
```

### Zect.component(id, [definition])
Register or retrieve a global component. For more details see [Reusable Component](https://github.com/switer/Zect#reusable-component).

### Zect.namespace(namespace)
Change directive and template-element prefix with custom namespace. Such as:

```js
Zect.namespace('ng')
```
```html
<ng-if is="{show}">
<div ng-attr="{highlight: hl}"></div>
</ng-if>
```

### Zect.directive(id, [definition])
Register or retrieve a global custom directive.For more detail see [Custom Directive](https://github.com/switer/Zect#custom-directive)