
### z-on

Attaches an event listener to the element. 

```html
<div z-on="{
    click    : onClick;
    mousedown: onMouseDown;
}">
<div>
```
### z-show

Set the element’s display to `none` or its original value, depending on the truthy-ness of the binding’s value.

### z-html

Updates the element’s `innerHTML`.

> **Notice:** Using v-html with user-supplied data can be dangerous. It is suggested that you only use v-html when you are absolutely sure about the security of the data source, or pipe it through a custom filter that sanitizes untrusted HTML.

### z-class

If no argument is provided, it will add the binding’s value to the element’s classList, and update the class as the value changes.

If a directive argument is provided, the argument will be the class to be toggled depending on the binding value’s truthy-ness. Combined with multiple clauses this can be pretty useful:

```html
<span v-class="{
  red    : hasError;
  bold   : isImportant;
  hidden : isHidden;
}"></span>
```

### z-attr
Updates the element’s given attribute (indicated by the argument).

**Example**
```html
<img v-attr="width:w, height:h" />
```

### z-model

> This directive can only be used on \<input\>, \<select\> or \<textarea\> elements.

Create a two-way binding on a form input element. Data is synced on every input event by default. 

### z-style
Apply inline CSS styles to the element.

```html
<div z-style="{
    fontSize: '12px';
    color: '#333';
}"></div>
```

### z-component
Compile this element as a child ViewModel with a registered component constructor. 

```html
<div z-component="c-header"></div>
```

