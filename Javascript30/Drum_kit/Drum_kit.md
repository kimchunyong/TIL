# Drum kit

---

## 구현에 필요한것들

- keyboard를 눌렀을때 이벤트 감지
- key를 눌렀을때 keyCode값을 이용해 현재 누른 <audio>의 data-key값과 일치하는 DOM을 찾는다. (누른 audio를 플레이)
- <div>도 마찬가지로 data-key값과 일치하는 DOM을 찾는다.(누른 .key값에 .playing 클래스를 추가하여 스타일적용)
- 눌른뒤 CSS의 transition이 끝나는 값을 감지한다. addEventListener의 'transitionend'를 이용한다.이를 이용해서 transition이 끝나면 .playing를 제거한다.

## 구현

---

```
    html {
        font-size: 10px;
        background: url(http://i.imgur.com/b9r5sEL.jpg) bottom center;
        background-size: cover;
    }

    body,
    html {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }

    .keys {
        display: flex;
        flex: 1;
        min-height: 100vh;
        align-items: center;
        justify-content: center;
    }

    .key {
        border: .4rem solid black;
        border-radius: .5rem;
        margin: 1rem;
        font-size: 1.5rem;
        padding: 1rem .5rem;
        transition: all .07s ease;
        width: 10rem;
        text-align: center;
        color: white;
        background: rgba(0, 0, 0, 0.4);
        text-shadow: 0 0 .5rem black;
    }

    .playing {
        transform: scale(1.1);
        border-color: #ffc600;
        box-shadow: 0 0 1rem #ffc600;
    }

    kbd {
        display: block;
        font-size: 4rem;
    }

    .sound {
        font-size: 1.2rem;
        text-transform: uppercase;
        letter-spacing: .1rem;
        color: #ffc600;
    }
```

```
    <div class="keys">
        <div data-key="65" class="key">
            <kbd>A</kbd>
            <span class="sound">clap</span>
        </div>
        <div data-key="83" class="key">
            <kbd>S</kbd>
            <span class="sound">hihat</span>
        </div>
        <div data-key="68" class="key">
            <kbd>D</kbd>
            <span class="sound">kick</span>
        </div>
        <div data-key="70" class="key">
            <kbd>F</kbd>
            <span class="sound">openhat</span>
        </div>
        <div data-key="71" class="key">
            <kbd>G</kbd>
            <span class="sound">boom</span>
        </div>
        <div data-key="72" class="key">
            <kbd>H</kbd>
            <span class="sound">ride</span>
        </div>
        <div data-key="74" class="key">
            <kbd>J</kbd>
            <span class="sound">snare</span>
        </div>
        <div data-key="75" class="key">
            <kbd>K</kbd>
            <span class="sound">tom</span>
        </div>
        <div data-key="76" class="key">
            <kbd>L</kbd>
            <span class="sound">tink</span>
        </div>
    </div>

    <audio data-key="65" src="sounds/clap.wav"></audio>
    <audio data-key="83" src="sounds/hihat.wav"></audio>
    <audio data-key="68" src="sounds/kick.wav"></audio>
    <audio data-key="70" src="sounds/openhat.wav"></audio>
    <audio data-key="71" src="sounds/boom.wav"></audio>
    <audio data-key="72" src="sounds/ride.wav"></audio>
    <audio data-key="74" src="sounds/snare.wav"></audio>
    <audio data-key="75" src="sounds/tom.wav"></audio>
    <audio data-key="76" src="sounds/tink.wav"></audio>
```

```javascript
window.addEventListener("keydown", function(e) {
  console.log(e); // KeyboardEvent 키보드 이벤트 발생
});
```

keydown이벤트가 일어날때 이벤트 객체는 keyCode값을 가지고있다.

```
window.addEventListener("keydown", function(e) {
  console.log(e.keyCode); // KeyCode값
  const audio = document.querySeletor(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySeletor(`.key[data-key="${e.keyCode}"]`);
});
```

e.keyCode를 이용해 현재 누를 keyCode값과 동일한 data-key를 가진 DOM을 audio와 .key를 가진 값을 저장.

```
    window.addEventListener('keydown', function(e)
        const audio = document.querySeletor(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySeletor(`.key[data-key="${e.keyCode}"]`);
        if(!audio) return; //누른 키보드의 keyCode값이 없으면 정지
        audio.play(); //audio를 플레이시킨다.
    });
```

audio의 값이 null값이면 중지, 누른값이 있다면 audio를 재생한다.

```javascript
    window.addEventListener('keydown', function(e)
        const audio = document.querySeletor(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySeletor(`.key[data-key="${e.keyCode}"]`);
        if(!audio) return; //누른 키보드의 keyCode값이 없으면 정지
        audio.play(); //audio를 플레이시킨다.
        key.classList.add('playing');
    });
```

현재 누른 키보드의 keyCode값과 동일한 .key에 playing 클래스를 추가한다.

```javascript
const keys = document.querySelectorAll(".key");
```

.key값을 가진 DOM을 모두 선택한다. 이유는 각각의 .key에 이벤트를 달아 css의 'transitionend' 이벤트를 감지하기위해서.

```javascript
keys.forEach(key =>
  key.addEventListener("transitionend", function(e) {
    console.log(e.propertyName);
    /*
            border-left-color
            border-right-color
            border-top-color
            transform
            box-shadow
            border-bottom-color
        */
  })
);
```

```javascript
keys.forEach(key =>
  key.addEventListener("transitionend", function(e) {
    console.log(e.propertyName);
    /*
            border-left-color
            border-right-color
            border-top-color
            transform
            box-shadow
            border-bottom-color
            border-left-color
            border-right-color
            border-top-color
            transform
            box-shadow
            border-bottom-color
        */
    if (e.propertyName !== "transform") {
      return;
    }
    this.classList.remove("playing"); //remove되면서 .key에 있는 스타일로인해 transition 이벤트 한번더 발생되는거 같음.
  })
);
```

## 최종코드

```javascript
window.addEventListener("keydown", playAudio);
function playAudio(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) {
    return;
  }
  audio.play();
  key.classList.add("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach(key =>
  key.addEventListener("transitionend", function(e) {
    if (e.propertyName !== "transform") {
      //playing내의 transform이벤트가 끝난뒤에 palying클래스를 지우기위해
      return;
    }
    //remove되면서 .key에 있는 스타일로인해 transition 이벤트 한번더 발생되는거같음
    this.classList.remove("playing");
  })
);
```
