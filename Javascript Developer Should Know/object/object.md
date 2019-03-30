# Object

## 프로퍼티 축약 표현

객체 리터럴은 key 와 value로 구성된다.

```javascript
    //ES5
    var x = 1, y = 2;

    var obj = {
        x: x,
        y: y
    };

    console.log(obj) // {x:1, y:2}
```

```javascript
    //ES6
    let x = 1, y = 2;

    const obj = {x,y}

    console.log(obj); //{x:1, y:2}
```

## 프로퍼티 키 동적 생성

```javascript
    //ES5
    var prefix = 'prop';
    var i = 0;

    var obj = {};

    obj[prefix + '_' + ++i] = i;
    obj[prefix + '_' + ++i] = i;
    obj[prefix + '_' + ++i] = i;

    console.log(obj); //{prop_1:1, prop_2:2, prop_3:3}
```

```javascript
    //ES6
    const prefix = 'prop';
    let i = 0;
    const obj = {
        [`${prefix}_${++i}`]:i,
        [`${prefix}_${++i}`]:i,
        [`${prefix}_${++i}`]:i
    };

    console.log(obj) //{prop_1:1, prop_2:2, prop_3:3}
```

## 메소드 축약 표현

```javascript
    //ES5
    var obj = {
        name: 'Lee',

        sayHi: function(){
            console.log('Hi!' + this.name);
        }
    };

    obj.sayHi(); // Hi! Lee
```

```javascript
    //ES6
    const obj = {
        name:'Lee',

        sayHi(){
            console.log('Hi!' + this.name)
        }
    }

    obj.sayHi(); // Hi! Lee
```

## 클래스

```javascript
    //ES5
    var Person = (function(){
        //Constructor
        function Person(name) {
            this._name = name;
        }

        //pubic method
        Person.prototype.sayHi = function(){
            console.log('Hi' + this._name);
        }

        console.log(Person);
        return Person;
    }());

    var me = new Person('Lee');

    me.sayHi(); //Hi! Lee.
```

```javascript
    //ES6
    class Foo{};

    const foo = new Foo();

    console.log(Foo === Foo.prototype.constructor); // true
```
```javascript
    class Foo{};

    const foo = Foo(); // TypeError: Class constructor Foo cannot be invoked without 'new'
```
new 연산자를 사용하지 않고 constructor를 호출하면 타입 에러(TypeError)가 발생한다. constructor는 new 연산자 없이 호출할 수 없다.

## Counstructor
constructor는 인스턴스를 생성하고 클래스 프로퍼티를 초기화하기 위한 특수한 메소드이다. constructor는 클래스 내에 한 개만 존재할 수 있으며 만약 클래스가 2개 이상의 constructor를 포함하면 문법 에러(SyntaxError)가 발생한다. 인스턴스를 생성할 때 new 연산자와 함께 호출한 것이 바로 constructor이며 constructor의 파라미터에 전달한 값은 클래스 프로퍼티에 할당한다.
constructor는 생략할 수 있다. constructor를 생략하면 클래스에 constructor() {}를 포함한 것과 동일하게 동작한다. 즉, 빈 객체를 생성한다. 따라서 클래스 프로퍼티를 선언하려면 인스턴스를 생성한 이후, 클래스 프로퍼티를 동적 할당해야 한다.

```javascript
    class Foo { }

    const foo = new Foo();
    console.log(foo); // Foo {}

    // 클래스 프로퍼티의 동적 할당 및 초기화
    foo.num = 1;
    console.log(foo); // Foo&nbsp;{ num: 1 }
```

```javascript
    class Foo {
    // constructor는 인스턴스의 생성과 동시에 클래스 프로퍼티의 생성과 초기화를 실행한다.
    constructor(num) {
        this.num = num;
    }
    }

    const foo = new Foo(1);

    console.log(foo); // Foo { num: 1 }
```

```javascript
    class Foo {
    let name = ''; // SyntaxError
        name = '' //오류가 안남

    constructor() {}
    }
```
클래스 몸체(class body)에는 메소드만 선언할 수 있다. 클래스 바디에 클래스 프로퍼티(인스턴스 필드, 멤버 변수)를 선언하면 문법 에러(SyntaxError)가 발생한다.

```javascript
    class Polygon {
        constructor(height, width) {
            this.name = 'polygon';
            this.height = height;
            this.width = width;
        }
    }

    class Square extends Polygon {
        constructor(length) {
            super(length,length);
            this.name = 'Square';
        }
    }

    var box1 = new Square(2);

    console.log(box1); // height: 2, name: "Square", width: 2
```

## 호이스팅

```javascript
    const foo = new Foo(); // ReferenceError: Foo is not defined
    class Foo {}
```
let,const와 같이 호이스팅 되지않는다.
