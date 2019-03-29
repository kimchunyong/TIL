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
