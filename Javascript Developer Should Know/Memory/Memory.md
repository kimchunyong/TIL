# 메모리

## 메모리란?

쉽게 말하면 컴퓨터가 가질수있는 주소를 할당 할 수 있는 크기

- 32bit는 32bit크기만큼의 주소를 할당 할 수 있는 메모리의 크기를 가지고있음(4G)
- 64bit는 64bit크기만큼의 주소를 할당 할 수 있는 메모리의 크기를 가지고있음

## 메모리모델

var a의 주소는 메모리에 할당된다. 주소 안에는 값이 할당되있다.
var b의 주소에는 a값이 할당된다.

```javascript
var a = "test"; //a에 값을넣음
var b = a; //b에 a의 주소를 넣음
var c = b;
var d = b;

var k = "안녕";
b = k;
console.log(a, b, c, d); //test 안녕 test test
```

b = a의 값을 보고 c = b 값을 보고 d = b 을 바라보게한 상황

![Alt text](https://cdn-images-1.medium.com/max/1600/1*i9nTlOSPH3q-sCd5-WHg-g.pnghttps://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5a068ab8-93f6-4668-af5d-2671dbd815f9%2F_2.png?width=1290)

k의 값을 할당한후 b = k를 바라보게하면 메모리는 이런식이된다.

![Alt text](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff48bb163-08d4-4edf-bf3d-aecfb8eb69e7%2F_1.png?width=1290)

또한 console.log(a,b,c,d); 찍으면 결과 값은test 안녕 test test
값을 복사한 경우이기때문에 참조가 아님!! b가 가르키는 값과 c,d가 가르키는값이 달라짐.

![Alt text](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F079fb8c8-deb6-4c46-a1b1-334da51f6ecc%2F_3.png?width=1290)

코드상에 c 와 d 는 언제나 b가 같다고 읽히지만 b는 k를바라보면서 모순이 생김

## 객체지향 접근을통한 문제 해결

객체는 직접참조(깊은복사)를 하지않는다.값을 참조한다.

```javascript
var a = "test";
var b = { name: a, v: 3 };
var c = b;
var d = b;

var k = "안녕";
b.name = k;

console.log(a, b, c, d); //{name: "안녕", v: 3}name: "안녕"v: 3__proto__: Object {name: "안녕", v: 3} {name: "안녕", v: 3}
```

![Alt text](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fce7db21d-07a2-4f30-b151-a4d4ae54d92b%2F_4.png?width=1280)

![Alt text](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F640fd985-66d7-4b26-872b-0e636d557813%2F_5.png?width=1290)
값을 참조를 하게되므로 b가 변하면 모두가 변한다.
