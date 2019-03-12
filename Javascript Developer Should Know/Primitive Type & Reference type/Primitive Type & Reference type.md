# Primitive Type & Reference type

## 원시타입(Primitive Type)

원시타입 데이터는 변수에 할당될 때 메모리 상에 고정된 크기로 저장되고 해당변수가 원시 데이터 값을 보관한다.

- Number
- Boolean
- String
- null
- undefeind

---

### 원시 타입 변수 복사

각 변수 간에 원시 타입 데이터를 복사할 경우 데이터의 값이 복사된다.

```javascript
let x = 100;
let y = x;
x = 50;
console.log(y); //100
console.log(x); //50
```

### 문자열 변수 복사

```javascript
var x = "Hello";
var y = x;
x = "Hi";
console.log(x); // Hi
console.log(y); // Hello
```

## 참조타입(Reference type)

참조 타입 데이터는 크기가 정해져 있지 않고 변수에 할당될 때 값이 직접 해당 변수에 저장될 수 없으며, 변수에는 데이터에 대한 참조만 저장된다. 참조는 참조 타입 데이터의 주소이지 해당 데이터의 값이 아니다.

- Object
- Array
- function(){}

### 참조 타입 변수 복사

각 변수 간에 참조 타입 데이터를 복사할 경우 데이터의 참조가 복사된다.

```javascript
var x = { count: 100 }; // 참조 타입 데이터를 선언
var y = x; // 참조를 새 변수에 복사
x.count = 99; // 참조 타입 데이터를 변경
console.log(y.count); // 99, 'x'와 'y'는 동일한 참조를 담고 있으며, 따라서 동일한 객체를 가리킴
```
