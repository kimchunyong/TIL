# Call Stack

Call Stack은 여러 함수들(functions)을 호출하는 스크립트에서 해당 위치를 추적하는 인터프리터 (웹 브라우저의 자바스크립트 인터프리터같은)를 위한 메커니즘입니다. 현재 어떤 함수가 동작하고있는 지, 그 함수 내에서 어떤 함수가 동작하는 지, 다음에 어떤 함수가 호출되어야하는 지 등을 제어합니다.

---

![Alt text](https://cdn-images-1.medium.com/max/1600/1*i9nTlOSPH3q-sCd5-WHg-g.png)

- 스크립트가 함수를 호출하면 인터프리터는 이를 호출 스택에 추가한 다음 함수를 수행하기 시작합니다.
- 해당 함수에 의해 호출되는 모든 함수는 호출 스택에 추가되고 호출이 도달하는 위치에서 실행합니다.
- 메인 함수가 끝나면 인터프리터는 스택을 제거하고 메인 코드 목록에서 중단된 실행을 다시 시작합니다.
- 스택이 할당된 공간보다 많은 공간을 차지하면 "stack overflow" 에러가 발생합니다.

---

```javascript
function three() {
  console.log("i love js!");
}
function two() {
  three();
}
function one() {
  two();
}
function zero() {
  one();
}
zero();
```

[Call Stack](https://www.notion.so/reactdev/Call-Stack-809e3af85f774ff49b5f9b8b1045abd0)

```javascript
function hello() {
  bye();
}

function bye() {
  hello();
}

hello();
```

'Maximum call stack size exceeded' 스택 메모리가 넘침.
