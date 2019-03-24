# Drum kit

## 구현에 필요한것들

- input range의 변화값을 감지한다.
- 감지한 값을 document.documentElement.style.setProperty()을 이용해서 css 스타일을 컨트롤.

## 구현

```html
<h2>Update CSS Variables with <span class="hl">JS</span></h2>

<div class="controls">
  <label for="spacing">Spacing:</label>
  <input
    id="spacing"
    type="range"
    name="spacing"
    min="10"
    max="200"
    value="10"
    data-sizing="px"
  />

  <label for="blur">Blur:</label>
  <input
    id="blur"
    type="range"
    name="blur"
    min="0"
    max="25"
    value="0"
    data-sizing="px"
  />

  <label for="base">Base Color</label>
  <input id="base" type="color" name="base" value="#ffc600" />
</div>

<img src="https://source.unsplash.com/7bwQXzbF6KE/800x500" />
```

`:root` presudo-class(수도클래스)
`--var(<custom-property-name> , <declaration-value>?)` css function()

```css
:root {
  --base: #ffc600;
  --spacing: 10px;
  --blur: 0px;
}

img {
  padding: var(--spacing);
  background: var(--base);
  filter: blur(var(--blur));
}

.hl {
  color: var(--base);
}
```

```javascript
class InputRange {
  constructor(ele) {
    //view
    this.ele = document.querySelector(ele); //selector 지정

    //data
    this.range = null;

    this.evtBind();
  }
  evtBind() {
    const evtType = ["mousemove", "change"]; //이벤트 타입 2개를 bind
    evtType.forEach(evtType => {
      this.ele.addEventListener(evtType, evt => {
        this.setValue();
        this.getValue(evt);
        const suffix = evt.target.dataset.sizing || "";

        document.documentElement.style.setProperty(
          `--${evt.target.name}`,
          this.range + suffix
        );
      });
    });
  }
  getValue(evt) {
    //element의 range 값을 얻는다.
    return (this.range = evt.target.value);
  }
  setValue() {
    //element의 range 값을 지정한다.
    return (this.ele.value = this.range);
  }
}
/*각 element 객체 생성*/
const range1 = new InputRange("#spacing");
const range2 = new InputRange("#blur");
const range3 = new InputRange("#base");
```
