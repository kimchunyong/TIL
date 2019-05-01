## 함수형프로그래밍

### pipe

```javascript
const pipe = (...fns) => value => fns.reduce((acc, fn) => fn(acc), value);

pipe(
  x => x + 10,
  x => x + 20,
  x => x * 100
)(0);
// => (((0 + 10) + 20) * 100) = 3000
```

### compose

```javascript
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
compose(
  x => x + 10,
  x => x + 20,
  x => x * 100
)(0);

// => (((0 * 100) + 20) + 10) = 30
```
