## 목차

[Presentation Day](#presentation-day) <br/>
[개발동기](#개발동기) <br/>
[기능소개](#기능소개) <br/>
[기술스택](#기술스택) <br/>
[첼린지](#첼린지) <br/>
[트러블슈팅](#트러블슈팅) <br/>
[기획자](#기획자)

## Presentation Day

“Presentation Day”는 PDF파일을 업로드하여 파워포인트처럼 발표자 모드를 지원하는 웹사이트입니다.

발표자 모드로 전환 시, 청중에게만 보여지는 페이지와 발표자만 볼 수 있는 페이지로 나누어지며, 발표자는 타이머를 보며 시간을 관리하고, 메모 기능을 통해 대본을 작성하는 등 다양한 기능을 통해 원활한 발표가 이루어질 수 있도록 도와줍니다.

## 개발동기

파워포인트, CANVA 등 발표자 모드를 지원하는 사이트가 다수 존재하지만, 대부분 ppt, pptx의 확장자를 가진 파일만 업로드하여 사용할 수 있습니다.

과거에 PDF를 이용한 발표경험이 다수 있었고, 발표자 모드가 필요할 땐 pptx로 변환하여 이용하기도 했습니다.

하지만 pptx로 변환 시, 글꼴/컨텐츠 누락 등의 문제가 종종 발생했었고, ‘왜 pdf는 발표자 모드가 없을까?’라는 아쉬움이 남아 앞선 경험들을 바탕으로 본 프로젝트를 기획하게 되었습니다.

## 기능소개

## 기술스택

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white">
<img src="https://img.shields.io/badge/zustand-orange?style=for-the-badge&logo=zustand&logoColor=white">
<img src="https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white">
<img src="https://img.shields.io/badge/DaisyUI-1AD1A5?style=for-the-badge&logo=DaisyUI&logoColor=white">
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white">

### Zustand를 선택한 이유

## 첼린지

### 1. PDF파일 렌더링

- **1-1. `<embad>`,`<iframe>`, `<object>` 사용 → 실패**

태그 이용 시 아래 사진과 같이 브라우저에 내장된 Pdf뷰어로 표시되어 뷰어형식을 원하는대로 커스텀이 불가하여 원하는 방향으로 개발을 할 수 없다고 판단했습니다.

- **1-2. window.write() method 사용 → 실패**

MDN 공식문서에 의하면 본 메소드는 더 이상 권장 되지 않으며, 웹 표준에서 이미 제거되었거나 삭제가 진행 중이여서 사용하지 않았습니다.

- **1-3. viewer 구현 → 실패**

viewer를 직접 구현하려면 PDF파일을 구문 분석하고 렌더링할 수 있어야 함. 그리고 PDF파일 형식 사양에 접근해야 하는데 그 양이 굉장히 방대하고 포괄적이여서 오랜 시간이 걸릴 것으로 사료됩니다.

본 프로젝트 기간 내에는 구현 가능성이 없다고 판단하여 다른 방법으로 우회하는 선택을 했습니다.

- **1-4. 라이브러리 이용 → React-pdf 사용**

canvas 태그를 이용해서 웹사이트에 PDF 렌더링만 도와주며, 이 외에 필요한 UI/UX 부분은 모두 커스텀이 가능하고 라이브러리 의존성이 크지 않다고 판단되어 라이브러리를 이용하여 PDF파일을 렌더링 하였습니다.

본 라이브러리는 Mozilla에서 제작하고 관리하고 있는 PDF.js를 기반으로 만들어졌으며, react와의 호환성이 좋아서 선택하게 되었습니다.

### 2. 발표자 페이지와 청중 페이지 싱크 맞추기

발표자 페이지에서 페이지 이동, 마우스 이동, 드로잉 등의 기능 사용 시 청중 페이지에서도 실시간으로 동일하게 작동이 되게 구현하고자 했습니다.

- **2-1. 양 페이지 간 실시간 동기화**

→ `broadcast message API`, `localStorage` 사용

양 페이지 간 실시간 동기화가 이루어지려면 데이터 이동이 즉각적으로 이루어져야 하기에, 외부 저장소를 이용하거나 페이지 간의 통신을 도와주는 API를 이용하여 구현하였습니다.

`broadcast message API` : 실시간으로 양방향 통신이 가능하며, 채널을 생성하고 동기화하고자 하는 상태를 메시지로 보내면, 어느 컴포넌트든 그 채널을 구독하기만 하면 동기화가 가능하여 필요시마다 매 번 데이터를 전달하지 않아도 되는 장점이 있습니다. 프로젝트 특성 상 많은 상태들이 여러 컴포넌트에서 동기화가 필요하기 때문에 채용하게 되었습니다.

`localStorage` : 새로고침 없이 실시간 동기화가 가능하고, 데이터 크기가 크지 않은 경우 서버에 요청하는 것보다 속도가 빠르다는 특징이 있습니다. 더하여 “storage”이벤트로 실시간 데이터 변화를 감지할 수 있어 원하는 시기에 동기화가 가능하여 채용하게 되었습니다.

**이 외 고려한 방법**

`window.postMessage` : 1회성 통신으로 잦은 데이터 이동이 있을 시 지연이 발생하며, 주로 origin이 다를 때 사용하는 API로 broadcast message API보다 효율성이 낮다고 판단하여 채용하지 않았습니다.

`Websocket` : 실시간 동기화 방법으로 가장 빠르고 효과적이지만 서버 구축이 필요했습니다. 프론트엔드만으로 구현을 해내고 싶었고, 한계를 파악해보고 싶어 채용을 보류하였습니다. 프로젝트가 확장 됨에 따라 성능이 지속적으로 저하된다면 도입해보고 싶은 부분입니다.

- **2-2. 마우스 이동 실시간 동기화**

발표자 페이지에서 마우스를 이동하면 청중 페이지에선 레이저 포인터처럼 커서 포인터가 이동하도록 구현하고자 했습니다.

**실시간 동기화는 어떻게 할까?**

마우스 좌표값을 공유해야 한다고 생각하여 먼저 broadcast message API로 시도를 했지만, 마우스 이동의 특성 상 짧은 시간 안에 많은 좌표값이 전달되다 보니 흡사 무한 렌더링과 같은 데이터 이동을 감당하지 못했습니다.

**해상도 차이에 따른 싱크는 어떻게 맞춰야 할까?**

- **2-3. 드로잉 기능 실시간 동기화**

## 트러블슈팅

### 1. 최적화 문제

### 2. 드로잉 버튼 클릭 시 canvas 크기가 임의로 변경되는 문제

## 기획자
