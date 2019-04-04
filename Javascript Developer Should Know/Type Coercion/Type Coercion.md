# Type Coercion

```javascript
    4 + "hello"; //4hello
    4 + 4 + "hello"; //8hello
    "" == true //false
    1 == true //ture
    66 + true //67
```

```javascript
    66 + true //true => 1로 형변환
    66 + false //false => 0로 형변환
    10 + 66 + "false" // 76false
    25 - "1" // 24
    25 + "5" //255
```
자바스크립트 연산은 왼쪽에서 오른쪽으로 동작.

```javascript
    "1" == 1 //true
    "1" === 1 //false
    "true" == true // NaN == 1 => false
```

`===`사용시 Type Coercion이 일어나지않음