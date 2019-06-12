import View from "./View";

const tag = '[FormView]';

const FormView = Object.create(View);

FormView.setup = function (el) {
    this.init(el);
    this.formInp = el.querySelector('.form__inp');
    this.formBtn = el.querySelector('.form__btn');
    this.focusEvts();

    return this;
}

FormView.focusEvts = function () {
    this.formInp.addEventListener('keyup', e => this.onKeyup(e));
    this.formBtn.addEventListener('click', e => this.onClick(e));
}

FormView.onKeyup = function (e) {
    const ValueFormInp = this.formInp.value.length;
    const enter = 13;

    if (e.keyCode !== enter) return;

    if (ValueFormInp) {
        this.emit('@submit', { input: this.formInp.value });
        this.emit('@reset');
        return;
    }
    alert('다시 입력해주세요');
}

FormView.onClick = function (e) {
    const ValueFormInp = this.formInp.value.length;

    if (ValueFormInp) {
        //빈칸이 아닐때 실행
        this.emit('@submit', { input: this.formInp.value });
        this.emit('@reset');
        return;
    }
    alert('다시 입력해주세요');
}


export default FormView;