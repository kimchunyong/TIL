import View from './View.js';

const tag = '[ResultView]';

const ResultView = Object.create(View);

ResultView.setup = function (el) {
    this.init(el);
    this.cusEvt();

    return this;
}

ResultView.messages = {
    NO_RESULT: '첫 내용을 입력해주세요.',
}

ResultView.render = function (data = []) {
    this.el.innerHTML = data.length ? this.getInputResultHTML(data) : this.messages.NO_RESULT;
}

ResultView.getInputResultHTML = function (data) {
    return data.reduce((html, item, idx) => {
        html += this.getInputReslutList(item, idx);
        return html;
    }, '<ul class="write__menu">') + '</ul>';
}

ResultView.getInputReslutList = function (item, idx) {
    return `<li class="write__item" data-key=${item.id} data-sortNum=${idx}>
        <span class="write__txt">${item.text}</span>
        <span class="write__date">작성일:${item.date}</span>
        <span class="btn fourth write__del">del</span>
    </li>`;
}

ResultView.cusEvt = function () {
    this.el.addEventListener('click', e => this.onDel(e));
    this.el.addEventListener('dblclick', e => this.onModified(e));
}

ResultView.onDel = function (e) {
    const evtTarget = event.target;
    const targetConfirm = evtTarget.tagName.toLowerCase() === 'span'
        && evtTarget.classList[2] === 'write__del';

    if (targetConfirm) {
        this.emit('@delete', { query: evtTarget.parentNode.dataset.key });
    }
}

ResultView.onModified = function (e) {
    const evtTarget = event.target;
    const targetConfirm = evtTarget.tagName.toLowerCase() === 'span'
        && evtTarget.classList[0] === 'write__txt';
    if (targetConfirm) {
        this.emit('@modified', { changeNum: evtTarget.parentNode });
    }
}

ResultView.renderInp = function (e, currNum) {
    console.log(currNum);

}

export default ResultView;