# 준비사항
리액트를 배우기 전에 HTML,CSS,javascript를 잘 다룰 수 있어야 합니다.

## NPM

node와 npm을 설치

```{.bash}
    node --version
    *v8.9.4
    npm --version
    *v5.6.0
```
터미널 환경에서 명령어를 쳐서 version을 확인 할수 있습니다.

```{.bash}
    npm install -g <package>
```
`-g` 표시는 `npm` 에게 패키지를 전역 패키지에 설치를 명령하는 지시자 입니다. 지역 패키지는 현재 개발 중인 애플리케이션 내에서만 사용됩니다. 리액트는 라이브러리로서 지역 패키지에 해당됩니다. 아래 명령어로 패키지를 설치합시다.

react를 설치합니다.

```{.bash}
    npm install react
```

패키지는 생성된 node_modules/ 폴더에 저장되고 의존성 파일인 package.json에 패키지 리스트가 나열됩니다.

```{.bash}
    npm init -y
```
`-y` 표시는 package.json를 초기화하는 지시자입니다. - 표시를 사용하지 않으면 직접 파일 구성 방법을 결정해야 합니다. 프로젝트 초기화 후 `npm install <package>`를 통해 새 패키지를 설치하는 것이 좋습니다.

package.json는 노드 패키지 전체 파일을 공유하지 않고도 다른 개발자와 프로젝트를 공유할 수 있습니다. 이 파일 내 프로젝트에 사용된 노드 패키지 리스트가 모두 적혀 있는데, 이러한 패키지를 의존성(dependencies)이라 부릅니다. 패키지 의존성이 없어도 프로젝트를 다운로드할 수 있습니다. 의존성은 package.json에 작성됩니다. 프로젝트를 복사한 후 npm install 명령어로 모든 패키지가 쉽게 설치됩니다. npm install 스크립트는 package.json 파일에 나열된 모든 의존성을 취하여 node_modules/ 폴더에 설치합니다.

```{.bash}
    npm install --save-dev <package>
```

`--save-dev` 명령어는 노드 패키지가 개발 환경에서 사용되는 것을 말합니다.  다른 사람이 packge.json에 정보를가지고 `npm install` 을 하면 `—save-dev`에 의해 의존성을 갖는 모듈들이 설치가됩니다.