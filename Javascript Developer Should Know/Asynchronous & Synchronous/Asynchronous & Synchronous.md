## 콜백
콜백 함수는 함수로써 다른 함수에 전달되며, 이는 외부 함수 내에서 일종의 루틴 또는 동작을 완성하기 위해 호출.

```javascript
function greeting(name){
    alert('반가워' + name);
}

function processUserInput(callback){
    var name = prompt('이름을 입력해주세요');
    callback(name);
}
processUserInput(greeting);
```

## 비동기와 동기
비동기와 동기의 차이점은 쓰레드 내에서 처리를 순차적으로 처리가 되는것은 동기
현재 쓰레드 내에서 처리는 그대로 돌아가며 다른 쓰레드가 생겨 처리하는 형식은 비동기


```javascript
// #1
console.log('Hello');
// #2
setTimeout(function () {
	console.log('Bye');
}, 3000);
// #3
console.log('Hello Again');
```
위의 코드를

동기처리로 생각한다면
- Hello
- 3초 있다가 출력 Bye
- Hello Again

하지만 위의 코드의 `setTimeout`은 비동기이므로

- Hello
- Hello Again
- 3초 있다가 출력 Bye

[콜백과 동기 비동기를 잘 알려주는 동영상](https://www.youtube.com/watch?v=j0Viy3v97gY)
