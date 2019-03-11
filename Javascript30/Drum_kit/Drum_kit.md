# Drum kit

---

## 구현에 필요한것들

- keyboard를 눌렀을때 이벤트 감지
- key를 눌렀을때 keyCode값을 이용해 현재 누른 <audio>의 data-key값과 일치하는 DOM을 찾는다. (누른 audio를 플레이)
- <div>도 마찬가지로 data-key값과 일치하는 DOM을 찾는다.(누른 .key값에 .playing 클래스를 추가하여 스타일적용)
- 눌른뒤 CSS의 transition이 끝나는 값을 감지한다. addEventListener의 'transitionend'를 이용한다.이를 이용해서 transition이 끝나면 .playing를 제거한다.

## 구현

---

```html
html { font-size: 10px; background: url(http://i.imgur.com/b9r5sEL.jpg) bottom
center; background-size: cover; } body, html { margin: 0; padding: 0;
font-family: sans-serif; } .keys { display: flex; flex: 1; min-height: 100vh;
align-items: center; justify-content: center; } .key { border: .4rem solid
black; border-radius: .5rem; margin: 1rem; font-size: 1.5rem; padding: 1rem
.5rem; transition: all .07s ease; width: 10rem; text-align: center; color:
white; background: rgba(0, 0, 0, 0.4); text-shadow: 0 0 .5rem black; } .playing
{ transform: scale(1.1); border-color: #ffc600; box-shadow: 0 0 1rem #ffc600; }
kbd { display: block; font-size: 4rem; } .sound { font-size: 1.2rem;
text-transform: uppercase; letter-spacing: .1rem; color: #ffc600; }
```
