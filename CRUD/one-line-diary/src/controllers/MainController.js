import WriteModel from '../models/WriteModel';
import FormView from '../views/FormView'

const tag = '[MainController]';

export default {
    init() {
        FormView.setup(document.querySelector('.form__txt'))
            .on('@submit',e => this.onSubmit(e.detail.input))
    },

    onSubmit(input){
        console.log(tag,input)
    }
}