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

# mutability
