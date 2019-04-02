# static

정적 메서드는 클래스의 인스턴스 없이 호출이 가능하며 클래스가 인스턴스화되면 호출할 수 없다

```
    static methodName(){}
```

```javascript
    class animals {
        static staticMethod() {
            return 'Static method has been called';
        }
    }

    animals.staticMethod();

    const ani1 = new animals();

    ani1.staticMethod(); //인스턴스화되었을때 호출이 되지않는다.
    ani1.constructor.staticMethod(); //ani1의 constructor에 접근해서 정적 메소드를 사용가능.
```

```javascript
    class animals {
        constructor(){
            console.log(animals.staticMethod());
            console.log(this.constructor.staticMethod());
        }

        static staticMethod() {
            return 'Static method has been called';
        }
    }

    const ani1 = new StaticMethodCall();
    //static method has been called.
    //static method has been called.
```

### 정정메소드를 쓰는 방법

- 만약 유틸리티 클래스로 작성되고, 변화를 가정하지 않는다.
- 만약 메소드가 인스턴스 변수를 사용하지 않는다.
- 인스턴스 생성에 의존하지 않는다.
- 메소드가 공유되고 있다면, 정적 메소드로 추출해낼 수 있다.
- 메소드가 변화되지 않고, 오버라이딩 되지 않는다.


### 문제점

- 문제점은 상태를 가지고 있지 않은 단순히 메소드만 가지고 있는 구조라고 볼 수 있다.

