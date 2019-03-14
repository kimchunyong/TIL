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
모든 값은 복사를 통해 일어난다.
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

