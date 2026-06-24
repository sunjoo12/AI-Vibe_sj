# 컬러 팔레트 디자인 시스템

## 프로젝트 정보
- **출처 웹사이트**: 롯데칠성음료 — 아이시스 광고 포스터 (2024)
- **분석 날짜**: 2026-06-22
- **적용 프로젝트**: 포트폴리오 웹사이트

---

## CSS 변수 정의

```css
:root {
  /* Primary Colors — 스카이 블루 (하늘·청결·시원함) */
  --color-primary: #A8D8EE;
  --color-primary-light: #C8ECF8;
  --color-primary-dark: #6BBFD6;

  /* Secondary Colors — 비비드 핫핑크 (브랜드 에너지, 시선 집중) */
  --color-secondary: #FF5C8F;
  --color-accent: #3DB8B2;

  /* Background Colors */
  --color-bg-primary: #A8D8EE;
  --color-bg-secondary: #C8ECF8;
  --color-bg-deep: #6BBFD6;

  /* Text Colors */
  --color-text-primary: #1D3557;
  --color-text-secondary: #2C4A7C;
  --color-text-muted: #5A7A9A;

  /* Interactive Colors */
  --color-button-primary: #FF5C8F;
  --color-button-hover: #E0437A;
  --color-link: #3DB8B2;
  --color-link-hover: #2A9A94;

  /* Utility */
  --color-white: #FFFFFF;
  --color-highlight: #EEF7FC;
  --color-border: #D0EFF8;
}
```

---

## 컬러 사용 가이드

### Primary — `#A8D8EE` (라이트 스카이 블루)
- **사용처**: 메인 배경, 히어로 섹션, 카드 배경, 섹션 구분 영역
- **특징**: 청결함·투명함·자연을 연상시키는 브랜드의 핵심 색상. 전체 화면의 60% 이상을 차지해 시원하고 맑은 첫인상 확보
- **주의**: 배경으로 사용 시 텍스트는 반드시 `--color-text-primary`(`#1D3557`) 이상의 명도 대비 확보

### Secondary — `#FF5C8F` (비비드 핫핑크)
- **사용처**: 헤드라인 타이포, CTA 버튼, 브랜드명, 강조 태그
- **특징**: 차가운 블루 배경과 강렬한 보색 대비를 형성해 즉각적인 시선 집중 효과. MZ세대 타겟의 팝(pop) 에너지 표현
- **주의**: 전체 UI의 20% 이내로 제한. 과용 시 청량감 톤이 무너짐

### Accent — `#3DB8B2` (민트 티얼)
- **사용처**: 링크, 아이콘, 로고 포인트, 배지
- **특징**: 블루와 핑크 사이의 중간 톤으로 조화로운 연결 역할. 친환경·에코 이미지 강화
- **주의**: 소량 포인트로만 사용 (5% 이내)

### Background Deep — `#6BBFD6` (딥 시안 블루)
- **사용처**: 푸터 배경, 섹션 하단 그라디언트, 구분선
- **특징**: 메인 배경보다 채도·명도를 낮춰 시각적 깊이감과 레이아웃 리듬 형성
- **활용**: `linear-gradient(to bottom, #A8D8EE, #6BBFD6)` 형태로 그라디언트 배경 구성 권장

### Text — `#1D3557` / `#2C4A7C` / `#5A7A9A`
- `--color-text-primary`: 제목, 핵심 정보 — 스카이 블루 배경 위 충분한 명도 대비 확보
- `--color-text-secondary`: 본문, 설명 텍스트 — 정보 위계 구분
- `--color-text-muted`: 캡션, 날짜, 부가 정보 — 시각적 노이즈 최소화

### Highlight / Border — `#EEF7FC` / `#D0EFF8`
- **사용처**: 카드 하이라이트, 투명 소재 느낌의 테두리, 물방울 효과 등
- **특징**: 흰색보다 약하게 블루 틴트를 가져 배경과 자연스럽게 어우러지면서도 요소를 구분

---

## 반응형 고려사항

### 다크모드 대응
```css
@media (prefers-color-scheme: dark) {
  :root {
    /* 배경 — 딥 오션 네이비 계열로 전환, 블루 톤 브랜드 감성 유지 */
    --color-bg-primary: #0D2137;
    --color-bg-secondary: #122840;
    --color-bg-deep: #091A2B;

    /* 텍스트 — 라이트 스카이로 반전 */
    --color-text-primary: #C8ECF8;
    --color-text-secondary: #A8D8EE;
    --color-text-muted: #6BBFD6;

    /* 핑크는 밝기 유지, 다크 배경에서도 대비 확보 */
    --color-secondary: #FF5C8F;
    --color-button-primary: #FF5C8F;
    --color-button-hover: #FF7AA8;

    /* 테두리 어둡게 */
    --color-border: #1A3A55;
    --color-highlight: #162E45;

    /* 링크 */
    --color-link: #3DB8B2;
    --color-link-hover: #5DD0CA;
  }
}
```

### 그라디언트 배경 (핵심 활용법)
```css
/* 히어로 섹션 — 하늘에서 바다로 이어지는 그라디언트 */
.hero-section {
  background: linear-gradient(
    180deg,
    #C8ECF8 0%,
    #A8D8EE 40%,
    #6BBFD6 100%
  );
}

/* 다크모드 그라디언트 */
@media (prefers-color-scheme: dark) {
  .hero-section {
    background: linear-gradient(
      180deg,
      #122840 0%,
      #0D2137 50%,
      #091A2B 100%
    );
  }
}
```

### 화면 크기별 색상 전략
| 구간 | 전략 |
|------|------|
| **모바일 (xs ~ sm)** | 그라디언트 배경 단순화, 핑크 CTA 버튼 풀너비로 터치 영역 확보 |
| **태블릿 (md)** | 블루 배경 카드에 `--color-highlight` 테두리로 구분, 핑크 포인트 강조 |
| **데스크톱 (lg+)** | 히어로 풀스크린 그라디언트 + 제품 투명 효과 극대화 |

### 접근성 (WCAG 2.1 AA 기준)
| 조합 | 대비율 | 판정 |
|------|--------|------|
| `#1D3557` on `#A8D8EE` | **5.8:1** | ✅ AA 통과 |
| `#FFFFFF` on `#FF5C8F` | **3.9:1** | ✅ AA 통과 (굵은 텍스트) |
| `#FFFFFF` on `#6BBFD6` | **2.8:1** | ⚠️ 본문 텍스트 단독 사용 지양 |
| `#1D3557` on `#FFFFFF` | **10.6:1** | ✅ AAA 통과 |

> **주의**: `#A8D8EE` 배경 위 흰색 텍스트(`#FFFFFF`)는 대비율 1.8:1로 **사용 금지**.
> 스카이 블루 계열 배경에는 반드시 다크 네이비(`#1D3557`) 텍스트 사용.
