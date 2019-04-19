# function & closure

## 1.함수
함수는 다음과 같은 함수 키워드로 구성되어 있다.

- 함수의 이름
- 괄호 안에서 쉼표로 분리된 함수의 매개변수 목록
- 중괄호 `{}`안에서 함수를 정의하는 자바스크립트 표현

```javascript
    function square(number){
        return number * number;
    }

    square(3); //return값 9
```

## 2.클로져

```javascript
    function outerFunc(){
        var x = 10;
        var innerFunc = function(){
            console.log(x);
        }
        innerFunc();
    }
    outerFunc(); //10;
```

```javascript
    function outerFunc() {
    var x = 10;
    var innerFunc = function () { console.log(x); };
    return innerFunc;
    }

    /**
    *  함수 outerFunc를 호출하면 내부 함수 innerFunc가 반환된다.
    *  그리고 함수 outerFunc의 실행 컨텍스트는 소멸한다.
    */
    var inner = outerFunc();
    inner(); // 10
```

외부함수보다 내부함수가 더 오래 유지되는 경우, 외부 함수 밖에서 내부함수가 호출되더라도 외부함수의 지역 변수에 접근할 수 있는데 이러한 함수를 클로저(Closure)라고 부른다.

## 3.call()

```javascript
var person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var person1 = {
    firstName:"John",
    lastName: "Doe"
}
var person2 = {
    firstName:"Mary",
    lastName: "Doe"
}
person.fullName.call(person1);  // Will return "John Doe"
```
call()을 활용해서 arguments를 넘길수도있다.

```javascript
var person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
person.fullName.call(person1, "Oslo", "Norway");
```

## 4.apply()

arguments를 array형태로 받는다.

```javascript
var person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
person.fullName.apply(person1, ["Oslo", "Norway"]);
```

## 5.bind()
bind 함수에 대해 알아보겠습니다. bind 함수는 함수가 가리키는 this만 바꾸고 호출하지는 않는 겁니다.

```javascript
var obj = {
  string: 'zero',
  yell: function() {
    alert(this.string);
  }
};
var obj2 = {
  string: 'what?'
};
var yell2 = obj.yell.bind(obj2);
yell2(); // 'what?'
```
yell 함수의 this가 obj2로 바뀌었습니다.