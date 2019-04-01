## 계산기 예제

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
