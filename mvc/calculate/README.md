## 계산기 예제

myid에 controller(컨트롤러)에서 Model(모델)로부터 데이터를 가공받아 viw(뷰)로 값을 전달하여 화면단에 나오게한다.

```html
<div id="myid"></div>
```

```javascript
//model
function Model() {}
Model.prototype.calculate = function(a, b) {
  this.sum = a + b;
  return this.sum;
};

//view
function View() {
  this.myid = document.getElementById("myid");
}

View.prototype.displayresults = function(a) {
  this.myid.innerHTML = a;
};

//controller
function controller() {
  this.myModel = new Model();
  this.myView = new View();

  this.myView.displayresults(this.myModel.calculate(30, 30));
}
controller();
```
