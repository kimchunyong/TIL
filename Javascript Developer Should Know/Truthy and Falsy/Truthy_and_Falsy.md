# Truthy and Falsy

JavaScript는 불리언 문맥에서 형변환을 사용합니다.
따로 거짓으로 정의된 값이 아니면 모두 참입니다.
(false, 0, "", null, undefined, NaN)는 거짓

## Truthy

```javascript
if (true)
if ({})
if ([])
if (42)
if ("foo")
if (new Date())
if (-42)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```

## Falsy

```javascript
if (false)
if (null)
if (undefined)
if (0)
if (NaN)
if ('')
if ("")
if (``)
if (document.all)
```
