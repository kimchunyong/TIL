import FormView from '../views/FormView';
import ResultView from '../views/ResultView';

import WriteModel from '../models/WriteModel';

const tag = '[MainController]';

export default {
    init() {
        FormView.setup(document.querySelector('.form__txt'))
            .on('@submit',e => this.onSubmit(e.detail.input))
            .on('@reset', e => this.onReset(e))

        ResultView.setup(document.querySelector('.write__list'))
    },

    onSubmit(input){
        console.log(tag,input);
        this.postApi(input);
        this.onPostResult(WriteModel.getApi());
    },

    onReset(e){
        const formTarget = FormView.formInp;
        formTarget.value = '';
        formTarget.focus();
    },

    postApi(inputTxt){
        const url = 'http://localhost:3000/posts'; 

        fetch(url,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify({text: inputTxt})
            })
            .then(res => res.json())
            .then(data => data)
            .catch(error => {
                console.error(error);
            });
    },

    onPostResult(data){
        ResultView.render(data);
    }

}