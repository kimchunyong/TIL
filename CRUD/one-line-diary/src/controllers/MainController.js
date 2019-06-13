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
            .on('@delete', e => this.onDelete(e.detail.query))
            .on('@modified', e => this.onModified(e, e.detail.changeNum))
            .on('@modifiedVal', e => this.onModifiedVal(e, e.detail.modifiedVal[0],e.detail.modifiedVal[1],e.detail.modifiedVal[2]))

    },

    onSubmit(input) {
        this.postApi(input, this.nowDate());
    },

    onReset(e) {
        const formTarget = FormView.formInp;
        formTarget.value = '';
        formTarget.focus();
    },

    onDelete(delNum) {
        this.deleteApi(delNum);
    },

    onModified(e, changeNum) {
        ResultView.renderInp(e, changeNum)
    },

    onModifiedVal(e, modifiedVal, key, inpTarget){
        this.fetchApi(e, modifiedVal, key, inpTarget);
    },

    nowDate() {
        const date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1
        let day = date.getDate();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let ampm = hour >= 12 ? 'pm' : 'am';
        hour = hour % 12;
        hour = hour ? hour : 12;

        if (month < 10) {
            month = "0" + month;
        }
        if (day < 10) {
            day = "0" + day;
        }


        const today = `${year}-${month}-${day} ${ampm}${hour}:${minutes}:${seconds}`;
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
            .then(() => {
                WriteModel.getApi()
                    .then(data => this.onPostResult(data))
                    .catch(error => console.error(error));
            })
    },

    deleteApi(delNum) {
        const url = `http://localhost:3000/posts/${delNum}`;

        fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => data)
            .catch(error => {
                console.error(error);
            })
            .then(() => {
                WriteModel.getApi()
                    .then(data => this.onPostResult(data))
                    .catch(error => console.error(error));
            })
    },

    fetchApi(e, fetchTxt, fetchNum, inpTarget){
        console.log(fetchTxt, fetchNum, inpTarget);
        const url = `http://localhost:3000/posts/${fetchNum}`;

        fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PATCH",
            body: JSON.stringify({ text: fetchTxt })
        })
            .then(res => res.json())
            .then(data => data)
            .catch(error => {
                console.error(error);
            })

            ResultView.renderCmp(inpTarget, fetchTxt);
    },

    onPostResult(data) {
        ResultView.render(data);
    }

}