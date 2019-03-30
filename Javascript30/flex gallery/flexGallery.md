# flexGallery

---

## 구현에 필요한것들

- 클릭시 클래스 추가하여 넓어지게하기
- 클릭시 글자 상하로 나타나게 하기

```html
    <div class="panel panel1">
        <p>Hey</p>
        <p>Let's</p>
        <p>Dance</p>
    </div>
```

```javascript
    const panels = document.querySelectorAll('.panel'); //panel을 각각 선택
```

이벤트를 각각 바인딩해준다.
```javascript
    function toggleOpen() {
        console.log('Hello');
        this.classList.toggle('open');
    }
    Array.from(panels).forEach((items) => {
        items.addEventListener('click', toggleOpen);
    });
```

```javascript
    function toggleActive(e) {
        console.log(e.propertyName);
        if (e.propertyName.includes('flex')) {
            this.classList.toggle('open-active');
        }
    }

    Array.from(panels).forEach((items) => {
        items.addEventListener('transitionend', toggleActive);
    });
```

## 최종코드

```javascript
    const panels = document.querySelectorAll('.panel');

    function toggleOpen() {
        console.log('Hello');
        this.classList.toggle('open');
    }

    function toggleActive(e) {
        console.log(e.propertyName);
        if (e.propertyName.includes('flex')) {
            this.classList.toggle('open-active');
        }
    }

    Array.from(panels).forEach((items) => {
        items.addEventListener('click', toggleOpen);
    });

    Array.from(panels).forEach((items) => {
        items.addEventListener('transitionend', toggleActive);
    });
```

## 궁금한것

이렇게 2개로 나눠서 이벤트를 바인딩했는지?

```javascript
    Array.from(panels).forEach((items) => {
        items.addEventListener('click', toggleOpen);
    });

    Array.from(panels).forEach((items) => {
        items.addEventListener('transitionend', toggleActive);
    });

    //es6 arrow함수로 하는방법은 없는지? 해봤는데 잘 안됨....;;
    function toggleOpen() {
        console.log('Hello');
        this.classList.toggle('open');
    }

    function toggleActive(e) {
        console.log(e.propertyName);
        if (e.propertyName.includes('flex')) {
            this.classList.toggle('open-active');
        }
    }
```