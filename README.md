TailwindCSS-Phx-Live
===

`tailwindcss-phx-live` is a TailwindCSS plugin that provides variants for Phoenix LiveView's `phx-*-loading` events/css-classes.

[github.com/rktjmp/tailwindcss-phx-live](https://github.com/rktjmp/tailwindcss-phx-live)

[npmjs.com/package/tailwindcss-phx-live](https://www.npmjs.com/package/tailwindcss-phx-live)

Variants
---

- `phx-click`
- `phx-change`
- `phx-submit`
- `phx-focus`
  - _Note: tailwind already has focus variants!_
- `phx-blur`
- `phx-keydown`
  - Applies to both `phx-keydown` and `phx-window-keydown`.
- `phx-keyup`
  - Applies to both `phx-keyup` and `phx-window-keyup`.
- `phx-connected`
- `phx-loading`
- `phx-error`

Usage
---

You can use the variants on the "root" element or any child.

```html

<div phx-click="..." class="phx-click:bg-red-200"></div>
```

```html

<div phx-click="...">
  <img class="loading-icon opacity-0 phx-click:opacity-100">
</div>
````

Configuration
---

Refer to tailwinds documentation, but roughly:

```js
module.exports = {
  variants: {
    extend: {
      opacity: ['phx-click'],
      backgroundColor: ['phx-click', 'phx-submit'],
    },
  },
  plugins: [
    require('tailwindcss-phx-live')
  ],
}
```

