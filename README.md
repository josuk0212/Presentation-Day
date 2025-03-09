## 목차

1. [Presentation Day](#presentation-day)
2. [개발동기](#개발동기)
3. [기능소개](#기능소개)
4. [기술스택](#기술스택)
5. [첼린지](#첼린지)
   - PDF파일 렌더링
   - 발표자 페이지와 청중 페이지 싱크 맞추기
6. [트러블슈팅](#트러블슈팅)
   - 최적화 문제
   - 드로잉 버튼 클릭 시 canvas 크기가 임의로 변경되는 문제
7. [기획자](#기획자)

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

발표자 페이지에서 마우스를 이동시키면, 청중 페이지에서는 마치 레이저 포인터처럼 커서 포인터가 실시간으로 따라가도록 구현하고자 하였습니다. 이 기능은 발표자가 발표 중에 마우스를 이동할 때, 청중들이 발표자의 마우스 위치를 직관적으로 확인할 수 있게 만들어주는 중요한 기능 중 하나였습니다.

**실시간 동기화는 어떻게 할까?**

마우스 좌표값을 공유해야 한다고 생각하여 먼저 broadcast message API로 시도를 했지만, 마우스 이동의 특성 상 짧은 시간 안에 많은 좌표값이 전달되다 보니 이 많은 데이터를 즉시 실시간으로 처리하고 전송하는 데 있어 많은 어려움이 있었습니다. 앞선 방법으로는 흡사 무한 렌더링처럼 좌표값을 과도하게 처리하다보니 웹의 성능저하를 피할 수 없었습니다.

**- localStorage**

상기 문제를 해결하기 위해, 좌표값을 덮어쓰는 방식인 localStorage를 채용하게 되었습니다. 각 좌표값이 변경될 때마다 새로 받은 좌표값으로 이전 값을 덮어쓰는 방식으로 데이터를 처리하고, 실시간 데이터 변경을 감지할 수 있는 "Storage"이벤트를 사용하여 실시간 동기화를 구현했습니다.

이렇게 하면, 과거의 좌표값이 계속 쌓이는 것이 아니라, 항상 최신의 좌표값만이 저장되어 있기 때문에 용량이 5MB밖에 되지 않는 localStorage의 데이터 용량에 큰 문제가 없을 것으로 판단했습니다. 또한, 클라이언트 간의 상태 변화가 적절하게 반영될 수 있도록 해주며, 네트워크나 렌더링 성능을 크게 저하시키지 않도록 도와주었습니다.

**해상도 차이에 따른 싱크는 어떻게 맞춰야 할까?**

양 페이지 간 마우스 실시간 동기화는 이루어졌지만, 발표자 페이지의 마우스 좌표값이 기준이 되기 때문에, 청중 페이지에서는 전체화면을 이용하기 때문에 해상도, 레이아웃 등의 차이로 청중 페이지 내에서는 원하는 지점에 마우스 커서 포인터가 위치해 있지 않았습니다.

`screenXY`: 모니터 기준 좌표값

`clientXY`: 브라우저 기준 좌표값

`pageXY`: 스크롤을 포함한 페이지 기준 좌표값

`offsetXY`: 특정 요소 기준 좌표값

`getBoundingClientRect()`: 브라우저 내 특정 요소가 위치한 왼쪽 상단 위 좌표값

본인은 각기 다른 좌표값을 알려주는 방법들을 조합하여 조건에 맞는 식을 찾으려고 했습니다.

그 결과, `offsetXY` \* 양 페이지 간 배율 차이 + `getBoundingClientRect()`의 식을 세워 해결하였습니다.

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

- **2-3. 드로잉 기능 실시간 동기화**

발표자가 드로잉 기능을 이용 할 때, 청중 페이지에서도 해당 드로잉이 실시간으로 보이도록 구현하고자 했습니다. 이를 위해 마우스 좌표를 실시간으로 공유하고, 양 페이지 간에 상태를 동기화하는 방법을 사용했습니다.

1. 마우스 이벤트를 통한 드로잉 기능 구현

사용자가 마우스를 클릭하고 드래그하면, 드로잉이 시작되고, 마우스가 이동할 때마다 좌표를 업데이트합니다. 이를 위해 onMouseDown, onMouseMove, onMouseUp, onMouseLeave 이벤트를 사용하여 드로잉 기능을 구현했습니다.

2. 드로잉 좌표값 배열에 저장 후 localStorage에 실시간 전송

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

## 트러블슈팅

### 1. 최적화 문제

- 문제상황: 웹사이트 메모리 사용량이 1GB가 넘어가는 상황이였으며, 실시간 동기화가 잦은 마우스 좌표값의 문제라고 판단했습니다.

- 해결방안

**1-1. storage event useEffect사용**

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

**1-2. Map 사용시 키값으로 index가 아닌 유니크한 키값 부여**

→ 키 값으로 index 이용 시 리액트는 데이터가 변경되었는지 알 수 없어 매번 배열을 재생성하기 때문에 불필요한 렌더링이 일어나고 있었습니다.

### 2. 드로잉 버튼 클릭 시 canvas 크기가 임의로 변경되는 문제

- 문제상황

드로잉 버튼 클릭 시 발표자 페이지에서만 Canvas 태그의 Width, Height 값이 2배로 증가하는 오류가 발견되었습니다. 이로 인해 양 페이지 간 싱크가 맞지 않아서 드로잉 기능의 싱크가 맞지 않게 되었고, 원인을 찾던 중 양 페이지 중 하나를 다른 모니터로 이동 시, 이동한 페이지만 pdf크기가 증가하는 것을 발견했습니다.

pdf 크기에 대한 CSS 속성 값은 변화했으나, 실제 렌더링되고 있는 크기는 변화하지 않는 것이였습니다. 정확한 원인은 라이브러리 문제라고 판단되었으나, 해당 문제로 인해 라이브러리를 변경하는 것은 섣부른 판단이라고 생각하여 다른 방법을 모색하였습니다.

- 해결방안

Canvas의 크기를 pdf파일의 크기에 맞춰 생성하기 위해 useRef를 이용하여 pdf파일 엘리먼트에 접근하여 Width, height 값을 가져오고 있었습니다.
useRef는 재렌더링 되지 않아도, 변화하는 데이터는 계속 참조를 하고 있으며, CSS 속성을 기준으로 값을 반환하기에 다른 방법이 필요했습니다.

이에 CSS 속성값이 아닌 실제 브라우저 렌더링 된 엘리컨트의 Width, height 값을 제공해주는 getBoundingClientRect() 메소드를 사용하여 이를 해결하였습니다.

## 기획자

이종석(josuk0212@gmail.com)
