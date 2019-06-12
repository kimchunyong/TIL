# One Line Diary Boilerplate(CRUD)

- CREATE

  - input창에 text를 입력받는다.
    - 빈칸 입력시 alert 트리거.
  - 입력을 받은 후 확인버튼 클릭& 엔터.
    - 입력받은 데이터 POST방식으로 보낸다.
      - 각 DATA에 ID 지정
      - READ를 통해 최신 일기 불러오기.

- READ

  - 데이터를 가져와 출력시킨다.
    - 데이터가 없을때 일기를 쓰도록 제안하는 텍스트 형태의 DOM을 그려준다.

- UPDATE

  - 수정 버튼 제공하여 클릭시 별도의 인풋 제공

    - 수정 내용 입력후 엔터 이벤트를 && 수정 확인 버튼 제공
      - 데이터 등록
    - 고유한 DOM 탐색하여 입력된 데이터 등록
    - 취소버튼 제공
      - 별도의 인풋 DOM 제거

  - 취소버튼 제공

- DELETE
  - 삭제 버튼 클릭시 삭제

## 폴더구조 one-line-diary

```javascript
+--one-line-diary
  +-- node_modules
  +-- public
  |   +-- index.html
  +-- src
  |   +-- controllers
  |   +-- models
  |   +-- views
  |   +-- index.js
  +-- .babelc
  +-- db.json
  +-- package-lock.json
  +-- package.json
  +-- server.js
  +-- webpack.config.js
```

## JSON-SERVER

json-server로 db.json를 바라보게한뒤 node에서 ./server.js 실행

```shell
  json-server --watch ./db.json
```

`./server.js`파일
```javascript
  const jsonServer = require('json-server')
  const server = jsonServer.create()
  const router = jsonServer.router('server/db.json')
  const middlewares = jsonServer.defaults()

  server.use(middlewares)
  server.use('/api', router)
  server.listen(3000, function () {
      console.log('JSON Server is running')
  })
```

`http://localhost:3000/`으로 접속

## webpack으로 devserver실행

`npm start` 명령어를 터미널에서 작성해서 사용.
```shell
  npm start
```

```javascript
devServer: {
    hot: true,
    historyApiFallback: true,
    inline: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    stats: {
      color: true,
    }
  },
```

`http://localhost:8080/`으로 접속
