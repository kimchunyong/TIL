# immutability

데이터 및 원본의 훼손을 막는것

- Create(생성)
- Read(읽기)
- Update(수정)
- Delete(삭제)

## Origin

Create,Read

### string

```javascript
var statement = 'hello';
var otherStr = statement.slice(2, 4);

console.log(statement); //hello
console.log(otherStr); //ll
```

### array

```javascript
var arr = [];
console.log(arr.length); // 0

var v2 = arr.push(2); // arr.push()는 메소드 실행 후 arr의 length를 반환
console.log(arr.length); // 1
```

### object

```javascript
var user = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

var myName = user.name; // 변수 myName은 string 타입이다.

user.name = 'Kim';
console.log(myName); // Lee

myName = user.name;  // 재할당
console.log(myName); // Kim
```

```javascript
var user1 = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

var user2 = user1; // 변수 user2는 객체 타입이다.

user2.name = 'Kim';

console.log(user1.name); // Kim
console.log(user2.name); // Kim
```

# mutability
