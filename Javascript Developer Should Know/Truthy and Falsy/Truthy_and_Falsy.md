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

## 연산자 우선순위

!가 가장높으며 && , || 순으로 계산이 된다.
```javascript
    false && false || true && true //true
    false && false || true && false //false
    /*위 코드는 아래와 같다*/
    (false && false) || (true && true)
    (false && false) || (true && false)
```

## 지연평가

```javascript
    true || true || true || false || true
```
OR연산자는 피연산자중 1가지만 true이면 결과는 명백한 true이므로 자바스크립트는 지연평가를 결정하고 불필요한 작업을 피한다.

```javascript
    true || "something" //true
    true && "something" //"something"
    true && "something" && true // true
```
