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
        console.log(tag,input);
        fetch('http://localhost:3000/posts')
            .then(res => res.json())
            .then(data => console.log(data));
    },

    onReset(e){
        const formTarget = FormView.formInp;
        formTarget.value = '';
        formTarget.focus();
    }

}