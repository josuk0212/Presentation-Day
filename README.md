<div align="center">
  <img src="https://github.com/user-attachments/assets/28a95353-1536-4703-a139-5b266139d17b">
  </br>

👉🏻 [웹사이트 바로가기](https://presentation-day.today)

</div>

# 목차

<!-- toc -->

- [Presentation Day](#presentation-day)
- [개발동기](#%EA%B0%9C%EB%B0%9C%EB%8F%99%EA%B8%B0)
- [기능소개](#%EA%B8%B0%EB%8A%A5%EC%86%8C%EA%B0%9C)
- [기술스택](#%EA%B8%B0%EC%88%A0%EC%8A%A4%ED%83%9D)
- [챌린지](#%EC%B1%8C%EB%A6%B0%EC%A7%80)
  * [1. 자유로운 뷰어 구성을 위한 PDF파일 렌더링 방법](#1-%EC%9E%90%EC%9C%A0%EB%A1%9C%EC%9A%B4-%EB%B7%B0%EC%96%B4-%EA%B5%AC%EC%84%B1%EC%9D%84-%EC%9C%84%ED%95%9C-pdf%ED%8C%8C%EC%9D%BC-%EB%A0%8C%EB%8D%94%EB%A7%81-%EB%B0%A9%EB%B2%95)
    + [1-1. 라이브러리를 채택한 이유 - react-pdf](#1-1-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC%EB%A5%BC-%EC%B1%84%ED%83%9D%ED%95%9C-%EC%9D%B4%EC%9C%A0---react-pdf)
    + [1-2. 시도했으나 적합하지 않았던 방법들](#1-2-%EC%8B%9C%EB%8F%84%ED%96%88%EC%9C%BC%EB%82%98-%EC%A0%81%ED%95%A9%ED%95%98%EC%A7%80-%EC%95%8A%EC%95%98%EB%8D%98-%EB%B0%A9%EB%B2%95%EB%93%A4)
  * [2. 사용자 로컬 PDF파일 처리 방식](#2-%EC%82%AC%EC%9A%A9%EC%9E%90-%EB%A1%9C%EC%BB%AC-pdf%ED%8C%8C%EC%9D%BC-%EC%B2%98%EB%A6%AC-%EB%B0%A9%EC%8B%9D)
    + [2-1. PDF파일 업로드를 위한 클릭 기반 파일 선택 및 드래그 앤 드롭 구현](#2-1-pdf%ED%8C%8C%EC%9D%BC-%EC%97%85%EB%A1%9C%EB%93%9C%EB%A5%BC-%EC%9C%84%ED%95%9C-%ED%81%B4%EB%A6%AD-%EA%B8%B0%EB%B0%98-%ED%8C%8C%EC%9D%BC-%EC%84%A0%ED%83%9D-%EB%B0%8F-%EB%93%9C%EB%9E%98%EA%B7%B8-%EC%95%A4-%EB%93%9C%EB%A1%AD-%EA%B5%AC%ED%98%84)
    + [2-2. PDF 렌더링을 위한 URL 처리 방식 - createObjectURL](#2-2-pdf-%EB%A0%8C%EB%8D%94%EB%A7%81%EC%9D%84-%EC%9C%84%ED%95%9C-url-%EC%B2%98%EB%A6%AC-%EB%B0%A9%EC%8B%9D---createobjecturl)
    + [2-3. 생성된 URL을 react-pdf 컴포넌트에 전달하여 PDF 렌더링](#2-3-%EC%83%9D%EC%84%B1%EB%90%9C-url%EC%9D%84-react-pdf-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%97%90-%EC%A0%84%EB%8B%AC%ED%95%98%EC%97%AC-pdf-%EB%A0%8C%EB%8D%94%EB%A7%81)
  * [3. 청중 페이지와 발표자 페이지 간 실시간 동기화](#3-%EC%B2%AD%EC%A4%91-%ED%8E%98%EC%9D%B4%EC%A7%80%EC%99%80-%EB%B0%9C%ED%91%9C%EC%9E%90-%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B0%84-%EC%8B%A4%EC%8B%9C%EA%B0%84-%EB%8F%99%EA%B8%B0%ED%99%94)
    + [3-1. 청중-발표자 화면 싱크를 위한 상태 동기화 - broadcast message API, localStorage](#3-1-%EC%B2%AD%EC%A4%91-%EB%B0%9C%ED%91%9C%EC%9E%90-%ED%99%94%EB%A9%B4-%EC%8B%B1%ED%81%AC%EB%A5%BC-%EC%9C%84%ED%95%9C-%EC%83%81%ED%83%9C-%EB%8F%99%EA%B8%B0%ED%99%94---broadcast-message-api-localstorage)
    + [3-2. 청중 페이지에서 발표자의 마우스 움직임을 실시간으로 시각화하기 위한 마우스 포인터 구현](#3-2-%EC%B2%AD%EC%A4%91-%ED%8E%98%EC%9D%B4%EC%A7%80%EC%97%90%EC%84%9C-%EB%B0%9C%ED%91%9C%EC%9E%90%EC%9D%98-%EB%A7%88%EC%9A%B0%EC%8A%A4-%EC%9B%80%EC%A7%81%EC%9E%84%EC%9D%84-%EC%8B%A4%EC%8B%9C%EA%B0%84%EC%9C%BC%EB%A1%9C-%EC%8B%9C%EA%B0%81%ED%99%94%ED%95%98%EA%B8%B0-%EC%9C%84%ED%95%9C-%EB%A7%88%EC%9A%B0%EC%8A%A4-%ED%8F%AC%EC%9D%B8%ED%84%B0-%EA%B5%AC%ED%98%84)
      - [3-2-1. 마우스 좌표를 실시간으로 공유해야 한다. - localStorage](#3-2-1-%EB%A7%88%EC%9A%B0%EC%8A%A4-%EC%A2%8C%ED%91%9C%EB%A5%BC-%EC%8B%A4%EC%8B%9C%EA%B0%84%EC%9C%BC%EB%A1%9C-%EA%B3%B5%EC%9C%A0%ED%95%B4%EC%95%BC-%ED%95%9C%EB%8B%A4---localstorage)
      - [3-2-2. 해상도 및 레이아웃 차이로 인한 좌표 오차 보정](#3-2-2-%ED%95%B4%EC%83%81%EB%8F%84-%EB%B0%8F-%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83-%EC%B0%A8%EC%9D%B4%EB%A1%9C-%EC%9D%B8%ED%95%9C-%EC%A2%8C%ED%91%9C-%EC%98%A4%EC%B0%A8-%EB%B3%B4%EC%A0%95)
    + [3-3. 발표 콘텐츠의 명확한 전달을 위한 실시간 드로잉 기능 구현](#3-3-%EB%B0%9C%ED%91%9C-%EC%BD%98%ED%85%90%EC%B8%A0%EC%9D%98-%EB%AA%85%ED%99%95%ED%95%9C-%EC%A0%84%EB%8B%AC%EC%9D%84-%EC%9C%84%ED%95%9C-%EC%8B%A4%EC%8B%9C%EA%B0%84-%EB%93%9C%EB%A1%9C%EC%9E%89-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84)
      - [3-3-1. 마우스 이벤트를 활용한 좌표값 생성](#3-3-1-%EB%A7%88%EC%9A%B0%EC%8A%A4-%EC%9D%B4%EB%B2%A4%ED%8A%B8%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EC%A2%8C%ED%91%9C%EA%B0%92-%EC%83%9D%EC%84%B1)
      - [3-3-2. 실시간 드로잉 상태 공유를 위한 동기화 작업 - 배열구조와 localStorage](#3-3-2-%EC%8B%A4%EC%8B%9C%EA%B0%84-%EB%93%9C%EB%A1%9C%EC%9E%89-%EC%83%81%ED%83%9C-%EA%B3%B5%EC%9C%A0%EB%A5%BC-%EC%9C%84%ED%95%9C-%EB%8F%99%EA%B8%B0%ED%99%94-%EC%9E%91%EC%97%85---%EB%B0%B0%EC%97%B4%EA%B5%AC%EC%A1%B0%EC%99%80-localstorage)
- [트러블슈팅](#%ED%8A%B8%EB%9F%AC%EB%B8%94%EC%8A%88%ED%8C%85)
  * [1. 실시간 동기화 기능에서 발생한 성능 저하 및 메모리 누수 문제](#1-%EC%8B%A4%EC%8B%9C%EA%B0%84-%EB%8F%99%EA%B8%B0%ED%99%94-%EA%B8%B0%EB%8A%A5%EC%97%90%EC%84%9C-%EB%B0%9C%EC%83%9D%ED%95%9C-%EC%84%B1%EB%8A%A5-%EC%A0%80%ED%95%98-%EB%B0%8F-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EB%88%84%EC%88%98-%EB%AC%B8%EC%A0%9C)
    + [1-1. useEffect를 통한 "storage" 이벤트의 등록/해제 처리](#1-1-useeffect%EB%A5%BC-%ED%86%B5%ED%95%9C-storage-%EC%9D%B4%EB%B2%A4%ED%8A%B8%EC%9D%98-%EB%93%B1%EB%A1%9D%ED%95%B4%EC%A0%9C-%EC%B2%98%EB%A6%AC)
    + [1-2. 리스트 렌더링 시 유니크 key값 부여](#1-2-%EB%A6%AC%EC%8A%A4%ED%8A%B8-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%8B%9C-%EC%9C%A0%EB%8B%88%ED%81%AC-key%EA%B0%92-%EB%B6%80%EC%97%AC)
  * [2. 드로잉 on/off 버튼 클릭 시 canvas 크기가 임의로 변경되는 문제](#2-%EB%93%9C%EB%A1%9C%EC%9E%89-onoff-%EB%B2%84%ED%8A%BC-%ED%81%B4%EB%A6%AD-%EC%8B%9C-canvas-%ED%81%AC%EA%B8%B0%EA%B0%80-%EC%9E%84%EC%9D%98%EB%A1%9C-%EB%B3%80%EA%B2%BD%EB%90%98%EB%8A%94-%EB%AC%B8%EC%A0%9C)
- [회고록](#%ED%9A%8C%EA%B3%A0%EB%A1%9D)
- [개발자](#%EA%B0%9C%EB%B0%9C%EC%9E%90)

<!-- tocstop -->

# Presentation Day

"Presentation Day"는 **PDF 파일을 업로드하여 마치 파워포인트의 발표자 모드처럼 활용할 수 있는 웹 서비스**입니다. 사용자는 PDF파일을 PPT파일로 변환할 필요없이 손쉽게 발표 자료를 준비할 수 있습니다.

특히 발표자 모드로 전환하면, **청중에게 보이는 화면과 발표자 전용 화면이 분리**되어 각각 다른 정보를 보여줄 수 있습니다.
청중은 발표 슬라이드만을 집중해서 볼 수 있으며, 발표자는 자신의 화면에서 발표 노트(대본), 발표 타이머, 다음 슬라이드 미리보기 등 다양한 도구를 활용해 발표를 더욱 체계적으로 진행할 수 있습니다.

이러한 기능은 발표자가 시간 관리에 집중하고, 사전에 작성한 스크립트를 참고하면서 긴장감 없이 자연스럽게 발표할 수 있도록 도와줍니다.

# 개발동기

PowerPoint, Canva 등 다양한 발표 도구들이 발표자 모드를 지원하고 있지만, **대부분은 PPT 또는 PPTX 형식의 파일만 업로드할 수 있도록 제한**되어 있습니다. 이로 인해 PDF 파일을 중심으로 발표 자료를 준비하는 사용자들에게는 제한적인 환경이 될 수밖에 없습니다.

과거에 PDF를 활용한 발표 경험이 많았고, 발표자 모드의 필요성을 느낄 때마다 PDF를 PPTX로 변환하여 사용하곤 했습니다. 하지만 이 과정에서 글꼴이 깨지거나, 이미지가 누락되는 등 콘텐츠 손상이 발생하는 문제를 자주 겪었습니다. 파일 호환성 이슈로 인해 발표 직전까지 수정을 반복해야 했고, 이는 발표의 완성도와 집중도에 큰 영향을 주었습니다.

이러한 불편을 겪으며 **"왜 PDF 기반의 발표자 모드는 없을까?"** 라는 의문이 생겼고, 그 고민이 바로 이 프로젝트의 출발점이 되었습니다. 실질적인 발표 환경에서 느낀 불편함과 필요를 기반으로, PDF 파일만으로도 안정적이고 완성도 높은 발표를 진행할 수 있는 플랫폼을 만들고자 Presentation Day가 기획되었습니다.

# 기능소개

| 이미지                                                                                                                | 설명                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="400" alt="Image" src="https://github.com/user-attachments/assets/c0f1d370-1d42-45ed-bde5-710eb24d803c" /> | - 사용자는 "업로드 영역"을 클릭하여 파일을 선택하거나 드래그하여 파일을 업로드 할 수 있습니다. </br></br> - "사용 방법 안내"를 통해 사용자에게 간단한 사용법을 제공합니다.                                                                                                                                                                                                                     |
| <img width="400" alt="Image" src="https://github.com/user-attachments/assets/ab1b19c4-aa3c-4b59-a332-69274119bf17" /> | - 업로드된 파일은 화살표 클릭, 마우스 클릭, 방향키 조작을 통해 각 페이지를 확인할 수 있습니다. </br></br> - "Go to Presentation!" 버튼을 클릭하면 발표자 페이지가 새 탭에서 열리며, 청중 페이지는 발표에 사용할 디바이스로 이동 후 사용할 수 있습니다.                                                                                                                                         |
| <img width="400" alt="Image" src="https://github.com/user-attachments/assets/bb7aabba-c756-4413-8fde-79ceee7982ff" /> | **발표자 페이지** </br></br> - 화면 왼쪽 상단에는 타이머 기능이 제공되며, Pause 및 Reset 버튼을 통해 일시정지와 초기화가 가능합니다. </br></br> - 각 PDF 페이지마다 메모를 작성하고 저장하여, 발표자가 필요한 정보를 잊지 않고 전달할 수 있도록 도와줍니다.                                                                                                                                    |
| <img width="400" alt="Image" src="https://github.com/user-attachments/assets/c3ae7ae3-3158-4805-8a34-e74e9a438a46" /> | **좌: 청중페이지, 우: 발표자 페이지** </br></br> - 화면 중앙에 위치한 PDF 페이지만 청중 페이지에 노출됩니다. (이 영역을 ‘뷰어 섹션’이라 칭합니다.) </br></br> - 뷰어 섹션에 마우스를 이동하면, 청중의 집중을 돕기 위해 청중 페이지에서도 마우스 포인터가 동일하게 이동합니다. </br></br> - 펜 및 지우개 버튼을 사용하여 뷰어 섹션 내에서 드로잉을 추가하거나 삭제할 수 있는 기능을 제공합니다. |

※ 시각적 편의를 위해 청중용 화면과 발표자용 화면을 한 화면에 함께 구성하였습니다. </br>
※ 실제 사용 시, 청중 페이지는 전체화면 모드로 표시됩니다.

# 기술스택

<div align="left">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
  <img src="https://img.shields.io/badge/Zustand-orange?style=for-the-badge">
  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
  <img src="https://img.shields.io/badge/daisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
</div>

# 챌린지

## 1. 자유로운 뷰어 구성을 위한 PDF파일 렌더링 방법

### 1-1. 라이브러리를 채택한 이유 - react-pdf

웹에서 PDF를 자유롭게 표현하기 위해 다양한 방식을 검토한 끝에, 최종적으로 **react-pdf 라이브러리를 채택**했습니다.
이 라이브러리는 Mozilla에서 개발 및 관리하는 PDF.js를 기반으로 하고 있으며, React 환경에서의 호환성이 뛰어나며 문서 렌더링을 비교적 간편하게 구현할 수 있다는 장점이 있습니다.

특히, **PDF 파일 내 컨텐츠의 렌더링만 담당**하고, 뷰어의 기능 구성(페이지 전환, 드로잉, 메모 작성 등)은 직접 구현해야 하기 때문에, **자유도 높은 커스터마이징**이 가능하다는 점이 큰 장점이었습니다.
또한 의존성도 상대적으로 적고, 업데이트도 꾸준히 이루어지고 있어 장기적인 유지보수 관점에서도 적합하다고 판단했습니다.

react-pdf는 PDF파일의 고유한 URL을 Prop으로 전달받아 내부적으로 <canvas> 태그를 활용하여 페이지를 브라우저에 렌더링하는 방식입니다.
기본적으로는 로딩 상태 관리와 같은 단순 편의 기능만 제공하기 때문에, PDF 페이지 미리보기, 메모 작성, 드로잉, 타이머 등의 사용자 맞춤 UI 기능은 별도로 구현하였습니다.

**react-pdf를 선택한 이유?**

| 라이브러리                  | 호환성          | 주요 특징 및 기능                                                             | 커스터마이징 유연성 | 주 사용 용도                                                                               |
| --------------------------- | --------------- | ----------------------------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------ |
| **react-pdf**               | React           | - PDF.js 기반<br>- 선언형 API 제공<br>- React와 높은 호환성                   | 높음                | - React 프로젝트에서의 PDF 렌더링<br>- 뷰어 UI를 직접 구성해야 하는 경우                   |
| **ng2-pdf-viewer**          | Angular         | - PDF.js 기반<br>- 기본적인 줌, 회전, 페이지 탐색 기능 제공                   | 중간                | - Angular에서 간단한 PDF 뷰어가 필요할 때                                                  |
| **ng2-pdfjs-viewer**        | Angular         | - ViewerJS 기반 iFrame 래퍼<br>- 경량 구성                                    | 낮음                | - 여러 PDF를 동시에 표시하거나 최소한의 기능만 필요한 경우                                 |
| **ngx-extended-pdf-viewer** | Angular         | - 고급 기능 제공 (텍스트 선택, 주석, 검색 등)<br>- 완성도 높은 기본 뷰어 제공 | 낮음                | - 빠르게 완성형 PDF 뷰어를 구성하고자 할 때                                                |
| **pdfjs-dist**              | 프레임워크 무관 | - Mozilla PDF.js의 순수 JavaScript 빌드<br>- 저수준 API 제공                  | 매우 높음           | - 프레임워크에 상관없이 직접 렌더링 로직을 구현해야 할 경우<br>- 높은 자유도가 필요한 경우 |

라이브러리 선택 기준은 **호환성과 자유로운 커스터마이징**이었으며, 본 프로젝트가 React 기반인 만큼 react-pdf가 가장 적합하다고 판단했습니다.

</br>

### 1-2. 시도했으나 적합하지 않았던 방법들

- **1-2-1. `<embed>`,`<iframe>`, `<object>` 태그 사용 - 제한적인 뷰어 구성**

HTML 기본 태그를 사용해 PDF를 삽입하는 방식도 고려했지만, 이 방식은 브라우저에 내장된 기본 뷰어를 호출하기 때문에 자유로운 커스터마이징이 불가능했습니다.
기본으로 내장되어 있는 기능(페이지 탐색, 인쇄, 다운로드 등)은 고정되어 있으며, 수정 및 확장도 불가능하여 원하는 형태의 뷰어를 구현할 수 없었습니다.

<div align="center">
  <img width="600" alt="Image" src="https://github.com/user-attachments/assets/9be7f684-0eba-472d-9c30-218cc081aeb1" />
</div>

- **1-2-2. window.write() method 사용 - 웹 표준 비권장 방법**

window.document.write()를 활용해 PDF를 표시하는 방식도 있었으나, [MDN 공식 문서](https://developer.mozilla.org/en-US/docs/Web/API/Document/write)에 따르면 본 메서드는 현재 웹 표준에서 사용이 권장되지 않으며, 일부 브라우저에서는 지원을 종료할 예정입니다.
따라서, 보안 및 유지보수 측면에서도 부적절하다고 판단하여 해당 방식은 사용하지 않았습니다.

- **1-2-3. PDF viewer 직접 구현 - 시간 제약**

PDF를 직접 구문 분석하고 페이지별로 렌더링하는 뷰어를 직접 구현하는 방안도 잠시 고려했습니다.
하지만 PDF 포맷은 매우 복잡하고 방대한 스펙을 가지며, 이를 정확하게 해석하고 표현하려면 수많은 렌더링 로직과 수동 처리 과정이 필요합니다.

프로젝트 일정을 고려할 때, 제한된 기간 내 구현하기에는 현실적인 부담이 크다고 판단하여 해당 방안은 제외했습니다.

</br>

## 2. 사용자 로컬 PDF파일 처리 방식

사용자가 로컬에 저장된 PDF 파일을 업로드하고, 이를 브라우저에서 렌더링하기까지의 과정은 아래와 같습니다. </br>
**(1) 파일 업로드 → (2) 파일 URL 생성 → (3) PDF 렌더링**

### 2-1. PDF파일 업로드를 위한 클릭 기반 파일 선택 및 드래그 앤 드롭 구현

- **클릭 방식**

`<input type="file">`을 사용하여 클릭 시 시스템 파일 탐색기가 열리고, 사용자가 원하는 PDF 파일을 선택할 수 있습니다.

- **드래그 앤 드롭 방식**

사용자 경험을 개선하고, 직관적인 시각적 효과를 위하여 onDrag 및 onDrop 이벤트를 이용한 드래그 앤 드롭 기능울 구현했습니다.
이를 통해 사용자는 업로드 영역에 PDF 파일을 드래그하여 보다 간편하게 업로드할 수 있습니다.

업로드가 완료되면 **File 객체를 통해 선택된 PDF 파일 데이터에 접근**할 수 있으며, 이를 기반으로 URL을 생성하는 다음 단계를 진행합니다.

### 2-2. PDF 렌더링을 위한 URL 처리 방식 - createObjectURL

react-pdf 라이브러리는 PDF 문서를 렌더링할 때, 파일의 고유한 URL을 prop으로 전달해야 합니다.
이를 위해 사용자가 업로드한 파일을 URL로 변환하는 작업이 필요하며, 그 과정에서 createObjectURL과 readAsDataURL 두 가지 방식이 존재합니다.

- **createObjectURL vs readAsDataURL(속도와 메모리 사용량을 중심으로 비교)**

<div align="center">
  <img width="600" alt="Image" src="https://github.com/user-attachments/assets/a94742ab-5d8f-4a06-8474-e26b99b6aa2b" />
</div>

`속도 측면`: createObjectURL은 브라우저 메모리에 파일을 저장하고, 해당 파일에 접근 가능한 임시 URL을 생성합니다.
이 방식은 대용량 파일 처리에 강하며, 파일을 base64로 인코딩하는 과정을 거치지 않기 때문에 **즉시 렌더링 가능한 빠른 처리 속도**를 보장합니다.
반면, readAsDataURL은 파일을 base64 형식의 문자열로 변환하는 비동기 작업이 필요해 상대적으로 느리고, 렌더링까지의 시간이 더 소요됩니다.

`메모리 사용량 측면`: createObjectURL은 내부적으로 **파일을 직접 인코딩하지 않고 포인터로 참조**하기 때문에 URL 문자열의 크기가 짧고 메모리 사용량이 적습니다.
반대로 readAsDataURL은 전체 파일을 문자열로 변환하는 구조이기 때문에, 파일 크기가 클수록 메모리 부담이 커질 수 있는 단점이 있습니다.

- **실제 URL 비교**

| createObjectURL                                                                                                       | readAsDataURL                                                                             |
| --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| <img width="484" alt="Image" src="https://github.com/user-attachments/assets/aa05457e-5933-4cf6-bc48-cf860ede514c" /> | ![Image](https://github.com/user-attachments/assets/8035c1b7-b710-4a8f-ac95-f7145d9013ef) |

위의 예시처럼 **createObjectURL은 간결하고 식별 가능한 임시 URL을 생성**하는 반면,
readAsDataURL은 base64 인코딩된 긴 문자열로 표현되어, 가독성 및 메모리 측면에서 상대적으로 효율성이 떨어집니다.

### 2-3. 생성된 URL을 react-pdf 컴포넌트에 전달하여 PDF 렌더링

createObjectURL을 통해 생성한 임시 **URL은 react-pdf 라이브러리가 제공하는 컴포넌트의 file prop에 전달**됩니다.
라이브러리는 해당 URL을 기반으로 <canvas> 태그를 통해 PDF 페이지를 브라우저에 렌더링하며, 사용자는 업로드한 PDF 파일을 바로 확인할 수 있습니다.

</br>

## 3. 청중 페이지와 발표자 페이지 간 실시간 동기화

발표자 모드 진행 시, 발표자와 청중이 **서로 다른 화면을 보더라도 실시간으로 같은 상태를 공유**할 수 있어야 합니다.
발표자가 페이지를 넘기거나, 마우스를 이동하거나, 드로잉을 수행할 때, 청중 화면에서도 동일한 반응이 즉시 반영되도록 양쪽 페이지 간의 즉각적인 상태 동기화가 필요했습니다.

발표자 페이지에서 페이지 이동, 마우스 이동, 드로잉 등의 기능 사용 시 청중 페이지에서도 실시간으로 동일하게 작동이 되게 구현하고자 했습니다.

### 3-1. 청중-발표자 화면 싱크를 위한 상태 동기화 - broadcast message API, localStorage

실시간 상태 공유를 위해 외부 서버 없이도 클라이언트 사이에서 상태를 직접 전달할 수 있는 **브라우저 API들을 활용**했습니다.

**✅ broadcast message API:** **실시간으로 양방향 통신**이 가능하며, 채널을 생성하고 동기화하고자 하는 상태를 메시지로 보내면, 어느 컴포넌트든 그 채널을 구독하기만 하면 동기화가 가능하여 필요시마다 매 번 데이터를 전달하지 않아도 되는 장점이 있습니다. 프로젝트 특성 상 많은 상태들이 여러 컴포넌트에서 동기화가 필요하기 때문에 채용하게 되었습니다.

**✅ localStorage:** 새로고침 없이 실시간 동기화가 가능하고, 데이터 크기가 크지 않은 경우 서버에 요청하는 것보다 속도가 빠르다는 특징이 있습니다. 더하여 **"storage"이벤트로 실시간 데이터 변화를 감지**할 수 있어 원하는 시기에 동기화가 가능하여 채용하게 되었습니다.

- **이 외 고려한 방법**

**🚫 window.postMessage:** 브라우저 간 통신을 위한 API이긴 하나, **1회성 메시지 전송에 특화**되어 있어 상태의 지속적이고 빈번한 변경에는 적합하지 않았습니다. 또한 보통 서로 다른 origin 간 통신을 목적으로 사용되므로, 동일 도메인 내부에서 양방향 실시간 통신에는 BroadcastChannel보다 비효율적이라 판단했습니다.

**🚫Websocket:** 실시간 통신을 위한 **가장 강력하고 빠른 솔루션**이지만, 별도의 WebSocket 서버 구축이 필요합니다. 본 프로젝트는 **프론트엔드 단독 구현이 목적**이었기 때문에, 우선은 도입을 보류하였고, 성능 이슈나 확장 요구가 발생하면 차후 도입을 고려하고 있습니다.

</br>

### 3-2. 청중 페이지에서 발표자의 마우스 움직임을 실시간으로 시각화하기 위한 마우스 포인터 구현

발표자가 마우스를 이동할 때, 청중도 같은 위치를 실시간으로 확인할 수 있도록 레이저 포인터처럼 동작하는 마우스 포인터 기능을 구현했습니다.
이 기능은 발표자가 특정 내용을 강조할 때, 청중이 발표자의 의도를 직관적으로 이해하도록 돕는 기능입니다.

#### 3-2-1. 마우스 좌표를 실시간으로 공유해야 한다. - localStorage

처음에는 마우스 좌표를 BroadcastChannel API를 통해 실시간 전송하려 했습니다.
하지만 마우스는 매우 짧은 간격으로 계속해서 이동하기 때문에 **좌표값이 매우 빈번하게 갱신되는 특성**이 있습니다.
이로 인해 좌표가 과도하게 전송되면서 잦은 렌더링과 이벤트 처리로 성능이 저하되고, 마치 무한 렌더링처럼 브라우저가 버벅이는 현상이 발생했습니다.

이 문제를 해결하기 위해, 이전 좌표를 계속 덮어쓰는 방식으로 데이터를 처리하는 localStorage를 활용했습니다.

1. 좌표가 갱신 될 때마다 값을 localStorage에 전송하여 이전 좌표를 계속 덮어씌웁니다.
2. 청중 페이지에서는 "storage" 이벤트를 통해 변경된 최신 좌표값만 감지하여 사용합니다.
3. 좌표값이 누적되지 않기 때문에, 메모리와 성능 부담이 크게 줄어들었습니다.
4. 브라우저 간 통신이 가능하면서도 서버를 사용하지 않아 간단한 구현이 가능했습니다.

localStorage의 용량 제한(5MB 이내)도 고려했을 때, 짧고 빈번한 데이터 처리에는 적합한 방식이었습니다.

#### 3-2-2. 해상도 및 레이아웃 차이로 인한 좌표 오차 보정

양 페이지 간 좌표값 오차 보정을 위해 offsetX/Y에 양 페이지의 배율 차이를 곱한 후,
해당 PDF 뷰어 요소의 위치(getBoundingClientRect)를 기준 좌표로 삼아 계산식을 세웠습니다.

> **계산식: offsetX \* 양 페이지 간의 배율 차이 + getBoundingClientRect().x**

보정이 없을 경우, 발표자와 청중의 페이지의 전체화면 모드, 레이아웃 등의 구조 차이로 인해 **동일한 좌표값이 서로 다른 위치를 가리키는 문제**가 발생했습니다.

- **전체화면 모드로 인한 배율 차이**

발표자 모드가 활성화되면 청중 페이지에서는 전체화면 모드로 진행되기 떄문에, PDF 페이지의 실제 렌더링 크기가 발표자 페이지보다 큽니다.
이로 인해 같은 offsetX/Y 좌표도 **청중 페이지에서는 더 좁은 범위에서만 마우스 포인터가 위치**하게 됩니다. 따라서 배율의 차이만큼 좌표값에 곱을 해주어야 합니다.

- **기준 좌표의 차이**

발표자 페이지는 PDF 뷰어 영역 기준(offsetX/Y)으로 좌표값을 전송하는데, 청중 페이지는 **브라우저 뷰포트 전체 기준(clientX/Y)**으로 좌표를 해석합니다.
이로 인해 좌표 (0, 0)이 청중 화면의 왼쪽 상단 모서리에 고정되어 포인터가 원하는 위치에 표시되지 않는 문제가 발생합니다.
이를 해결하기 위해 청중 페이지에서는 **뷰어 요소 자체가 브라우저 내 어느 위치에 렌더링되었는지를 알아야** 올바른 위치에 포인터를 표시할 수 있습니다.
이때 브라우저 내 특정 요소의 위치를 알려주는 getBoundingClientRect()를 사용하여 얻은 기준점을 바탕으로 좌표를 보정했습니다.

<div align="center">
  <img width="600" alt="Image" src="https://github.com/user-attachments/assets/cfb25ba1-bd81-452b-a29b-3684cb1e2509" />
</div>

- `screenXY`: 모니터 기준 좌표값

- `clientXY`: 브라우저 기준 좌표값

- `pageXY`: 스크롤을 포함한 페이지 기준 좌표값

- `offsetXY`: 특정 요소 기준 좌표값

- `getBoundingClientRect()`: 브라우저 내 특정 요소가 위치한 왼쪽 상단 위 좌표값

```jsx
function CursorPointer({ pdfRef }) {
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });
  const [audiencePageViewerCoodinate, setAudiencePageViewerCoodinate] =
    useState({ x: 0, y: 0 });

  useEffect(() => {
    function getCursorCoordinate() {
      const coordX = Number(localStorage.getItem("coordX"));
      const coordY = Number(localStorage.getItem("coordY"));
      const fullScreenViewerCoodinate = pdfRef.current.getBoundingClientRect();

      setAudiencePageViewerCoodinate({
        x: fullScreenViewerCoodinate.x,
        y: fullScreenViewerCoodinate.y,
      });
      setCoordinate({ x: coordX, y: coordY });
    }

    addEventListener("storage", getCursorCoordinate);

    return () => {
      removeEventListener("storage", getCursorCoordinate);
    };
  }, []);

  return (
    <div
      className="absolute w-5 h-5 bg-red-700 opacity-50 rounded-full"
      style={{
        left: `${coordinate.x * 2 + audiencePageViewerCoodinate.x - 10}px`,
        top: `${coordinate.y * 2 + audiencePageViewerCoodinate.y - 10}px`,
      }}
    ></div>
  );
}
```

</br>

### 3-3. 발표 콘텐츠의 명확한 전달을 위한 실시간 드로잉 기능 구현

발표자가 PDF 페이지 위에 드로잉을 할 때, 해당 드로잉이 청중 화면에서도 실시간으로 그대로 반영되고자 했습니다.
이를 위해 발표자 페이지에서 발생한 마우스 좌표를 추적하고, 해당 정보를 청중 페이지로 동기화하는 기능을 구현했습니다.

#### 3-3-1. 마우스 이벤트를 활용한 좌표값 생성

드로잉 기능은 `<canvas>` 태그를 이용했으며, 사용자가 **마우스를 클릭하고 드래그하는 동작**을 통해 선을 그릴 수 있도록 설계했습니다.
다음과 같은 마우스 이벤트를 통해 드로잉 동작을 캡처합니다.

- onMouseDown: 드로잉 시작 (선의 시작점 저장)
- onMouseMove: 마우스가 움직이는 동안 연속된 좌표값 기록
- onMouseUp: 드로잉 종료
- onMouseLeave: 드로잉 중 캔버스를 벗어났을 때 종료 처리

이러한 마우스 이벤트 흐름을 통해, 하나의 선을 구성하는 좌표값이 생성됩니다.

#### 3-3-2. 실시간 드로잉 상태 공유를 위한 동기화 작업 - 배열구조와 localStorage

드로잉은 본질적으로 **좌표값의 연속된 집합**이며, 선 하나는 시작점과 끝점 좌표만으로도 구성할 수 있습니다.
하지만 보다 **자유도 높은 드로잉 경험을 제공**하기 위해, 단순한 직선에 국한하지 않고 **마우스를 클릭한 시점부터 해제할 때까지의 모든 좌표값을 배열 형태로 저장**하였습니다.

이 좌표 배열은 드로잉 도중 실시간으로 업데이트되며, localStorage를 통해 청중 페이지에 즉시 공유됩니다.
청중 페이지에서는 "storage" 이벤트를 활용해 localStorage의 변경을 감지하고, 업데이트된 최신 좌표 배열을 불러와 캔버스에 즉시 반영합니다.

```jsx
function handleStartDrawing(event) {
  const startCoordinateX = event.nativeEvent.offsetX;
  const startCoordinateY = event.nativeEvent.offsetY;
  setIsDrawing(true);
  setCoordinate({ x: startCoordinateX, y: startCoordinateY });
}

function handleDrawing(event) {
  if (!isDrawing) return;
  const finishCoordinateX = event.nativeEvent.offsetX;
  const finishCoordinateY = event.nativeEvent.offsetY;
  const saveCoordinate = {
    startCoordinateX: coordinate.x,
    startCoordinateY: coordinate.y,
    finishCoordinateX,
    finishCoordinateY,
  };
  setCoordinateList([...coordinateList, saveCoordinate]);
  setCoordinate({ x: finishCoordinateX, y: finishCoordinateY });
  localStorage.setItem("coordinateList", JSON.stringify(coordinateList));
}

function handleFinishDrawing() {
  setIsDrawing(false);
}

useEffect(() => {
  function getDrawingData() {
    const savedCoordinateList = JSON.parse(
      localStorage.getItem("coordinateList")
    );
    setCoordinateList(savedCoordinateList);
  }
  addEventListener("storage", getDrawingData);
  return () => removeEventListener("storage", getDrawingData);
}, []);
```

</br>

# 트러블슈팅

## 1. 실시간 동기화 기능에서 발생한 성능 저하 및 메모리 누수 문제

### 1-1. useEffect를 통한 "storage" 이벤트의 등록/해제 처리

- **🚨 문제상황**

마우스 좌표값을 이용하는 실시간 동기화 기능을 구현한 이후, 웹사이트의 **메모리 사용량이 1GB를 초과**하는 비정상적인 상황이 발생했습니다.

문제의 원인은 빈번하게 발생하는 마우스 좌표의 실시간 동기화 과정에서 localStorage를 주시하고 있는 "Storage" 이벤트가 계속 살아 있는 구조였습니다.
이 이벤트가 계속 남아 메모리를 점유하는 문제가 원인이였습니다.

<div align="center">
  <img width="450" alt="Image" src="https://github.com/user-attachments/assets/ba845c28-46a8-4496-b46a-50856a6ec623" />
</div>

- **✅ 해결방안**

```jsx
useEffect(() => {
  function getCursorCoordinate() {
    const coordX = Number(localStorage.getItem("coordX"));
    const coordY = Number(localStorage.getItem("coordY"));

    setCoordinate({ x: coordX, y: coordY });
  }

  addEventListener("storage", getCursorCoordinate);

  return () => {
    removeEventListener("storage", getCursorCoordinate);
  };
}, []);
```

- "storage" 이벤트는 localStorage 데이터 변경 시 자동으로 호출되는 브라우저 기본 이벤트입니다.
- 하지만 addEventListener로 등록만 하고 제거하지 않을 경우, 컴포넌트가 언마운트된 뒤에도 리스너가 남아 계속 불필요한 호출과 상태 업데이트를 유발하게 됩니다.
- 이를 방지하기 위해 useEffect를 통해 컴포넌트가 마운트될 때만 이벤트를 등록하고, 클린업 함수를 통해 언마운트 시 이벤트를 제거하도록 처리하였습니다.

### 1-2. 리스트 렌더링 시 유니크 key값 부여

- **🚨 문제상황**

map을 사용하여 렌더링할 때, key값을 배열의 index로 지정했더니 불필요한 렌더링이 주기적으로 발생하는 문제가 발생했습니다.
특히 마우스 좌표 데이터를 공유하는 컴포넌트에서는 데이터가 자주 업데이트되기 때문에 전체 리스트가 재생성되어 렌더링 비용이 눈에 띄게 증가하였습니다.

React는 재조정 단계에서 key 값을 기준으로 요소의 업데이트 여부를 판단합니다.
하지만 `key={index}`를 사용할 경우, 배열이 변경될 때 React는 각 리스트 요소를 새로운 요소로 간주하고 전체를 재생성하는 것이 원인이였습니다.

- **✅ 해결방안**

key 값으로 배열의 index 대신 고유한 유니크한 값을 부여하여 각 요소마다 업데이트 여부를 명확히 구분할 수 있도록 수정하여 불필요한 렌더링 횟수를 줄였습니다.

</br>

## 2. 드로잉 on/off 버튼 클릭 시 canvas 크기가 임의로 변경되는 문제

- **🚨 문제상황**

발표자 페이지에서 드로잉 On/Off 버튼을 클릭할 때마다 `<canvas>` 태그의 width와 height **값이 의도치 않게 변화하는 현상**이 발생했습니다.
이로 인해 청중 페이지와의 드로잉 좌표 싱크가 맞지 않게 되어, **드로잉 위치가 어긋나는 문제가 발생**했습니다.

문제 원인을 추적하던 중, **발표자 또는 청중 페이지 중 하나를 외부 모니터로 이동할 경우**
이동한 페이지에서만 canvas 크기가 확대되는 현상을 발견했습니다.
이는 PDF의 CSS 속성 값은 그대로인 것처럼 보이지만, **실제 렌더링된 결과물의 크기는 변경**되고 있었던 것입니다.

라이브러리 내부의 렌더링 방식과 디바이스 디스플레이 간의 호환 이슈로 인해 발생한 문제로 보였습니다.
하지만 명확한 이유를 찾을 수 없었고, 라이브러리 교체는 기능상 리스크가 크다고 판단하여 다른 해결 방안을 모색하게 되었습니다.

- **✅ 해결방안**

기존에는 PDF 뷰어의 크기를 기준으로 canvas 크기를 맞추기 위해, useRef를 통해 PDF 요소에 접근한 후
해당 요소의 width, height값을 참조하고 있었습니다.

그러나 useRef는 재렌더링과 무관하게 DOM 객체를 계속 참조할 수 있는 특성을 갖고 있어,
참조 대상의 CSS 값이 임의로 변경되어도 이 값을 지속적으로 참조하고 있기 때문에 PDF 뷰어 크기와 canvas 크기가 상이했습니다.

이를 해결하기 위해, CSS 스타일 속성이 아닌 실제 브라우저 상의 렌더링 결과를 기반으로 크기를 계산해야 한다고 판단했습니다.
이에 따라 getBoundingClientRect() 메서드를 사용하여 PDF 뷰어 요소의 실제 렌더링된 너비와 높이를 가져오도록 수정했습니다.

</br>

# 회고록

개인 프로젝트를 진행하며 가장 많이 고민했던 것은 **"잘하는 개발자란 무엇일까?"** 라는 질문이었습니다.

기능 구현, 클린 코드, 이해하면서 작성하는 코드, 문제 해결 능력 등
어느 하나 중요하지 않은 역량은 없기에, 쉽게 결론을 내릴 수는 없었습니다.

그래서 프로젝트를 시작하며 두 가지 목표를 세웠습니다. </br>
**'초기에 기획한 기능을 모두 구현하기', 그리고 '구현한 코드를 온전히 이해하기'.** </br>
주관적인 기준이지만, 목표의 약 80%는 달성했다고 생각했고, 그 과정에서 작지만 분명한 성취감을 느꼈습니다.

하지만, 개발을 진행하면서 코드 품질, 상태 관리, 성능 최적화 등 여러 문제를 마주하게 되었습니다.
특히 이론적으로는 알고 있었지만, **작은 이벤트 리스너, 리스트 렌더링 시의 key 부여와 같은 요소들이 성능 저하의 주요 원인이 될 수 있다는 점**은,
사소해 보이는 요소라고 **가볍게 판단해서는 안된다는 사실을 깨닫게 해주었습니다.**
이러한 과정은 기술적인 성장뿐 아니라 **개발자로서의 태도도 함께 돌아보는 계기**가 되었습니다.

동시에, 문제를 하나씩 해결해 나가는 과정 속에서 **현재 나의 실력을 더 정확히 인식**할 수 있었고,
관련 개념들을 깊이 있게 학습하며 **점차 성장하고 있다는 확신**도 얻을 수 있었습니다.

이 경험을 통해, **"잘하는 개발자란 결국 끊임없이 잘해나가려는 사람"** 이라는 생각이 들었습니다. </br>
현재에 안주하지 않고, 부족한 부분을 인지하고 지속적으로 채워나가는 과정이야말로 개발을 잘하는 방법이라고 생각합니다.

이번 프로젝트를 통해 느낀 감정과 성장의 과정을 발판 삼아, 앞으로 어떤 상황에서도 유연하게 대응하고 성장해나가는 개발자가 되고 싶습니다.

</br>

# 개발자

이종석(jongsuk.dev@gmail.com)
