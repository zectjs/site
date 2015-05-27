```html
<div id="con">
    <input type="text" z-model="search" />
    <input type="submit" z-on="{onSubmit}" value="submit">
</div>
```

```js
new Zect({
    el: '#con',
    data: {
        search: 'Please input'
    },
    methods: {
        onSubmit: function () {
            this.$data.search // input-value
        }
    }
})
```