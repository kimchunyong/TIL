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
    this.el.addEventListener('keyup', e => this.onModifedKeyup(e));
}

ResultView.onDel = function (e) {
    const evtTarget = e.target;
    const targetConfirm = evtTarget.tagName.toLowerCase() === 'span'
        && evtTarget.classList[2] === 'write__del';

    if (targetConfirm) {
        this.emit('@delete', { query: evtTarget.parentNode.dataset.key });
    }
}

ResultView.onModified = function (e) {
    const evtTarget = e.target;
    const targetConfirm = evtTarget.tagName.toLowerCase() === 'span'
        && evtTarget.classList[0] === 'write__txt';
    if (targetConfirm) {
        this.emit('@modified', { changeNum: evtTarget.parentNode });
    }
}

ResultView.renderInp = function (e, currNum) {
    const modifiedTarget = currNum.children[0];
    const PrevText = modifiedTarget.textContent;
    const currKey = currNum.dataset.key;

    modifiedTarget.innerHTML = `<input type="text" class="modified__inp" placeholder=${PrevText} data-key=${currKey}>`;
    modifiedTarget.querySelector('.modified__inp').focus();
}

ResultView.onModifedKeyup = function(e){
    const inpTarget = e.target;
    const modifiedVal = e.target.value;
    const modifiedLen = modifiedVal.length;
    const currKey = e.target.dataset.key;
    const enter = 13;

    if (e.keyCode !== enter) return;
    
    if(modifiedLen) {
        this.emit('@modifiedVal', { modifiedVal: [modifiedVal,currKey,inpTarget] });
        return;
    }

    alert('다시 입력해주세요');
}

ResultView.renderCmp = function(inpTargete, cmplTxt){
    inpTargete.parentNode.innerHTML = cmplTxt;
    inpTargete.remove();
}

export default ResultView;