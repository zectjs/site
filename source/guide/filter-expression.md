Filters actually are function call using in template's expression.

```html
<ul id="con">
    <z-repeat items="{lessThanFour(items)}">
        <li data-index="{$index}">{$value}</li>
    </z-repeat>
</ul>
```

```js
new Zect({
    el: '#con',
    data: function () {
        return [1,2,3,4,5]
    },
    methods: {
        lessThanFour: function (items) {
            return items.filter(function (item) {
                if (item < 4) return true
            })
        }
    }
})
```