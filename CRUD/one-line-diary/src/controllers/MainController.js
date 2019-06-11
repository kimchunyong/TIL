import WriteModel from '../models/WriteModel';
import FormView from '../views/FormView'

const tag = '[MainController]';

export default {
    init() {
        FormView.setup(document.querySelector('.form__txt'))
            .on('@submit',e => this.onSubmit(e.detail.input))
            .on('@reset', e => this.onReset(e))
    },

    onSubmit(input){
        console.log(tag,input)
    },

    onReset(e){
        const formTarget = FormView.formInp;
        formTarget.value = '';
        formTarget.focus();
    }

}