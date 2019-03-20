class TodoList {
  constructor () {
    // data
    this.data = [];
    this.idx = 0;
    this.key = null;

    // view
  }
  setData (idx, text) {
    this.data.push({ index: idx, text: text });
    return this;
  }

  getformEle ($FormEle) {
    if (!$FormEle) return;
    this.$FormEle = document.querySelector(`${$FormEle}`);
    this.$ele_inp = this.$FormEle.children[0];
    this.$ele_btn = this.$FormEle.children[1];
    return this;
  }
  formEvent () {
    this.$ele_inp.addEventListener('keyup', ({ target }) => {});
    return this;
  }
  formSubmit () {
    this.$ele_btn.addEventListener('click', evt => {
      evt.preventDefault();
      let getInptValue = this.$ele_inp.value;
      if (!getInptValue) return;
      this.setData(this.idx, getInptValue);
      this.listDraw();
      this.idx = this.idx + 1;
      this.$ele_inp.value = '';
      this.$ele_inp.focus();
    });
    return this;
  }
  getList ($ListEle) {
    if (!$ListEle) return;
    this.$ListEle = document.querySelector(`${$ListEle}`);
  }
  listDraw () {
    // reduce로 this.data만큼 돌려서 html retrun값
    let ListItems =
      this.data.reduce((acc, cur, idx) => {
        return (
          acc +
          `
          <li class="todo-list-item" data-key=${idx}>
            <span class="todo-chk"></span>${cur.text}
            <button class="todo-btn--del" type="button">
              X
            </button>
          </li>
          `
        );
      }, `<ul>`) + `</ul>`;
    this.$ListEle.innerHTML = ListItems;
    this.listDel();
    return this;
  }
  listDel () {
    const ListEvtBind = this.$ListEle.children[0];
    Array.from(ListEvtBind.children).forEach(item => {
      item.addEventListener('click', ({ target }) => {
        let parentEle = target.parentElement;
        let parentGetKey = parentEle.innerText.trim().slice(0, -2); // text를 추출해서 비교
        // 특정 배열의 요소 제거
        const removeData = this.data.filter(item => {
          return item.text !== parentGetKey;
        });
        this.data = removeData;
        removeData.map((item, idx) => {
          item.index = idx;
        });
        this.listDraw();
      });
    });
    return this;
  }
}

const todo = new TodoList();
todo.getformEle('.todo-form').formSubmit().getList('.todo-list');
