Redux의 근본적인 원칙

# 진실은 하나의 소스로 부터

애플리케이션의 모든 상태는 하나의 스토어 안에 하나의 객체 트리 구조로 저장됩니다.

```
    console.log(store.getState());

  {
    visibilityFilter: 'SHOW_ALL',
    todos: [{
      text: 'Consider using Redux',
      completed: true,
    }, {
      text: 'Keep all state in a single tree',
      completed: false
    }]
  }
```

# 상태는 읽기 전용이다.

상태를 변화시키는 유일한 방법은 무슨 일이 벌어지는 지를 묘사하는 액션 객체를 전달하는 방법뿐입니다.

```
store.dispatch({
  type: 'COMPLETE_TODO',
  index: 1
});

store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
});
```

# 변화는 순수 함수로 작성되어야 한다.

액션에 의해 상태 트리가 어떻게 변화하는 지를 지정하기 위해 프로그래머는 순수 리듀서를 작성해야합니다.

```
function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
  case 'SET_VISIBILITY_FILTER':
    return action.filter;
  default:
    return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
  case 'ADD_TODO':
    return [...state, {
      text: action.text,
      completed: false
    }];
  case 'COMPLETE_TODO':
    return [
      ...state.slice(0, action.index),
      Object.assign({}, state[action.index], {
        completed: true
      }),
      ...state.slice(action.index + 1)
    ];
  default:
    return state;
  }
}

import { combineReducers, createStore } from 'redux';
let reducer = combineReducers({ visibilityFilter, todos });
let store = createStore(reducer);
```