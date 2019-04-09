# REST API

### HTTP Method
| Method | Action | 역활 |
|:------:|:------:|:------:|
| GET | index/retrieve | 모든/특정 리소스를 조회 |
| POST | create | 리소스를 생성 |
| PUT | update | 리소스를 갱신 |
| DELETE | delete | 리소스를 삭제 |

### REST API
| 구성요소 | 내용 | 표현방법 |
|:------:|:------:|:------:|
| Respurce| 자원 | HTTP URI |
| Verb | 자원에 대한 행위 | HTTP Method |
| Representations | 자원에대한 행위의 내용 | HTTP Message Pay Load |

### 연습

```JSON
{
    "books": [
        {
        "id": 1,
        "title": "html",
        "author": "Lee"
        },
        {
        "id": 2,
        "title": "css",
        "author": "Kim"
        },
        {
        "id": 3,
        "title": "javascript",
        "author": "Park"
        },
        {
        "id": 4
        }
    ]
}
```
### GET http://localhost:5000/books

```javascript
var req = new XMLHttpRequest();
req.open('GET', 'http://localhost:5000/books');
req.send();

req.onreadystatechange = function (e) {
  if (req.readyState === XMLHttpRequest.DONE) {
    if(req.status === 200) {
      console.log(req.responseText);
    } else {
      console.log("Error!");
    }
  }
};
```

```JSON
[
  {
    "id": 1,
    "title": "html",
    "author": "Lee"
  },
  {
    "id": 2,
    "title": "css",
    "author": "Kim"
  },
  {
    "id": 3,
    "title": "javascript",
    "author": "Park"
  }
]
```

### GET http://localhost:5000/books/1

```javascript
var req = new XMLHttpRequest();
req.open('GET', 'http://localhost:5000/books/1');
req.send();

req.onreadystatechange = function (e) {
  if (req.readyState === XMLHttpRequest.DONE) {
    if(req.status === 200) {
      console.log(req.responseText);
    } else {
      console.log("Error!");
    }
  }
};
```

```JSON
{
  "id": 1,
  "title": "html",
  "author": "Lee"
}
```

### POST http://localhost:5000/books

```javascript
var req = new XMLHttpRequest();
req.open('POST', 'http://localhost:5000/books');
req.setRequestHeader('Content-type', 'application/json');
req.send(JSON.stringify({
  title: "ES6",
  author: "Choi"
}));

req.onreadystatechange = function (e) {
  if (req.readyState === XMLHttpRequest.DONE) {
    if(req.status === 201) {
      console.log(req.responseText);
    } else {
      console.log("Error!");
    }
  }
};
```

```JSON
{
  "title": "ES6",
  "author": "Choi",
  "id": 4
}
```

### PUT http://localhost:5000/books/4

```javascript
var req = new XMLHttpRequest();
req.open('PUT', 'http://localhost:5000/books/4');
req.setRequestHeader('Content-type', 'application/json');
req.send(JSON.stringify({
  title: 'ecmascript',
  author: "Choi"
}));

req.onreadystatechange = function (e) {
  if (req.readyState === XMLHttpRequest.DONE) {
    if(req.status === 200) {
      console.log(req.responseText);
    } else {
      console.log("Error!");
    }
  }
};
```

```JSON
{
  "title": "ECMAScript6",
  "author": "Choi",
  "id": 4
}
```

### DELETE http://localhost:5000/books/4

```javascript
var req = new XMLHttpRequest();
req.open('DELETE', 'http://localhost:5000/books/4');
req.send();

req.onreadystatechange = function (e) {
  if (req.readyState === XMLHttpRequest.DONE) {
    if(req.status === 200) {
      console.log(req.responseText);
    } else {
      console.log("Error!");
    }
  }
};
```

```JSON
{}
```
