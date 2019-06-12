import View from './View.js';

const tag = '[ResultView]';

const ResultView = Object.create(View);

ResultView.setup = function (el) {
    this.init(el);
}

ResultView.messages = {
    NO_RESULT: '첫 내용을 입력해주세요',
}

ResultView.render = function (data = []) {
    this.el.innerHTML = data.length ? this.getInputResultHTML(data) : this.messages.NO_RESULT;
}

ResultView.getInputResultHTML = function (data) {
    return data.reduce((html, item, idx) => {
        console.log(item, idx);
        html += this.getInputReslutList(item);
        return html;
    }, '<ul class="write__menu">') + '</ul>';
}

ResultView.getInputReslutList = function (item) {
    return `<li class="write__item">
        <span class="write__txt">${item.text}</span> <span class="write__date">${item.date}</span>
    </li>`;
}

export default ResultView;