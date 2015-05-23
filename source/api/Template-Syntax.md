### if

Where insert sub-elements into parent DOM Tree or remove.
**Example**
```html
<z-if is="{expression}">
    <!-- sub element -->
    <!-- sub element -->
</z-if>
```

### repeat
Repeat a template element based on an `Array` on the viewModel.

**Example**
```html
<ul>
    <z-repeat items="{users}">
        <li>
            {{name}} {{email}}
        </li>
    </z-repeat>
</ul>
```
### template
`z-template` as an element holder of the viewModel. Zect will copy all attributes from `z-template` element (include `class` and `id`) to instance's `$el`. `class` attribute will be merged.
**Example**
```html
<!-- HTML template-->
<z-template title="{title}" class="my-component">
{title}
</template>

<!-- use -->
<my-component z-data="{title: 'hello'}" class="comp"></my-component>
```
Render result:
```html
<my-component title="hello" class="comp my-component">
hello
</my-component>
</template>
```

### {expression}
Binding data to text-content at that position. The text result of the express will be escaped.

### {- expression}
Binding data to html-content at that position. Th result of the express will `not` be escaped and render to actual element.