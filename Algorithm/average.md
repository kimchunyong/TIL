# 평균 구하기

## 문제설명

정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

## 제한 사향

- arr은 길이 1이상, 100 이하인 배열입니다.
- arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

## 입출력 예

| arr       | return |
| --------- | ------ |
| [1,2,3,4] | 2.5    |
| [5,5]     | 5      |

### 내가 푼방법

매개변수 arr을 reduce()를 활용하여 다 더한뒤 arr.length로 나눠서 평균을 구했다.

```javascript
function solution(arr) {
  const arrLen = arr.length;
  const total = arr.reduce((prev, curr) => prev + curr, 0);
  return total / arrLen;
}
```
