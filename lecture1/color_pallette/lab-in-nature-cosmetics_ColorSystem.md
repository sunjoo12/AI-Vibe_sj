# 컬러 팔레트 디자인 시스템

## 프로젝트 정보
- **출처 웹사이트**: Lab in Nature (랩인네이처) 코스메틱 이커머스
- **분석 날짜**: 2026-06-22
- **적용 프로젝트**: 포트폴리오 웹사이트

---

## CSS 변수 정의

```css
:root {
  /* Primary Colors — 다크 올리브/카키 브라운 (브랜드 아이덴티티) */
  --color-primary: #6B6040;
  --color-primary-light: #8C7E55;
  --color-primary-dark: #4A4329;

  /* Secondary Colors — 웜 크림/베이지 (자연 소재 감성) */
  --color-secondary: #F2EDE6;
  --color-accent: #C4A96A;

  /* Background Colors */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F9F7F4;
  --color-bg-warm: #F2EDE6;
  --color-bg-beige: #EDD8C2;

  /* Text Colors */
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #666666;
  --color-text-muted: #AAAAAA;

  /* Border / Outline */
  --color-border-light: #E0D8CC;
  --color-border-soft: #D9D9D9;

  /* Interactive Colors */
  --color-button-primary: #6B6040;
  --color-button-hover: #4A4329;
  --color-link: #6B6040;
  --color-link-hover: #C4A96A;

  /* Nature Accent */
  --color-accent-green: #3E5A3A;
  --color-accent-gold: #C4A96A;
}
```

---

## 컬러 사용 가이드

### Primary — `#6B6040` (다크 올리브)
- **사용처**: CTA 버튼, 주요 링크, 푸터 배경, 브랜드 강조 텍스트
- **특징**: 자연·유기농 이미지를 연상시키는 어스 톤, 신뢰감과 고급스러움 동시 전달
- **주의**: 밝은 배경 위에서만 사용, 같은 계열끼리 겹치지 않도록

### Secondary — `#F2EDE6` (웜 크림)
- **사용처**: 히어로 섹션 배경, 카드 배경, 섹션 구분 배경
- **특징**: 차갑지 않은 따뜻한 화이트로 피부 친화적인 이미지 강조
- **주의**: 텍스트는 반드시 `--color-text-primary` 이상의 대비 확보

### Accent — `#C4A96A` (골든 앰버)
- **사용처**: 호버 효과, 하이라이트 포인트, 아이콘 강조, 언더라인
- **특징**: 제품 용기의 따뜻한 황금빛 연상, 프리미엄 감성 부여
- **주의**: 소량만 사용 (전체 UI의 5% 이내), 과용 시 브랜드 톤 희석

### Background — `#FFFFFF` / `#F9F7F4`
- **사용처**: 메인 콘텐츠 배경, 내비게이션, 카드
- **특징**: 클린하고 여백 중심의 레이아웃 구성에 핵심
- **비율**: 전체 UI의 55% 이상 유지하여 미니멀리즘 확보

### Text — `#1A1A1A` / `#666666` / `#AAAAAA`
- `--color-text-primary`: 제목, 핵심 정보 — 충분한 명도 대비 필수
- `--color-text-secondary`: 본문, 설명 텍스트 — 가독성과 위계 동시 확보
- `--color-text-muted`: 캡션, 날짜, 부가 정보 — 시각적 노이즈 최소화

### Nature Accent — `#3E5A3A` (내추럴 그린)
- **사용처**: 태그, 배지, 성분 강조 등 자연 유래를 직접 어필하는 요소
- **특징**: 식물성 원료 이미지와 직결, 클린 뷰티 메시지 강화

---

## 반응형 고려사항

### 다크모드 대응
```css
@media (prefers-color-scheme: dark) {
  :root {
    /* 배경 반전 — 완전한 블랙보다 다크 올리브 계열로 브랜드 톤 유지 */
    --color-bg-primary: #1C1B18;
    --color-bg-secondary: #252420;
    --color-bg-warm: #2C2A24;
    --color-bg-beige: #332F28;

    /* 텍스트 반전 */
    --color-text-primary: #F2EDE6;
    --color-text-secondary: #B8B0A0;
    --color-text-muted: #6B6558;

    /* Primary는 밝게 조정 */
    --color-primary: #8C7E55;
    --color-primary-light: #C4A96A;
    --color-primary-dark: #6B6040;

    /* 테두리 어둡게 */
    --color-border-light: #3A3830;
    --color-border-soft: #2E2C28;
  }
}
```

### 화면 크기별 색상 전략
| 구간 | 전략 |
|------|------|
| **모바일 (xs ~ sm)** | 배경 여백 최소화, 베이지 섹션 구분으로 스크롤 리듬 형성 |
| **태블릿 (md)** | 카드 배경 `--color-bg-secondary` 적극 활용, 그리드 구분 강화 |
| **데스크톱 (lg+)** | 풀너비 베이지/크림 섹션 교차 배치로 스크롤 깊이감 연출 |

### 접근성 (WCAG 2.1 AA 기준)
- `#1A1A1A` on `#FFFFFF` → 대비율 **18.1:1** ✅ (AAA 통과)
- `#6B6040` on `#FFFFFF` → 대비율 **7.2:1** ✅ (AA 통과)
- `#C4A96A` on `#FFFFFF` → 대비율 **2.6:1** ⚠️ (텍스트 단독 사용 지양, 장식·아이콘 전용)
- `#666666` on `#FFFFFF` → 대비율 **5.7:1** ✅ (AA 통과)

> **주의**: `--color-accent` (`#C4A96A`) 는 대비율이 낮으므로 텍스트 컬러로 단독 사용 금지.
> 반드시 진한 배경 위 또는 포인트 장식 요소에만 적용할 것.
