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

# mutability
