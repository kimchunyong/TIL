reflow와repaint는 수정된 렌더 트리를 다시 렌더링하는 과정에서 발생하는 것으로 웹 애플리케이션의 성능을 떨어뜨리는 주된 요인이다. 극단적인 경우, CSS 효과로 인해 Java Script 의 실행 속도가 느려질 수도 있다.

## Repaint

리페인트는레이아웃에는 영향을 주지 않지만, 가시성에는 영향을 주는 엘리먼트가 변경되면 발생한다.
예를 들면,opacity,background-color,visibility,outline

[오페라](https://dev.opera.com/articles/efficient-javascript/?page=3#reflow)에 따르면, “브라우저가 DOM 트리에 있는 다른 모든 노드의 가시성을 확인해야 하므로 리페인트는 비용이 많이 든다.”고 한다.

## Reflow

“리플로우”는 모든 엘리먼트의 위치와 길이 등을 다시 계산하는 것으로 문서의 일부 혹은 전체를 다시 렌더링한다.
단일 엘리먼트 하나를 변경해도, 하위 엘리먼트나 상위 엘리먼트 등에 영향을 미칠 수 있다.

### 리플로우가 트리거되는 경우

- DOM 엘리먼트 추가, 제거 또는 변경
- CSS 스타일 추가, 제거 또는 변경

  - CSS 스타일을 직접 변경하거나, 클래스를 추가함으로써 레이아웃이 변경될 수 있다. 엘리먼트의 길이를 변경하면, DOM 트리에 있는 다른 노드에 영향을 줄 수 있다.

- CSS3 애니메이션과 트랜지션

  - 애니메이션의 모든 프레임에서 리플로우가 발생한다.

- offsetWidth 와 offsetHeight 의 사용

  - offsetWidth 와 offsetHeight 속성을 읽으면, 초기 리플로우가 트리거되어 수치가 계산된다.

- 유저 행동

  - 유저 인터랙션으로 발생하는hover효과, 필트에 텍스트 입력, 창 크기 조정, 글꼴 크기 변경, 스타일시트 또는 글꼴 전환등을 활성화하여 리플로우를 트리거할 수 있다.

## 성능 저하 최소화하기

- 클래스 변경을 통해 스타일을 변경할 경우, 최대한 말단의 노드의 클래스를 변경한다.

  - 최대한 말단에 있는 노드를 변경함으로써, 리플로우의 영향을 최소화한다.

- 인라인 스타일을 사용하지 않는다.

  - 스타일 속성을 통해 스타일을 설정하면, 리플로우가 발생한다.
  - 엘리먼트의 클래스가 변경될 때 엘리먼트는 하나의 리플로우만 발생시킨다.
  - 인라인 스타일은 HTML 이 다운로드될 때, 레이아웃에 영향을 미치면서 추가 리플로우를 발생시킨다.

- 애니메이션이 들어간 엘리먼트는position: fixed또는position: absolute로 지정한다.

  - absolute또는fixed위치인 엘리먼트는 다른 엘리먼트의 레이아웃에 영향을 미치지 않는다. (리플로우가 아닌 리페인트가 발생하는데, 이것은 훨씬 적은 비용이 든다.)

- 부드러운 애니메이션이 성능을 저하시킨다.

  - 한 번에 1px 씩 엘리먼트를 이동하면 부드러워 보이지만, 성능이 떨어지는 디바이스는 말썽일 수 있다.
  - 엘리먼트를 한 프레임당 4px 씩 이동하면 덜 부드럽게 보이겠지만, 리플로우 처리의1/4만 필요하다.

- 레이아웃을 위한<table>은 피한다.

  - <table>은 점진적으로 렌더링되지 않고, 모두 불려지고 계산된 다음에서야 렌더링이 된다. 또한, 작은 변경만으로도 테이블의 다른 모든 노드에 대한 리플로우가 발생한다.
  - 레이아웃 용도가 아닌 데이터 표시 용도의<table>을 사용하더라고,table-layout: fixed속성을 주는 것이 좋다.table-layout: fixed를 사용하면, 열 너비가 머리글 행 내용을 기반으로 계산되기 때문이다.

- CSS에서 Java Script 표현식을 사용하지 않는다.

  - IE 와 FF 는 모두 CSS 에서 Java Script 를 실행할 수 있다. IE 에서는 표현 기법과 HTC 동작 방법이 있고, FF 에서는 XBL 을 사용하는 방법이 있다. (이 방법은 CSS 에서 Java Script 를 직접 실행하지는 않지만, 그 효과는 동일하다.)
  - 문서가 리플로우될 때마다 Java Script 표현식이 다시 계산된다.

- CSS 하위 셀렉터를 최소화한다.

  - 사용하는 규칙이 적을수록 리플로우가 빠르다.
  - gulp-uncss,grunt-uncss와 같은 도구로 스타일 정의 및 파일 크기를 줄인다.

- 숨겨진 엘리먼트를 변경한다.

  - display: none;으로 숨겨진 엘리먼트는 변경될 때, 리페인트나 리플로우를 일으키지 않는다. 그렇기 때문에 엘리먼트를 표시하기 전에 엘리먼트를 변경한다.

- Java Script 를 통해 스타일을 변경할 경우,.cssText를 사용하거나, 클래스를 변경한다.

참고자료

- [Stubbornella : REFLOWS & REPAINTS: CSS PERFORMANCE MAKING YOUR JAVASCRIPT SLOW?](http://www.stubbornella.org/content/2009/03/27/reflows-repaints-css-performance-making-your-javascript-slow/)
- [Sitepoint : 10 Ways to Minimize Reflows and Improve Performance](https://www.sitepoint.com/10-ways-minimize-reflows-improve-performance/)
- [Opera : Efficient JavaScript](https://dev.opera.com/articles/efficient-javascript/?page=3#reflow)
- [SO : Using Javascript in CSS](http://stackoverflow.com/questions/476276/using-javascript-in-css)
