Options's Methods: 
* **bind**    Call only once when directive is binding.
* **update**  Call every time when expression's value has been changed.
* **unbind**  Call only once when directive is unbinded.

Directive instance properties:
* **$vm**     Mounted VM of the directive
* **$el**     Mounted target Node of the directive
* **$id**     Current directive instance id
* **$scope**  Repeat directive will create a scope for each item when compiling, your can access "$index", "$value" through "$scope". 

**Example below:**

```html
<div z-tap="{onClick}"></div>
```

```js
Zect.directive('tap', {
    bind: function (result, expression) {
        // do something when init
    },
    update: function (result) {
        // do something when state change or after init
    },
    unbind: function () {
        // do something before destroy the directive instance
    }
})
```