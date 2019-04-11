# mongoDB

NoSQL 데이터베이스, 뛰어난 확장성과 성능을 자랑한다.

```
{
    "_id":objectId("1232156634d23bsd2"),
    "username":"kimchunyong",
    "name":{first:"kim", last: "yong"}
}
```

여기서 _id,username,name 은 key이고 오른쪽에 있는 값은 value이다.

Collection은 MongoDB Document의 그룹이다. Document들이 Collection내부에 위치하고 있다. RDMS의 table과 비슷한 개념입니다만 RDMS와 달리 schema를 따로 가지고 있지않다. Document 부분설명에 나와있듯이 각 Document들이 동적인 schema를 가지고 있다.