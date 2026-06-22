# 네오팜 쇼핑몰 디자인 시스템

## 프로젝트 정보
- **출처 웹사이트**: NEOPHARM SHOP (네오팜 공식 쇼핑몰)
- **분석 날짜**: 2026-06-22
- **레퍼런스 이미지**: `reference/네오팜.jpg`
- **참고 포맷**: `color_pallette/lab-in-nature-cosmetics_ColorSystem.md`

---

## 1. 타이포그래피

### CSS 변수 정의

```css
:root {
  /* ─── Font Family ─── */
  --font-primary: 'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif;
  --font-logo: 'Montserrat', 'Noto Sans KR', sans-serif; /* 로고 영문 */

  /* ─── Font Size ─── */
  --text-xs:   11px;   /* 법적고지, 아주 작은 캡션 */
  --text-sm:   13px;   /* 상품명, GNB 메뉴, 탭 라벨 */
  --text-base: 14px;   /* 기본 본문, 가격, 버튼 텍스트 */
  --text-md:   16px;   /* 할인율, 강조 서브텍스트 */
  --text-lg:   18px;   /* 섹션 서브타이틀, 소분류 제목 */
  --text-xl:   22px;   /* 타임세일 제목 ("24시간 한정") */
  --text-2xl:  28px;   /* 섹션 메인 타이틀 (BEST, EVENT) */
  --text-3xl:  36px;   /* 히어로 헤드라인 */
  --text-4xl:  48px;   /* 히어로 메인 카피 (최대 강조) */

  /* ─── Font Weight ─── */
  --font-regular: 400;
  --font-medium:  500;
  --font-bold:    700;
  --font-black:   900; /* 로고, 히어로 핵심 카피 */

  /* ─── Line Height ─── */
  --leading-tight:  1.2;  /* 헤드라인, 타이틀 */
  --leading-snug:   1.4;  /* 상품명, 버튼 */
  --leading-normal: 1.6;  /* 본문, 설명 */
  --leading-loose:  1.8;  /* 긴 본문, 이용약관 */

  /* ─── Letter Spacing ─── */
  --tracking-tight:  -0.5px; /* 대형 헤드라인 */
  --tracking-normal:  0px;   /* 기본 */
  --tracking-wide:    1px;   /* 영문 섹션 타이틀 (BEST, EVENT, BRAND) */
  --tracking-widest:  2px;   /* 로고 영문 */
}
```

### 타이포그래피 사용 가이드

| 역할 | 크기 | 굵기 | 행간 | 자간 | 사용처 |
|------|------|------|------|------|------|
| 로고 | 18px | 900 | 1.2 | 2px | `NEOPHARM SHOP` 로고 |
| GNB 메뉴 | 13px | 400 | 1.4 | 0px | 상단 네비게이션 카테고리 |
| 히어로 헤드라인 | 36–48px | 700 | 1.2 | -0.5px | 히어로 메인 카피 |
| 섹션 타이틀 | 28px | 700 | 1.2 | 1px | BEST / EVENT / BRAND 등 |
| 서브 타이틀 | 22px | 700 | 1.4 | 0px | 타임세일, What's New |
| 상품명 | 13px | 400 | 1.6 | 0px | 상품 카드 내 이름 |
| 할인율 | 16px | 700 | 1.4 | 0px | 35% 등 강조 표시 (레드) |
| 할인가 | 14px | 700 | 1.4 | 0px | 최종 구매가 |
| 원가 | 13px | 400 | 1.4 | 0px | 취소선 처리 원가 |
| 캡션/날짜 | 11px | 400 | 1.6 | 0px | 부가 정보, 날짜 |

---

## 2. 여백(Spacing) 시스템

### CSS 변수 정의

```css
:root {
  /* ─── Base Unit: 4px ─── */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;

  /* ─── Layout ─── */
  --container-max-width: 1200px;
  --container-padding-x: 24px;         /* 좌우 기본 패딩 */
  --container-padding-x-mobile: 16px;  /* 모바일 좌우 패딩 */

  /* ─── Section Spacing ─── */
  --section-padding-y: 80px;           /* 섹션 상하 여백 (데스크톱) */
  --section-padding-y-md: 60px;        /* 태블릿 */
  --section-padding-y-sm: 40px;        /* 모바일 */
  --section-gap: 48px;                 /* 섹션 간 간격 */

  /* ─── Component Spacing ─── */
  --card-padding: 12px;                /* 상품 카드 내부 패딩 */
  --card-gap: 16px;                    /* 카드 그리드 간격 */
  --card-gap-mobile: 12px;             /* 모바일 카드 간격 */
  --card-border-radius: 8px;           /* 카드 모서리 */

  --button-padding-x: 20px;            /* 버튼 좌우 패딩 */
  --button-padding-y: 10px;            /* 버튼 상하 패딩 */
  --button-border-radius: 4px;         /* 버튼 모서리 */

  --nav-height: 56px;                  /* GNB 높이 */
  --nav-icon-gap: 20px;                /* GNB 아이콘 간격 */

  --badge-padding-x: 8px;              /* 뱃지(할인율) 좌우 패딩 */
  --badge-padding-y: 2px;              /* 뱃지 상하 패딩 */
  --badge-border-radius: 2px;
}
```

### 여백 사용 가이드

| 구역 | 속성 | 값 (데스크톱) | 값 (모바일) |
|------|------|--------------|------------|
| 전체 컨테이너 | max-width | 1200px | 100% |
| 좌우 패딩 | padding-x | 24px | 16px |
| 섹션 상하 | padding-y | 80px | 40px |
| 섹션 간 간격 | gap | 48px | 32px |
| 상품 카드 내부 | padding | 12px | 10px |
| 카드 그리드 gap | gap | 16px | 12px |
| GNB 높이 | height | 56px | 52px |
| 버튼 내부 | padding | 10px 20px | 8px 16px |

---

## 3. 그리드 시스템

```css
:root {
  --grid-columns-desktop: 4;   /* 상품 리스트 4열 */
  --grid-columns-tablet:  3;   /* 태블릿 3열 */
  --grid-columns-mobile:  2;   /* 모바일 2열 */
  --grid-gap: var(--card-gap);
}
```

### 반응형 브레이크포인트

| 이름 | 기준 | 그리드 |
|------|------|--------|
| xs (모바일) | 0 ~ 599px | 2열 |
| sm (태블릿 소) | 600 ~ 899px | 2열 |
| md (태블릿) | 900 ~ 1199px | 3열 |
| lg (데스크톱) | 1200px~ | 4열 |

---

## 4. 컴포넌트 패턴

### 4.1 GNB (Global Navigation Bar)
```
[로고 NEOPHARM SHOP]  |  [카테고리 메뉴]  |  [검색 아이콘] [계정] [장바구니]
─────────────────────────────────────────────────────────────────────────────
높이: 56px  /  배경: #FFFFFF  /  하단 보더: 1px solid #E5E5E5
```
- 로고: 좌측 고정
- 메뉴: 중앙 배치 (가로 8–10개 카테고리)
- 아이콘: 우측 3개 (검색·계정·장바구니)

### 4.2 히어로 배너
```
배경색: #FDEEF0 (연핑크)
좌측: 헤드카피 (36–48px, bold) + 서브카피 + CTA 버튼
우측: 제품 이미지 (원형/자연스러운 배치)
```
- 캐러셀 인디케이터: 하단 도트
- CTA 버튼: `#E3001B` 배경, 흰 텍스트, border-radius 4px

### 4.3 상품 카드
```
┌──────────────────┐
│  [뱃지: NEW/BEST]│
│                  │
│    [상품 이미지]  │
│                  │
├──────────────────┤
│  상품명 (13px)   │
│  35% 45,000원    │  ← 할인율(레드) + 할인가(bold)
│  ~~65,000원~~    │  ← 원가 취소선 (gray)
│  [장바구니 아이콘]│
└──────────────────┘
```
- 카드 배경: `#FFFFFF`
- 호버: 이미지 scale(1.03), 그림자 추가
- border-radius: 8px

### 4.4 뱃지 / 태그
| 종류 | 배경색 | 텍스트 색 | 사용처 |
|------|--------|----------|--------|
| BEST | `#E3001B` | `#FFFFFF` | 베스트 상품 |
| NEW | `#1A1A1A` | `#FFFFFF` | 신상품 |
| 세일% | `#E3001B` | `#FFFFFF` | 할인율 뱃지 |
| 타임세일 | `#E3001B` | `#FFFFFF` | 한정 할인 배너 |

### 4.5 이벤트 배너
| 구역 | 배경 | 특징 |
|------|------|------|
| 봄 자외선 이벤트 | `#FFF3E0` (워밍 크림) | 아이콘 + 텍스트 좌중정렬 |
| 1+1 이벤트 | `#7B5EA7` 퍼플 그라데이션 | 임팩트 있는 숫자 강조 |
| 세계 최저가 이벤트 | `#00A99D` 틸/민트 | 포인트 금액 강조 |

### 4.6 멤버십/VIP 배너
- 배경: `#1C1C1C` (다크 차콜)
- 텍스트: `#FFFFFF` (메인), `#C9A227` 골드 (VIP 강조)
- 레이아웃: 좌우 2분할, 각각 다른 등급 혜택 안내

### 4.7 탭 (추천 / 신상품 / 베스트셀러)
- 활성 탭: `#1A1A1A` 텍스트, 하단 2px solid 언더라인
- 비활성 탭: `#999999` 텍스트
- 폰트: 13px, medium

---

## 5. 그림자 & 이펙트

```css
:root {
  --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.08);       /* 상품 카드 기본 */
  --shadow-card-hover: 0 4px 16px rgba(0, 0, 0, 0.14); /* 호버 상태 */
  --shadow-nav: 0 1px 4px rgba(0, 0, 0, 0.06);          /* GNB 하단 그림자 */
  --shadow-modal: 0 8px 32px rgba(0, 0, 0, 0.18);       /* 팝업/모달 */

  --transition-default: all 0.2s ease;
  --transition-slow: all 0.35s ease;
}
```

---

## 6. 접근성 (WCAG 2.1 기준)

| 전경색 | 배경색 | 대비율 | 등급 |
|--------|--------|--------|------|
| `#1A1A1A` | `#FFFFFF` | 18.1:1 | ✅ AAA |
| `#E3001B` | `#FFFFFF` | 5.1:1 | ✅ AA |
| `#555555` | `#FFFFFF` | 7.4:1 | ✅ AA |
| `#999999` | `#FFFFFF` | 2.8:1 | ⚠️ AA 미달 — 텍스트 단독 사용 지양 |
| `#FFFFFF` | `#E3001B` | 5.1:1 | ✅ AA (버튼 텍스트 용도) |
| `#C9A227` | `#1C1C1C` | 7.1:1 | ✅ AA (VIP 골드 텍스트) |

> **주의**: `#999999` (muted 텍스트)는 원가 취소선·캡션 등 보조 정보에만 사용. 핵심 정보에 절대 단독 사용 금지.

---

## 7. 반응형 전략

| 구간 | 레이아웃 전략 |
|------|-------------|
| **xs (0–599px)** | 상품 2열 그리드, 히어로 텍스트 28px, 섹션 패딩 40px, GNB 햄버거 메뉴 전환 |
| **sm (600–899px)** | 상품 2열 유지, 섹션 패딩 48px, 이벤트 배너 세로 스택 |
| **md (900–1199px)** | 상품 3열, 섹션 패딩 60px, GNB 전체 표시 |
| **lg (1200px+)** | 상품 4열, 섹션 패딩 80px, 컨테이너 max-width 1200px 고정 |

---

## 8. 다크모드 대응

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg-primary: #121212;
    --color-bg-secondary: #1E1E1E;
    --color-bg-hero: #2A1A1C;         /* 다크 핑크 톤 유지 */

    --color-text-primary: #F0F0F0;
    --color-text-secondary: #BBBBBB;
    --color-text-muted: #777777;

    --color-border-default: #333333;
    --color-border-light: #2A2A2A;

    /* 브랜드 레드는 밝기 유지 — 다크 배경 위 가시성 확보 */
    --color-brand-red: #FF2D44;
    --color-brand-red-dark: #E3001B;
  }
}
```
