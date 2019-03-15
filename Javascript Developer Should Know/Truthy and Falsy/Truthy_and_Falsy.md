# Truthy and Falsy

## Truthy

JavaScript는 불리언 문맥에서 true로 처리되는 값.
따로 거짓으로 정의된 값이 아니면 모두 참입니다.
(false, 0, "", null, undefined, NaN)는 거짓

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

불리언 문맥에서 false로 처리되는 값.

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
