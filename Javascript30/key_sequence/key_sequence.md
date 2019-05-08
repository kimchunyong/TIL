# key_sequence

## HTML

```html
<script
  type="text/javascript"
  src="http://www.cornify.com/js/cornify.js"
></script>
```

## js

```javascript
const pressed = [];
const secretCode = 'wesbos';

window.addEventListener('keyup', e => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    console.log('DING DING!');
    cornify_add();
  }
  console.log(pressed);
});
```
