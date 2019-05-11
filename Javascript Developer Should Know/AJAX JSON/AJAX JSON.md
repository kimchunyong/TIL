# Ajax와 Json

## Ajax

Ajax(Asynchronous JavaScript and XML)는 자바스크립트를 이용해서 비동기적(Asynchronous)으로 서버와 브라우저가 데이터를 교환할 수 있는 통신 방식을 의미한다.

```javascript
// XMLHttpRequest 객체의 생성
var req = new XMLHttpRequest();
// 비동기 방식으로 Request를 오픈한다
req.open('GET', 'data/test.json', true);
// Request를 전송한다
req.send();
```

```javascript
// XMLHttpRequest.readyState 프로퍼티가 변경(이벤트 발생)될 때마다 콜백함수(이벤트 핸들러)를 호출한다.
req.onreadystatechange = function(e) {
  // readyStates는 XMLHttpRequest의 상태(state)를 반환
  // readyState: 4 => DONE(서버 응답 완료)
  if (req.readyState === XMLHttpRequest.DONE) {
    // status는 response 상태 코드를 반환 : 200 => 정상 응답
    if (req.status == 200) {
      console.log(req.responseText);
    } else {
      console.log('Error!');
    }
  }
};
```

## Json데이터

Ajax 요청에 대한 서버의 응답은 주로 HTML, XML, JSON이 사용된다. 이 중 가장 일반적인 데이터 형식은 JSON(JavaScript Object Notation)이다.

```javascript
{
    "name":"kim",
    "age" : 31,
    "gender":"male",
    "addres":"bucheon"
}
```

자바스크립트의 객체 리터럴과 매우 흡사하다. 하지만 JSON은 순수한 텍스트로 구성된 데이터이다.

키는 반드시 큰따옴표(작은따옴표 사용불가)로 둘러싸야 한다.

JSON.stringify() 메소드는 객체를 JSON 형식의 문자열로 변환한다.
JSON.parse() 메소드는 JSON 데이터를 가진 문자열을 객체로 변환한다.
