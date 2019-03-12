# Primitive Types

# javascript Styles

- 기본자료형
- Boolean
- String
- Number
- null
- undefined
- Symbols(ECMAScript6에서 추가됨)
- 별도로 Object가 있음

---

## 기본타입

오브젝트를 제외한 모든 값은 변경 불가능한 값 (immutable value) 이다. 문자열은 불변값 (immutable) 이다. 이런 값을 "primitive values" 라고 일컫는다

```javascript
true; //Boolean
("hello"); //String
3.14; //Numbers
null; //null
undefined; //undefined
```

### Boolean

Boolean 은 논리적인 요소를 나타내고, true 와 false 의 두 가지 값을 가질 수 있다.

### null

Null 타입은 딱 한 가지 값, null 을 가질 수 있다.

```javascript
let hello;
console.log(hello === null); //false null은 존재하지않음 이라는값
```

### undefined

값을 할당하지 않은 변수는 undefined 값을 가진다.

```javascript
let hello;
console.log(hello === undefined); // true hello는 정의되지 않음
```

### Number

Number 타입은 세 가지 의미있는 몇가지 상징적인 값들도 표현할 수 있다. 이 값에는 +무한대, -무한대, NaN (숫자가 아님 숫자형 자료)이 있다

```javascript
Math.pos(5, "hello"); //NaN 숫자는아니지만 숫자형 자료
```

### String

자바스크립트의 String 타입은 텍스트 데이터를 나타내는데 사용한다.
String의 각 요소는 String의 위치를 차지한다. 첫 번째 요소는 0번 인덱스에 있고, 다음 요소는 1번, 그 다음 요소는 2번... 같은 방식이다.
String 의 길이는 String이 가지고있는 요소의 갯수이다.

```javascript
var test = "abcde";
console.log(test.length); // 5
//test[0] -> a , test[1] -> b, test[2] -> c , test[3] -> d, test[4] -> e
```

자바스크립트의 문자열은 변경 불가능 (immutable) 하다. 이것은 한 번 문자열이 생성되면, 그 문자열을 수정할 수 없다는걸 의미한다.

```javascript
var str = "Hello";
str = "world";
```

첫번째 구문이 실행되면 메모리에 문자열 'Hello'가 생성이되고 식별자 str은 메모리에 생성된 문자열 'Hello'메모리 주소를 가르킨다.
그리고 두번째 구문이 실행 되면 이전에 생성된 문자열 'Hello'을 수정하는 것이 아니라 새로운 문자열 'world'를 메모리에 생성하고 식별자 str은 이것을 가르킨다.
이때 문자열 'Hello'와 'world'는 모두 메모리에 존재하고 있다.변수 str은 문자열 ‘Hello’를 가리키고 있다가 문자열 ‘world’를 가리키도록 변경되었을 뿐이다.

```javascript
var statement = "I am an immutable value"; // string은 immutable value
var otherStr = statement.slice(8, 17);
console.log(otherStr); // 'immutable'
console.log(statement); // 'I am an immutable value'
```

2행에서 Stirng 객체의 slice() 메소드는 statement 변수에 저장된 문자열을 변경하는 것이 아니라 사실은 새로운 문자열을 생성하여 반환하고 있다.
그 이유는 문자열은 변경할 수 없는 immutable value이기 때문이다.
