## 함수형프로그래밍

```javascript
const pipe = (...fns) => (value) => fns.reduce((acc, fn) => fn(acc), value);

pipe(
  x => x + 10,
  x => x + 20,
  x => x * 100,
)(0);
// => 3000
```