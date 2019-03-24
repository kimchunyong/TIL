# k번째 선수

## 문제 설명

배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면
1. array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
2. 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
3. 2에서 나온 배열의 3번째 숫자는 5입니다.

배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.


### 내가 푼방법

1. commands로 받는 2차원 배열의 인자를 각 배열의 길이만큼 반복하면서 array를 자를 첫번째 시작점과 마지막 끝점을 찾아서 잘라 sliceArr에 저장.
2. sliceArr의 저장된 값을 commands의 배열의 k번째에 있는 숫자를 추출하여 answer에 push하여 return 시킨다.


```javascript
function solution(array, commands) {
    const answer = [];
    let i;
    for(i = 0; i < commands.length; i++){
     let sliceArr = array.slice(commands[i][0]-1,commands[i][1]);
     sliceArr.sort(function(a, b) {
      return a - b;
     });
     answer.push(sliceArr[commands[i][2]-1]);
    }
    return answer;
}
```

문제출처: 프로그래머스