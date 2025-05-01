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
  * [2. 사용자 로컬 PDF파일 처리 방식](#2-%EC%82%AC%EC%9A%A9%EC%9E%90-%EB%A1%9C%EC%BB%AC-pdf%ED%8C%8C%EC%9D%BC-%EC%B2%98%EB%A6%AC-%EB%B0%A9%EC%8B%9D)
    + [2-1. input 태그 타입 속성 file 이용하여 사용자가 원하는 PDF파일 업로드](#2-1-input-%ED%83%9C%EA%B7%B8-%ED%83%80%EC%9E%85-%EC%86%8D%EC%84%B1-file-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EC%82%AC%EC%9A%A9%EC%9E%90%EA%B0%80-%EC%9B%90%ED%95%98%EB%8A%94-pdf%ED%8C%8C%EC%9D%BC-%EC%97%85%EB%A1%9C%EB%93%9C)
    + [2-2. createObjectURL을 이용하여 PDF파일 렌더링을 위한 URL처리](#2-2-createobjecturl%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-pdf%ED%8C%8C%EC%9D%BC-%EB%A0%8C%EB%8D%94%EB%A7%81%EC%9D%84-%EC%9C%84%ED%95%9C-url%EC%B2%98%EB%A6%AC)
  * [3. 청중 페이지와 발표자 페이지 간 실시간 동기화](#3-%EC%B2%AD%EC%A4%91-%ED%8E%98%EC%9D%B4%EC%A7%80%EC%99%80-%EB%B0%9C%ED%91%9C%EC%9E%90-%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B0%84-%EC%8B%A4%EC%8B%9C%EA%B0%84-%EB%8F%99%EA%B8%B0%ED%99%94)
    + [3-1. 청중-발표자 화면 싱크를 위한 상태 동기화](#3-1-%EC%B2%AD%EC%A4%91-%EB%B0%9C%ED%91%9C%EC%9E%90-%ED%99%94%EB%A9%B4-%EC%8B%B1%ED%81%AC%EB%A5%BC-%EC%9C%84%ED%95%9C-%EC%83%81%ED%83%9C-%EB%8F%99%EA%B8%B0%ED%99%94)
    + [3-2. 청중 페이지에서 발표자의 마우스 움직임을 실시간으로 시각화하기 위한 마우스 포인터 구현](#3-2-%EC%B2%AD%EC%A4%91-%ED%8E%98%EC%9D%B4%EC%A7%80%EC%97%90%EC%84%9C-%EB%B0%9C%ED%91%9C%EC%9E%90%EC%9D%98-%EB%A7%88%EC%9A%B0%EC%8A%A4-%EC%9B%80%EC%A7%81%EC%9E%84%EC%9D%84-%EC%8B%A4%EC%8B%9C%EA%B0%84%EC%9C%BC%EB%A1%9C-%EC%8B%9C%EA%B0%81%ED%99%94%ED%95%98%EA%B8%B0-%EC%9C%84%ED%95%9C-%EB%A7%88%EC%9A%B0%EC%8A%A4-%ED%8F%AC%EC%9D%B8%ED%84%B0-%EA%B5%AC%ED%98%84)
    + [3-3. 발표 콘텐츠의 명확한 전달을 위한 실시간 드로잉 동기화 기능 구현](#3-3-%EB%B0%9C%ED%91%9C-%EC%BD%98%ED%85%90%EC%B8%A0%EC%9D%98-%EB%AA%85%ED%99%95%ED%95%9C-%EC%A0%84%EB%8B%AC%EC%9D%84-%EC%9C%84%ED%95%9C-%EC%8B%A4%EC%8B%9C%EA%B0%84-%EB%93%9C%EB%A1%9C%EC%9E%89-%EB%8F%99%EA%B8%B0%ED%99%94-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84)
      - [3-3-1. 마우스 이벤트를 통한 드로잉 기능 구현](#3-3-1-%EB%A7%88%EC%9A%B0%EC%8A%A4-%EC%9D%B4%EB%B2%A4%ED%8A%B8%EB%A5%BC-%ED%86%B5%ED%95%9C-%EB%93%9C%EB%A1%9C%EC%9E%89-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84)
      - [3-3-2. 드로잉 좌표값 배열에 저장 후 localStorage에 실시간 전송](#3-3-2-%EB%93%9C%EB%A1%9C%EC%9E%89-%EC%A2%8C%ED%91%9C%EA%B0%92-%EB%B0%B0%EC%97%B4%EC%97%90-%EC%A0%80%EC%9E%A5-%ED%9B%84-localstorage%EC%97%90-%EC%8B%A4%EC%8B%9C%EA%B0%84-%EC%A0%84%EC%86%A1)
- [트러블슈팅](#%ED%8A%B8%EB%9F%AC%EB%B8%94%EC%8A%88%ED%8C%85)
  * [1. 최적화 문제: 메모리 누수](#1-%EC%B5%9C%EC%A0%81%ED%99%94-%EB%AC%B8%EC%A0%9C-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EB%88%84%EC%88%98)
    + [1-1. storage event useEffect사용](#1-1-storage-event-useeffect%EC%82%AC%EC%9A%A9)
    + [1-2. Map 사용시 키 값으로 index가 아닌 유니크한 키 값 부여](#1-2-map-%EC%82%AC%EC%9A%A9%EC%8B%9C-%ED%82%A4-%EA%B0%92%EC%9C%BC%EB%A1%9C-index%EA%B0%80-%EC%95%84%EB%8B%8C-%EC%9C%A0%EB%8B%88%ED%81%AC%ED%95%9C-%ED%82%A4-%EA%B0%92-%EB%B6%80%EC%97%AC)
  * [2. 드로잉 on/off 버튼 클릭 시 canvas 크기가 임의로 변경되는 문제](#2-%EB%93%9C%EB%A1%9C%EC%9E%89-onoff-%EB%B2%84%ED%8A%BC-%ED%81%B4%EB%A6%AD-%EC%8B%9C-canvas-%ED%81%AC%EA%B8%B0%EA%B0%80-%EC%9E%84%EC%9D%98%EB%A1%9C-%EB%B3%80%EA%B2%BD%EB%90%98%EB%8A%94-%EB%AC%B8%EC%A0%9C)
- [회고록](#%ED%9A%8C%EA%B3%A0%EB%A1%9D)
- [개발자](#%EA%B0%9C%EB%B0%9C%EC%9E%90)

<!-- tocstop -->

# Presentation Day

"Presentation Day"는 PDF 파일을 업로드하여 마치 파워포인트의 발표자 모드처럼 활용할 수 있는 웹 서비스입니다. 사용자는 PDF파일을 PPT파일로 변환할 필요없이 손쉽게 발표 자료를 준비할 수 있습니다.

특히 발표자 모드로 전환하면, 청중에게 보이는 화면과 발표자 전용 화면이 분리되어 각각 다른 정보를 보여줄 수 있습니다.
청중은 발표 슬라이드만을 집중해서 볼 수 있으며, 발표자는 자신의 화면에서 발표 노트(대본), 발표 타이머, 다음 슬라이드 미리보기 등 다양한 도구를 활용해 발표를 더욱 체계적으로 진행할 수 있습니다.

이러한 기능은 발표자가 시간 관리에 집중하고, 사전에 작성한 스크립트를 참고하면서 긴장감 없이 자연스럽게 발표할 수 있도록 도와줍니다.

# 개발동기

PowerPoint, Canva 등 다양한 발표 도구들이 발표자 모드를 지원하고 있지만, 대부분은 PPT 또는 PPTX 형식의 파일만 업로드할 수 있도록 제한되어 있습니다. 이로 인해 PDF 파일을 중심으로 발표 자료를 준비하는 사용자들에게는 제한적인 환경이 될 수밖에 없습니다.

과거에 PDF를 활용한 발표 경험이 많았고, 발표자 모드의 필요성을 느낄 때마다 PDF를 PPTX로 변환하여 사용하곤 했습니다. 하지만 이 과정에서 글꼴이 깨지거나, 이미지가 누락되는 등 콘텐츠 손상이 발생하는 문제를 자주 겪었습니다. 파일 호환성 이슈로 인해 발표 직전까지 수정을 반복해야 했고, 이는 발표의 완성도와 집중도에 큰 영향을 주었습니다.

이러한 불편을 겪으며 "왜 PDF 기반의 발표자 모드는 없을까?"라는 의문이 생겼고, 그 고민이 바로 이 프로젝트의 출발점이 되었습니다. 실질적인 발표 환경에서 느낀 불편함과 필요를 기반으로, PDF 파일만으로도 안정적이고 완성도 높은 발표를 진행할 수 있는 플랫폼을 만들고자 Presentation Day가 기획되었습니다.

# 기능소개

| 이미지                                                                                     | 설명                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Image1](https://github.com/user-attachments/assets/7ba13cdc-5854-48d4-b310-49b978879827) | - 사용자는 "파일 선택" 버튼을 클릭하여 원하는 PDF 파일을 업로드하고, 파일 내용을 미리 확인할 수 있습니다. </br></br> - 업로드된 파일은 화살표 클릭, 마우스 클릭, 방향키 조작을 통해 각 페이지를 확인할 수 있습니다. </br></br> - "Go to Presentation!" 버튼을 클릭하면 발표자 페이지가 새 탭에서 열리며, 청중 페이지는 발표에 사용할 디바이스로 이동 후 사용할 수 있습니다. |
| ![Image2](https://github.com/user-attachments/assets/10e73e83-1d91-4695-8a7d-46c804e959d3) | **발표자 페이지** </br></br> - 화면 중앙에 위치한 PDF 페이지만 청중 페이지에 노출됩니다. (이 영역을 ‘뷰어 섹션’이라 칭합니다.) </br></br> - 뷰어 섹션에 마우스를 이동하면, 청중의 집중을 돕기 위해 청중 페이지에서도 마우스 포인터가 동일하게 이동합니다. </br></br> - 펜 및 지우개 버튼을 사용하여 뷰어 섹션 내에서 드로잉을 추가하거나 삭제할 수 있는 기능을 제공합니다.  |
| ![Image3](https://github.com/user-attachments/assets/84ccdb30-bef1-4866-ae19-ba9279f02d1a) | **발표자 페이지** </br></br> - 화면 왼쪽 상단에는 타이머 기능이 제공되며, Pause 및 Reset 버튼을 통해 일시정지와 초기화가 가능합니다. </br></br> - 각 PDF 페이지에는 메모 기능이 제공되어, 발표자가 필요한 정보를 잊지 않고 전달할 수 있도록 도와줍니다.                                                                                                                     |

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

- **1-1. 라이브러리를 채택한 이유 - react-pdf**

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

- **1-2. 시도했으나 적합하지 않았던 방법들**

**1-2-1. `<embed>`,`<iframe>`, `<object>` 태그 사용 - 제한적인 뷰어 구성**

HTML 기본 태그를 사용해 PDF를 삽입하는 방식도 고려했지만, 이 방식은 브라우저에 내장된 기본 뷰어를 호출하기 때문에 자유로운 커스터마이징이 불가능했습니다.
기본으로 내장되어 있는 기능(페이지 탐색, 인쇄, 다운로드 등)은 고정되어 있으며, 수정 및 확장도 불가능하여 원하는 형태의 뷰어를 구현할 수 없었습니다.

<img width="700" alt="Image" src="https://github.com/user-attachments/assets/9be7f684-0eba-472d-9c30-218cc081aeb1" />

- **1-2-2. window.write() method 사용 - 웹 표준 비권장 방법**

window.document.write()를 활용해 PDF를 표시하는 방식도 있었으나, [MDN 공식 문서](https://developer.mozilla.org/en-US/docs/Web/API/Document/write)에 따르면 본 메서드는 현재 웹 표준에서 사용이 권장되지 않으며, 일부 브라우저에서는 지원을 종료할 예정입니다.
따라서, 보안 및 유지보수 측면에서도 부적절하다고 판단하여 해당 방식은 사용하지 않았습니다.

- **1-4. PDF viewer 직접 구현 - 시간 제약**

PDF를 직접 구문 분석하고 페이지별로 렌더링하는 뷰어를 직접 구현하는 방안도 잠시 고려했습니다.
하지만 PDF 포맷은 매우 복잡하고 방대한 스펙을 가지며, 이를 정확하게 해석하고 표현하려면 수많은 렌더링 로직과 수동 처리 과정이 필요합니다.

프로젝트 일정을 고려할 때, 제한된 기간 내 구현하기에는 현실적인 부담이 크다고 판단하여 해당 방안은 제외했습니다.

</br>

## 2. 사용자 로컬 PDF파일 처리 방식

### 2-1. input 태그 타입 속성 file 이용하여 사용자가 원하는 PDF파일 업로드

input 태그의 타입 속성인 file을 이용하여, 사용자가 원하는 파일을 업로드 할 수 있도록 했습니다.

### 2-2. createObjectURL을 이용하여 PDF파일 렌더링을 위한 URL처리

- **createObjectURL vs readAsDataURL(속도 및 메모리 사용량 최우선 고려)**

![Image](https://github.com/user-attachments/assets/a94742ab-5d8f-4a06-8474-e26b99b6aa2b)

PDF파일을 웹사이트에 렌더링하기 위해선 사용자가 선택한 파일의 고유한 URL을 React-pdf 라이브러리에서 제공하는 컴포넌트에 prop으로 전달해야 했습니다.

파일을 URL처리하기 위해 createObjectURL, readAsDataURL 2가지 방법이 있었습니다. 앞선 두가지 방법 중 데이터의 크기 및 속도에 중점을 두고 채용을 고려했습니다.

`속도 측면`: createObjectURL은 브라우저의 내부 메모리에 파일을 저장하고 URL을 생성하기 때문에, 대용량 파일을 다룰 때 유용할 수 있으며  파일을 미리 다운로드하여 로드할 수 있으므로 초기 로딩 시간을 최적화할 수 있기 때문에 상대적으로 빠른 속도를 기대해 볼 수 있었습니다. 반면에 readAsDataURL은 비동기적으로 동작하고, base64로 인코딩 하는 데 시간이 다소 필요하기 때문에 채택하지 않았습니다.

`메모리 사용량 측면`: createObjectURL은 다양한 길이를 가진 데이터를 고정된 길이를 가진 데이터로 매핑한 url을 제공하고, 파일에 간접적으로 접근하기 위한 포인터를 사용하기 때문에 훨씬 간결한 url을 제공합니다. 반면에 readAsDataURL 사용 시, 파일의 전체 내용을 문자열로 인코딩하여 제공하므로 파일 크기가 큰 경우에는 메모리 부담이 있을 수 있다고 판단하여 createObjectURL을 채택하게 되었습니다.

- **실제 URL 비교**

| createObjectURL                                                                                                       | readAsDataURL                                                                             |
| --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| <img width="484" alt="Image" src="https://github.com/user-attachments/assets/aa05457e-5933-4cf6-bc48-cf860ede514c" /> | ![Image](https://github.com/user-attachments/assets/8035c1b7-b710-4a8f-ac95-f7145d9013ef) |

## 3. 청중 페이지와 발표자 페이지 간 실시간 동기화

발표자 페이지에서 페이지 이동, 마우스 이동, 드로잉 등의 기능 사용 시 청중 페이지에서도 실시간으로 동일하게 작동이 되게 구현하고자 했습니다.

### 3-1. 청중-발표자 화면 싱크를 위한 상태 동기화

→ `broadcast message API`, `localStorage` 사용

양 페이지 간 실시간 동기화가 이루어지려면 데이터 이동이 즉각적으로 이루어져야 하기에, 외부 저장소를 이용하거나 페이지 간의 통신을 도와주는 API를 이용하여 구현하였습니다.

`broadcast message API` : 실시간으로 양방향 통신이 가능하며, 채널을 생성하고 동기화하고자 하는 상태를 메시지로 보내면, 어느 컴포넌트든 그 채널을 구독하기만 하면 동기화가 가능하여 필요시마다 매 번 데이터를 전달하지 않아도 되는 장점이 있습니다. 프로젝트 특성 상 많은 상태들이 여러 컴포넌트에서 동기화가 필요하기 때문에 채용하게 되었습니다.

`localStorage` : 새로고침 없이 실시간 동기화가 가능하고, 데이터 크기가 크지 않은 경우 서버에 요청하는 것보다 속도가 빠르다는 특징이 있습니다. 더하여 "storage"이벤트로 실시간 데이터 변화를 감지할 수 있어 원하는 시기에 동기화가 가능하여 채용하게 되었습니다.

**이 외 고려한 방법**

`window.postMessage` : 1회성 통신으로 잦은 데이터 이동이 있을 시 지연이 발생하며, 주로 origin이 다를 때 사용하는 API로 broadcast message API보다 효율성이 낮다고 판단하여 채용하지 않았습니다.

`Websocket` : 실시간 동기화 방법으로 가장 빠르고 효과적이지만 서버 구축이 필요했습니다. 프론트엔드만으로 구현을 해내고 싶었고, 한계를 파악해보고 싶어 채용을 보류하였습니다. 프로젝트가 확장 됨에 따라 성능이 지속적으로 저하된다면 도입해보고 싶은 부분입니다.

### 3-2. 청중 페이지에서 발표자의 마우스 움직임을 실시간으로 시각화하기 위한 마우스 포인터 구현

발표자 페이지에서 마우스를 이동시키면, 청중 페이지에서는 마치 레이저 포인터처럼 커서 포인터가 실시간으로 따라가도록 구현하고자 하였습니다. 이 기능은 발표자가 발표 중에 마우스를 이동할 때, 청중들이 발표자의 마우스 위치를 직관적으로 확인할 수 있게 만들어주는 중요한 기능 중 하나였습니다.

- **실시간 동기화는 어떻게 할까?**

마우스 좌표값을 공유해야 한다고 생각하여 먼저 broadcast message API로 시도를 했지만, 마우스 이동의 특성 상 짧은 시간 안에 많은 좌표값이 전달되다 보니 이 많은 데이터를 즉시 실시간으로 처리하고 전송하는 데 있어 많은 어려움이 있었습니다. 앞선 방법으로는 흡사 무한 렌더링처럼 좌표값을 과도하게 처리하다보니 웹의 성능저하를 피할 수 없었습니다.

- **localStorage**

상기 문제를 해결하기 위해, 좌표값을 덮어쓰는 방식인 localStorage를 채용하게 되었습니다. 각 좌표값이 변경될 때마다 새로 받은 좌표값으로 이전 값을 덮어쓰는 방식으로 데이터를 처리하고, 실시간 데이터 변경을 감지할 수 있는 "Storage"이벤트를 사용하여 실시간 동기화를 구현했습니다.

이렇게 하면, 과거의 좌표값이 계속 쌓이는 것이 아니라, 항상 최신의 좌표값만이 저장되어 있기 때문에 용량이 5MB밖에 되지 않는 localStorage의 데이터 용량에 큰 문제가 없을 것으로 판단했습니다. 또한, 클라이언트 간의 상태 변화가 적절하게 반영될 수 있도록 해주며, 네트워크나 렌더링 성능을 크게 저하시키지 않도록 도와주었습니다.

- **해상도 차이에 따른 싱크는 어떻게 맞춰야 할까?**

양 페이지 간 마우스 실시간 동기화는 이루어졌지만, 발표자 페이지의 마우스 좌표값이 기준이 되기 때문에, 청중 페이지에서는 전체화면을 이용하기 때문에 해상도, 레이아웃 등의 차이로 청중 페이지 내에서는 원하는 지점에 마우스 커서 포인터가 위치해 있지 않았습니다.

![Image](https://github.com/user-attachments/assets/cfb25ba1-bd81-452b-a29b-3684cb1e2509)

> `screenXY`: 모니터 기준 좌표값

> `clientXY`: 브라우저 기준 좌표값

> `pageXY`: 스크롤을 포함한 페이지 기준 좌표값

> `offsetXY`: 특정 요소 기준 좌표값

> `getBoundingClientRect()`: 브라우저 내 특정 요소가 위치한 왼쪽 상단 위 좌표값

본인은 각기 다른 좌표값을 알려주는 방법들을 조합하여 조건에 맞는 식을 찾으려고 했습니다.

그 결과, `offsetXY \* 양 페이지 간 배율 차이 + getBoundingClientRect()의 값`의 식을 세워 해결하였습니다.

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

### 3-3. 발표 콘텐츠의 명확한 전달을 위한 실시간 드로잉 동기화 기능 구현

발표자가 드로잉 기능을 이용 할 때, 청중 페이지에서도 해당 드로잉이 실시간으로 보이도록 구현하고자 했습니다. 이를 위해 마우스 좌표를 실시간으로 공유하고, 양 페이지 간에 상태를 동기화하는 방법을 사용했습니다.

#### 3-3-1. 마우스 이벤트를 통한 드로잉 기능 구현

사용자가 마우스를 클릭하고 드래그하면, 드로잉이 시작되고, 마우스가 이동할 때마다 좌표를 업데이트합니다. 이를 위해 onMouseDown, onMouseMove, onMouseUp, onMouseLeave 이벤트를 사용하여 드로잉 기능을 구현했습니다.

#### 3-3-2. 드로잉 좌표값 배열에 저장 후 localStorage에 실시간 전송

Canvas에 그려진 그림은 결국 좌표를 이용한 것이기 때문에, 드로잉을 하고 있는 좌표를 실시간으로 배열에 저장한 후, 해당 배열을 localStorage에 실시간으로 전송하고 받아오는 방식으로 드로잉 실시간 동기화를 구현하였습니다.

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

# 트러블슈팅

## 1. 최적화 문제: 메모리 누수

- **문제상황**

웹사이트 메모리 사용량이 1GB가 넘어가는 상황이였으며, 실시간 동기화가 잦은 마우스 좌표값의 문제라고 판단했습니다.

<img width="300" alt="Image" src="https://github.com/user-attachments/assets/ba845c28-46a8-4496-b46a-50856a6ec623" />

- **해결방안**

### 1-1. storage event useEffect사용

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

- localstorage 이벤트 함수는 localstorage의 데이터가 변경될 시 콜백함수를 실행합니다.
- 데이터가 변경되는 시점을 알아야하기 때문에 함수는 상시 localstorage를 주시할 수 밖에 없어 이에 따른 메모리 누수가 일어나고 있었습니다.
- 이를 방지하기 위해 useEffect를 사용해서 외부 storage와 동기화를 하여 필요 시에만 실행되고, 클린업 함수를 통해 컴포넌트가 언마운트되면 이벤트를 삭제해주어 메모리 누수를 완화하였습니다.

### 1-2. Map 사용시 키 값으로 index가 아닌 유니크한 키 값 부여

→ 키 값으로 index 이용 시 리액트는 데이터가 변경되었는지 알 수 없어 매번 배열을 재생성하기 때문에 불필요한 렌더링이 일어나고 있었습니다.

## 2. 드로잉 on/off 버튼 클릭 시 canvas 크기가 임의로 변경되는 문제

- **문제상황**

드로잉 버튼 클릭 시 발표자 페이지에서만 Canvas 태그의 Width, Height 값이 2배로 증가하는 오류가 발견되었습니다. 이로 인해 양 페이지 간 싱크가 맞지 않아서 드로잉 기능의 싱크가 맞지 않게 되었고, 원인을 찾던 중 양 페이지 중 하나를 다른 모니터로 이동 시, 이동한 페이지만 pdf크기가 증가하는 것을 발견했습니다.

pdf 크기에 대한 CSS 속성 값은 변화했으나, 실제 렌더링되고 있는 크기는 변화하지 않는 것이였습니다. 정확한 원인은 라이브러리 문제라고 판단되었으나, 해당 문제로 인해 라이브러리를 변경하는 것은 섣부른 판단이라고 생각하여 다른 방법을 모색하였습니다.

- **해결방안**

Canvas의 크기를 pdf파일의 크기에 맞춰 생성하기 위해 useRef를 이용하여 pdf파일 엘리먼트에 접근하여 Width, height 값을 가져오고 있었습니다.
useRef는 재렌더링 되지 않아도, 변화하는 데이터는 계속 참조를 하고 있으며, CSS 속성을 기준으로 값을 반환하기에 다른 방법이 필요했습니다.

이에 CSS 속성값이 아닌 실제 브라우저 렌더링 된 엘리컨트의 Width, height 값을 제공해주는 getBoundingClientRect() 메소드를 사용하여 이를 해결하였습니다.

# 회고록

개인 프로젝트를 진행하며 가장 많이 고민했던 것은 **"잘하는 개발자란 무엇일까?"** 라는 질문이었습니다. </br>
기능 구현? 클린 코드? 이해하면서 작성하는 코드? 문제 해결 능력?
어느 하나 중요하지 않은 요소가 없기에, 쉽게 결론을 내릴 수는 없었습니다.

그래서 저는 ‘초기에 기획한 기능을 모두 구현하기’, ‘구현한 코드를 온전히 이해하기’ 이 두 가지를 목표로 설정하고 프로젝트를 시작했습니다. </br>
주관적인 평가이긴 하지만, 목표의 약 80%를 달성했다고 판단했고, 그 과정에서 작지만 뿌듯한 성취감을 느꼈습니다.

하지만 동시에, 코드의 퀄리티, 상태 관리, 성능 최적화 등 여러 문제를 마주하며 현재 제 실력을 체감할 수 있었습니다. </br>
이후 관련 개념을 공부하고 문제를 하나씩 해결해 나가며, 미약하지만 점차 성장하고 있다는 것을 느꼈습니다.

이 경험을 통해, **'잘하는 개발자'란 결국 끊임없이 잘해나가려는 사람**이라는 생각이 들었습니다. </br>
현재에 안주하지 않고, 부족한 부분을 인지하고 지속적으로 채워나가는 과정이야말로 개발을 잘하는 방법이라고 생각합니다.

이번 프로젝트를 통해 느낀 감정과 성장의 과정을 발판 삼아, 앞으로 어떤 상황에서도 유연하게 대응하고 성장해나가는 개발자가 되고 싶습니다.

# 개발자

이종석(josuk0212@gmail.com)
