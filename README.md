# 프론트엔드 개발자 과제

## 프로젝트 실행

```
npm ci
npm run start
```

`npm ci`: 패키지 설치   
`npm run start`: 프로젝트 실행   

## Directory Structure

```bash
├─ public
└─ src
    ├─ assets
    |   ├─ css
    |   ├─ fonts
    |   ├─ img
    |   ├─ scss
    |   └─ sound
    ├─ common
    |   ├─ components
    |   ├─ containers
    |   └─ util
    ├─ home
    |   ├─ components
    |   └─ containers
    └─ store
```

`assets` : 각종 이미지, 스타일, 폰트, 소리 파일 등 Asset을 위한 Directory   
`common` : 공통 컴포넌트 및 Util 관련 Directory   
`home` : 프로젝터 첫 시작 Blank 화면 관련 Directory   
`store` : Redux State Store Directory (내부에 Mockup.js 파일 안에 Mockup Data가 존재)   

## 요구 사항

과제에 대한 상세내용은 PPT 파일 참조

### 과제

Directory 탐색기 구현

* /src/store/Mockup.js 에 directories Mockup Data 를 참조하여 Directory 탐색기 구현
* Mockup Data 를 Redux State 로 관리
* Mockup Data 에서 서버 정보를 기반으로 서버를 선택 했을 때 해당 서버에 맞는 Directory 탐색기 가 표현되도록 구현 ( 첫 화면에서 서버 선택 하는 화면을 구현, 서버를 선택 하면 선택한 서버에 맞는 Directory 화면이 표시 되도록 구현 )
* Directory 추가 및 File 추가 기능은 추가 버튼 클릭 시 Modal 로 구현
* 동일한 경로에 동일한 이름의 Directory 및 File 이 존재할 수 없음
* Directory 수정 시 Directory 이름만 수정
* 삭제 시 삭제할 것인지 여부 확인 후 삭제
* Directory 에 Sub Directory 가 있거나 File 이 있는 경우 삭제 불가능 하도록 조치