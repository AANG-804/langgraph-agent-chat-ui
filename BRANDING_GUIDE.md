# 브랜딩 변경 가이드 (Branding Update Guide)

이 문서는 프로젝트의 로고, 이름 등 브랜딩 요소를 변경해야 하는 파일과 위치를 설명합니다.
코드 내에 `[BRANDING]` 주석을 추가해 두었으니, 해당 키워드로 검색하면 쉽게 찾을 수 있습니다.

## 1. 앱 이름 및 텍스트 변경 (App Name & Text)

### 메타데이터 (브라우저 탭 이름 등)
- **파일**: `src/app/layout.tsx`
- **위치**: 14-15번째 줄 (`metadata` 객체)
- **변경 방법**: `title`과 `description` 값을 원하는 텍스트로 변경하세요.

### UI 헤더 및 푸터 텍스트
- **파일**: `src/components/thread/index.tsx`
- **위치**: 
  - 366-368번째 줄 (상단 헤더)
  - 441-443번째 줄 (채팅 시작 전 화면 타이틀)
- **변경 방법**: "Agent Chat" 텍스트를 원하는 서비스 이름으로 변경하세요.

### 설정 화면 타이틀
- **파일**: `src/providers/Stream.tsx`
- **위치**: 173-175번째 줄
- **변경 방법**: 설정 화면(URL 등 입력하는 곳)에 표시되는 "Agent Chat" 텍스트를 변경하세요.

### 프로젝트 정보
- **파일**: `package.json`
- **위치**: 2번째 줄 (`name`)
- **변경 방법**: 프로젝트 이름을 변경하세요. (선택 사항)

---

## 2. 로고 변경 (Logo Update)

기본 코드는 로고가 복잡한 SVG 경로(`path`)로 작성되어 있어 수정이 어렵습니다. 이를 관리하기 쉬운 **이미지 파일 불러오기 방식**으로 변경하는 과정을 안내해 드립니다.

### 1단계: 로고 이미지 준비
1. 사용하실 로고 이미지 파일(png, jpg, svg 등)을 준비해 주세요.
2. 이 파일을 프로젝트 최상단에 있는 `public` 폴더 안에 넣으세요.
   - 예시: `public/logo.png` (파일명은 자유롭게 정하셔도 되지만, 아래 코드와 일치시켜야 합니다.)

### 2단계: 로고 컴포넌트 코드 수정
`src/components/icons/langgraph.tsx` 파일을 열어 기존 내용을 지우고, 아래 코드로 완전히 교체하세요. 
이 코드는 복잡한 SVG를 그리는 대신, 1단계에서 준비한 이미지를 깔끔하게 불러와서 보여줍니다.

```tsx
import Image from "next/image";

export function LangGraphLogoSVG({
  className,
  width,
  height,
}: {
  width?: number;
  height?: number;
  className?: string;
}) {
  // [BRANDING] 로고 설정: public 폴더에 있는 이미지 파일을 불러옵니다.
  return (
    <div className={className} style={{ width: width || 32, height: height || 32, position: 'relative' }}>
      <Image
        src="/logo.png" // 1단계에서 저장한 파일명으로 수정하세요
        alt="Brand Logo" // 브랜드 이름에 맞춰 수정하세요 (예: "My Custom Logo")
        fill
        className="object-contain"
        sizes={`${width || 32}px`}
      />
    </div>
  );
}
```

### 3단계: 파비콘 (Favicon) 변경
브라우저 탭에 표시되는 작은 아이콘을 변경하는 방법입니다. Next.js의 최신 기능인 `icon.png` 방식을 사용하는 것이 편리합니다.

1. 기존에 있던 `src/app/favicon.ico` 파일을 **삭제**하세요.
2. 사용하실 파비콘 이미지를 `src/app` 폴더 안에 넣고, 이름을 `icon.png`로 변경하세요.
   - 이제 Next.js가 자동으로 이 파일을 파비콘으로 인식하고 적용합니다.


### 기타 로고 파일
- **파일**: `public/logo.svg`
- **설명**: 현재 코드에서는 직접적으로 사용되지 않는 것으로 보이나, 프로젝트 자산으로 포함되어 있습니다. 일관성을 위해 함께 교체하는 것을 권장합니다.
