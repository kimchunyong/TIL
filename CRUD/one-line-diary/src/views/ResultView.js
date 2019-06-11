import View from './View.js';

const tag = '[ResultView]';

const ResultView = Object.create(View);

ResultView.setup = function(el){
    this.init(el);
}

ResultView.render = function(data = []) {
    console.log(tag, data);
    this.el.innerHTML = data.length ? this.getInputResultHTML(data) : '첫 내용을 입력해주세요';
}

ResultView.getInputResultHTML = function(data){
    console.log(data)
    debugger;
}

export default ResultView;