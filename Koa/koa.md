## Koa란?

### Node.js 웹프레임워크
Koa는 Express와 별차이는없고 좀더 가벼우며 `anync/await`기능을 편하게 사용가능하다.

### 작업환경
node.js V7 이상버전에서 사용하는것을 권장한다. `anync/await`를 바벨로 변환하지않고도 사용가능

### nvm
nvm은 Node.js 버전 관리도구.Window에는 정식지원을 하지않음. nvm-windows를 사용

### nvm 명령어
현재 기준 최신 버전인 v10.15.3 를 설치

```Shell
$ nvm install v10.15.3
$ nvm use v10.15.3 # v10.15.3 를 사용 할 때마다 터미널에서 실행
# v10.15.3 를 기본으로 사용하고 싶다면:
$ nvm alias default v10.15.3 # 윈도우는 작동하지 않음
$ node -v # 현재 버전 확인하기
```