import FormView from '../views/FormView';
import ResultView from '../views/ResultView';

import WriteModel from '../models/WriteModel';

const tag = '[MainController]';

export default {
    init() {
        FormView.setup(document.querySelector('.form__txt'))
            .on('@submit', e => this.onSubmit(e.detail.input))
            .on('@reset', e => this.onReset(e))

        ResultView.setup(document.querySelector('.write__list'))
    },

    onSubmit(input) {
        this.postApi(input, this.nowDate());
    },

    onReset(e) {
        const formTarget = FormView.formInp;
        formTarget.value = '';
        formTarget.focus();
    },

    nowDate() {
        const date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1
        let day = date.getDate();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        if (month < 10) {
            month = "0" + month;
        }
        if (day < 10) {
            day = "0" + day;
        }
        if (hour > 12) {
            hour = "pm:" + (hour - 12);
        } else {
            hour = 'am:' + hour;
        }

        const today = `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
        return today;

    },

    postApi(inputTxt, currDate) {
        const url = 'http://localhost:3000/posts';
        
        fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ text: inputTxt, date: currDate })
        })
            .then(res => res.json())
            .then(data => data)
            .catch(error => {
                console.error(error);
            })
            .then(()=>{
                WriteModel.getApi()
                    .then(data => this.onPostResult(data))
                    .catch(error => console.error(error));
            })
    },

    onPostResult(data) {
        ResultView.render(data);
    }

}