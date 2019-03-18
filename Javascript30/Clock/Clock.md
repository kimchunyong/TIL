# Clock

## 구현에 필요한것들

- 시,분,초 를 나타내는 시계바늘
- 원의 중심을 기준으로 시,분,초가 각각 돌아야함
- `setInterval`을 이용하여 함수를 1초 간격으로 호출
- `clockSet`안에 시,분,초의 각각의 이동간격을 구하고
- `transfrom`속성을 이용해서 계산한 값을 적용시켜준다.

## 구현

```
    <div class="clock">
      <div class="clock-face">
        <div class="hand hour-hand"></div>
        <div class="hand min-hand"></div>
        <div class="hand second-hand"></div>
      </div>
    </div>
```
### transform속성에서 사용가능한 속성
- rotate // 회전하기
- scale // 크기변경
- translate // 이동
- skew // 기울이기

### - transform-origin
- 기본값은 50% 50%
- 좌에서 우, 상에서하 까지를 기준으로 정함.

keyword | value
------- | ------
left    |   0%
center  |   50%
right   |   100%
top     |   0%
bottom  |   100%

```css
    .hand {
    transform: rotate(90deg); //시계 방향으로 90도 회전
    transform-origin: 100%; //기준점을 오른쪽 끝으로해서 돈다.
    transition: 0.05s; //transition-duration-  트랜지션이 일어나는 지속 시간
    transition-timing-function: cubic-bezier(0.61, -0.21, 1, -0.68); //시간에 따른 파라미터 값의 변화율을 명시하는 함수
    }
```

```javascript
    const clockSet = () => {
        console.log("hi"); // 1초에 한번씩 함수를 호출한다.
    }
    setInterval(clockSet, 1000);
```
#### 초,분,시 셀렉터 지정
```javascript
    //셀렉터 지정
    const secondHand = document.querySelector(".second-hand");
    const minHand = document.querySelector(".min-hand");
    const hourHand = document.querySelector(".hour-hand");
```

#### 분의 간격
```javascript
    const clockSet = () => {
        /*
          현재원의 100% 는 360도
          1시간 => 12칸 , 1분 => 총 60칸 , 1초 => 총 60칸
          (현재 값을 /각칸개수로) * 360 = [전체 기준의 움직이는 간격]
        */
        const date = new Date(); //new Date객체 생성
        const seconds = date.getSeconds(); //date객체 기준으로 초를 가져온다
        const secondsDegrees = (seconds / 60) * 360 + 90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    }
    setInterval(clockSet, 1000);
```
12시 기준 90deg에 360 기준으로 60칸이 초는 움직이므로 (초/60) * 360 + 90을 해주면 한칸움직이는 간격을 구할수있다.

#### 분의 간격
```javascript
    const clockSet = () => {
        const mins = date.getMinutes();
        const minsDegrees = (mins / 60) * 360 + 90;
        minHand.style.transform = `rotate(${minsDegrees}deg)`;
    }
    setInterval(clockSet, 1000);
```

#### 시의 간격
```javascript
    const clockSet = () => {
        const hours = date.getHours();
        const hoursDegrees = (hours / 12) * 360 + 90;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    }
    setInterval(clockSet, 1000);
```

#### 전체코드
```javascript
    const secondHand = document.querySelector(".second-hand");
    const minHand = document.querySelector(".min-hand");
    const hourHand = document.querySelector(".hour-hand");

    const clockSet = () => {
        /*
            현재원의 100% 는 360도
            1시간 => 12칸 , 1분 => 총 60칸 , 1초 => 총 60칸
            (현재 값을 /각칸개수로) * 360 = [전체 기준의 칸의 비율]
        */
        const date = new Date();
        const seconds = date.getSeconds();
        const secondsDegrees = (seconds / 60) * 360 + 90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        const mins = date.getMinutes();
        const minsDegrees = (mins / 60) * 360 + 90;
        minHand.style.transform = `rotate(${minsDegrees}deg)`;

        const hours = date.getHours();
        const hoursDegrees = (hours / 12) * 360 + 90;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    };

    setInterval(clockSet, 1000);
```