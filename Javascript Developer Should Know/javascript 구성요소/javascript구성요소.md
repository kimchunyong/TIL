# Javascript 구성요소

## 1. LEXICAL GRAMMAR

- CONTROL CHARACTER - 제어문자
- WHITE SPACE - 공백문자
- LINE TERMINATORS - 개행문자
- COMMENTS - 주석
- KEYWORD - 예약어
- LITERALS - 리터럴

## 2. LANGUAGE ELEMENT
- STATEMENTS - 문
 - 공문, 식문, 제어문, 선언문, 단문, 중문

- EXPRESSION - 식
 - 값식, 연산식, 호출식

- IDENTIFIER - 식별자
 - 기본형, 참조형(변수,상수)

 ```javascript
    a = 10;
 ```
 a는 식별자, a = 10 전체는 식

 ## 3. EXPRESSION - 표현식
 값의 확장된 표현, 항상 단일한 값으로 수용됨.
 ex) 1 + 5 는 6으로 수용됨.

### 3.1 값식
 ```javascript
3
7
true
"abc"
 ```

### 3.2 연산식
```javascript
1 + 3 // 4
```

### 3.3 호출식
```javascript
function a(){
    return 1 + 4;
}
a(); // 5
```

하지만 값은 메모리에 저장하지않으면 메모리에서 사라짐.

예제)
```javascript
3;
4;
true;
```
위 처럼 값식만을 사용하면 메모리에서 사라지기 때문에 꺼내 쓸수가없다.

## 4. IDENTIFIER - 식별자
```javascript
let a = 3;
console.log(a) //3
```
변수는 메모리상에 a라는 주소 이름을 할당하는것, 그 안에는 3이라는 값이 들어있다.
```javascript
typeof a; //number
```
또한 식별자는 메모리상의 a라는 주소이름 뿌만아니라 DataType을 포함하고있다.
식별자에는 값이 들어올수도있고 참조가 들어올수도있다.
```javascript
let a = 3;
let b = a; //b라는 주소에 a라는 값을 복사한다.
```
복사
(모든 값은 복사를 통해 일어난다)
```javascript
let a = 3;
let b = a; //a에 메모리주소 에있는 값인 3을 복사함.
a = 7;
//복사가 되어
console.log(a); //7
console.log(b); //3
```
참조형
```javascript
let a = [1,2,3];
let b = a;
a.push(4);
console.log(a); //[1,2,3,4]
console.log(b); //[1,2,3,4]
```
b는 원래부터 a를 가르키고 있었다. 값을 참조하기때문에 a가 바뀌면 b도 바뀜.

## 5. STATEMENTS

### 흐름 제어

#### 5.1 BLOCK

블록문(또는 다른 언어에서는 복합문)은 0개 이상의 구문을 묶을 때 사용합니다.

```javascript
var x = 1;
let y = 1;

if (true) {
    var x = 2;
    let y = 2;
}

console.log(x);
// expected output: 2

console.log(y);
// expected output: 1
```

#### 5.2 break

break 문은 현재 루프, switch나 label 문을 종료하고 프로그램 제어를 종료된 문의 다음 문으로 넘깁니다.

```javascript
outer_block: {
    inner_block: {
        console.log('1');
        break outer_block; // inner_block과 outer_block 둘다 빠져나옴
        console.log(':-('); // 건너뜀
    }
    console.log('2'); // 건너뜀
}
```
다음 코드는 또한 label 달린 블록이 있는 break 문을 사용하지만 그 break 문이 block_2를 참조하지만 block_1 내에 있기에 구문 오류(Syntax Error)가 발생합니다. break 문은 항상 자신이 참조하는 label 내에 중첩되어야 합니다.
```javascript
block_1: {
    console.log('1');
    break block_2; // SyntaxError: label을 찾을 수 없음
}

block_2: {
    console.log('2');
}
```

#### 5.3 continue

continue 문은 현재 또는 레이블이 지정된 루프의 현재 반복에서 명령문의 실행을 종료하고 반복문의 처음으로 돌아가여 루프문의 다음 코드를 실행합니다.
break 문과 달리 continue는 루프의 실행을 완전히 종료하지 않고 for, while문에서 다음과 같이 동작합니다.
```javascript
var text = "";

for (var i = 0; i < 10; i++) {
  if (i === 3) { //3일때 건너뛴다.
    continue;
  }
  text = text + i;
}

console.log(text);
// expected output: "012456789"
```

#### 5.4 empty
empty 문은 JavaScript 아무것도 동작하지 않습니다.
empty statement은 JavaScript구문에 하나가 필요할 때 어떤 문도 실행되지 않을 것이라는 것을 나타내는 세미 콜론(;)입니다.

```javascript
var array1 = [1, 2, 3];

// Assign all array values to 0
for (i = 0; i < array1.length; array1[i++] = 0) /* empty statement */ ;

console.log(array1);
// expected output: Array [0, 0, 0]
```

#### 5.5 IF, ELSE

```javascript
    if(true){
        console.log('a');
    }else{
        console.log('b');
    }
```

#### 5.6 switch

```javascript
var expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}
```

#### 5.7 throw

throw 문은 사용자 정의 예외를 던질 수 있습니다. 현재 함수의 실행이 중지되고 (throw 이후의 명령문은 실행되지 않습니다.), 컨트롤은 콜 스택의 첫 번째 catch 블록으로 전달됩니다. 호출자 함수 사이에 catch 블록이 없으면 프로그램이 종료됩니다.

```javascript
function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw "Parameter is not a number!";
  }
}

try {
  getRectArea(3, 'A');
}
catch(e) {
  console.log(e);
  // expected output: "Parameter is not a number!"
}
```

#### 5.8 try

try 선언의 구성은 하나 혹은 그 이상의 선언을 포함한 try 블록 및 catch 항목이나 finally 항목 중 최소한 하나 혹은 둘 다 포함하여 이루어진다. 즉, try 선언에는 세 가지 형식이 존재한다.
- try...catch
- try...finally
- try...catch...finally
```javascript
try {
   throw "myException"; // generates an exception
}
catch (e) {
   // statements to handle any exceptions
   logMyErrors(e); // pass exception object to error handler
}
```

#### 5.9 선언

- var
- let
- const

#### 5.10 함수 및 클래스

- function
- function*
- return
- class

#### 5.11 반복문

- do...while
- for
- for each in
- for in
- for of
- while

#### 5.12 기타

- debugger
- export
- import
- label
- with
