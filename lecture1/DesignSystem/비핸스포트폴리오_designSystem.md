# 비핸스 그래픽 디자이너 포트폴리오 디자인 시스템

## 프로젝트 정보
- **출처 웹사이트**: Behance — "PORTFOLIO | Graphic Designer | 2025" (제작자: Dxwart / Lê Đức Thưởng)
- **URL**: https://www.behance.net/gallery/219179515/PORTFOLIO-Graphic-Designer-2025
- **분석 날짜**: 2026-07-08
- **레퍼런스 이미지**: `behance_portfolio_viewport.png` (뷰포트), `behance_portfolio.png` (풀페이지)
- **참고 포맷**: `DesignSystem/neopam_designSystem.md`

---

## 1. 타이포그래피

### CSS 변수 정의

```css
:root {
  /* ─── Font Family ─── */
  --font-display: 'Fraunces', 'Recoleta', serif;      /* 커버 "port folio" 손글씨풍 볼드 세리프 */
  --font-primary: 'Be Vietnam Pro', 'Inter', sans-serif; /* 본문 (베트남어 병음 지원) */

  /* ─── Font Size ─── */
  --text-xs:   12px;   /* 날짜, 툴 뱃지 라벨 */
  --text-sm:   14px;   /* 본문 소개 문단 */
  --text-base: 16px;   /* 섹션 소제목 (학력/경력) */
  --text-md:   18px;   /* 상단 프로젝트 타이틀 */
  --text-lg:   24px;   /* 헤더 라벨 (LE DUC THUONG / GRAPHIC DESIGNER) */
  --text-xl:   32px;   /* 이름 타이틀 (LÊ ĐỨC THƯỞNG) */
  --text-4xl:  90px;   /* 커버 히어로 타이포 ("port folio") */

  /* ─── Font Weight ─── */
  --font-regular: 400;
  --font-medium:  500;
  --font-bold:    700;
  --font-black:   900; /* 커버 히어로 타이포, 이름 타이틀 */

  /* ─── Line Height ─── */
  --leading-tight:  1.0;  /* 커버 히어로 타이포 */
  --leading-snug:   1.3;  /* 이름·소제목 */
  --leading-normal: 1.6;  /* 본문 소개 문단 */

  /* ─── Letter Spacing ─── */
  --tracking-tight: -1px;  /* 커버 히어로 타이포 */
  --tracking-normal: 0px;  /* 기본 */
  --tracking-wide:   1.5px; /* 상단 헤더 라벨 (전체 대문자) */
}
```

### 타이포그래피 사용 가이드

| 역할 | 크기 | 굵기 | 행간 | 자간 | 사용처 |
|------|------|------|------|------|------|
| 커버 히어로 타이포 | 90px | 900 | 1.0 | -1px | "port folio" 커버 타이틀 |
| 헤더 라벨 (대문자) | 18–24px | 700 | 1.3 | 1.5px | `LE DUC THUONG` / `2023-2025` / `GRAPHIC DESIGNER` |
| 이름 타이틀 | 32px | 900 | 1.3 | 0px | `LÊ ĐỨC THƯỞNG` (프로필 섹션) |
| 섹션 소제목 | 16px | 700 | 1.3 | 0px | `Học vấn`, `Kinh nghiệm`, `Công cụ`, `Liên hệ` |
| 경력 항목 라벨 | 14px | 700 | 1.4 | 0px | `LITUP`, `J-Connect`, `Freelancer` |
| 본문 소개 문단 | 14px | 400 | 1.6 | 0px | 자기소개 텍스트 |
| 날짜/캡션 | 12px | 400 | 1.4 | 0px | 생년월일, 재직 기간 |
| 툴 뱃지 라벨 | 12px | 700 | 1.0 | 0px | `Ai` `Ps` `Pr` `Id` `Lr` 아이콘 내부 텍스트 |

---

## 2. 여백(Spacing) 시스템

### CSS 변수 정의

```css
:root {
  /* ─── Base Unit: 8px ─── */
  --space-1:  8px;
  --space-2:  16px;
  --space-3:  24px;
  --space-4:  32px;
  --space-6:  48px;
  --space-8:  64px;
  --space-10: 80px;

  /* ─── Layout ─── */
  --page-max-width: 1000px;         /* 커버 페이지(캔버스) 폭 */
  --page-padding-x: 48px;           /* 페이지 좌우 패딩 */
  --page-padding-y: 40px;           /* 페이지 상하 패딩 */

  /* ─── Section Spacing ─── */
  --section-gap: 48px;              /* 커버 → 프로필 섹션 간 간격 */
  --profile-column-gap: 40px;       /* 사진 컬럼 ↔ 텍스트 컬럼 간격 */
  --timeline-item-gap: 24px;        /* 학력/경력 타임라인 항목 간 간격 */

  /* ─── Component Spacing ─── */
  --badge-size: 40px;               /* 툴 뱃지(Ai/Ps/Pr 등) 정사각 크기 */
  --badge-gap: 8px;                 /* 툴 뱃지 사이 간격 */
  --badge-border-radius: 8px;

  --timeline-dot-size: 8px;         /* 타임라인 점 마커 */
  --timeline-line-width: 1px;

  --header-height: 56px;            /* Behance 뷰어 상단 고정 헤더 높이 */
}
```

### 여백 사용 가이드

| 구역 | 속성 | 값 |
|------|------|-----|
| 페이지 캔버스 | max-width | 1000px |
| 페이지 좌우 패딩 | padding-x | 48px |
| 페이지 상하 패딩 | padding-y | 40px |
| 커버 → 프로필 섹션 | gap | 48px |
| 사진 ↔ 텍스트 컬럼 | gap | 40px |
| 타임라인 항목 간 | gap | 24px |
| 툴 뱃지 크기/간격 | size / gap | 40px / 8px |

---

## 3. 그리드 시스템

```css
:root {
  --grid-cover: 1;              /* 커버 섹션: 단일 컬럼, 중앙 배치 */
  --grid-profile-columns: 2;    /* 프로필 섹션: 사진(40%) + 텍스트(60%) 2컬럼 */
  --grid-detail-columns: 2;     /* 학력/경력 섹션: 좌(학력·도구) + 우(경력) 2컬럼 */
}
```

### 반응형 브레이크포인트 (제안)
| 이름 | 기준 | 그리드 |
|------|------|--------|
| xs (모바일) | 0 ~ 599px | 전체 1열 스택 (사진 → 소개 → 학력 → 경력) |
| md (태블릿) | 600 ~ 1023px | 프로필 2열 유지, 학력/경력 1열 스택 |
| lg (데스크톱) | 1024px~ | 원본 레이아웃 (프로필 2열 + 학력/경력 2열) |

> 원본은 고정폭 이미지형 포트폴리오(단일 캔버스)로 제작되어 반응형 브레이크포인트가 없음. 위 표는 실제 웹 구현 시 적용할 반응형 전략 제안.

---

## 4. 컴포넌트 패턴

### 4.1 뷰어 상단 헤더 (Behance UI)
```
[≡] Bē  [아바타] PORTFOLIO | Graphic Designer | 2025      [지금 구매] [✉] [X]
                  Dxwart ✦ · 팔로우
─────────────────────────────────────────────────────────────────
높이: 56px  /  배경: #14151C (다크 네이비)  /  텍스트: #FFFFFF
```
- 좌측: 메뉴 아이콘 + 로고 + 제작자 아바타/이름/팔로우
- 우측: CTA 버튼("지금 구매"), 메시지 아이콘, 닫기 아이콘

### 4.2 커버 히어로 섹션
```
배경: #E8E0C8 (크림 베이지, 종이 그레인 텍스처)
상단: LE DUC THUONG   |   2023 - 2025   |   GRAPHIC DESIGNER  (전체 대문자, 자간 넓게)
중앙: "port folio" 대형 손글씨풍 볼드 타이포 (#4B3FF0)
데코: 점선 곡선 경로, 클로버/꽃 모양 아이콘, 작은 네이비 사각형, 달팽이 일러스트
```
- 헤드라인 컬러와 데코 요소가 동일한 인디고 블루-바이올렛으로 통일되어 브랜드 톤 형성
- 손그림풍 점선·도형이 그리드 레이아웃 위에 자유롭게 오버레이되어 캐주얼한 개성 부여

### 4.3 프로필 소개 섹션
```
┌────────────┬─────────────────────────────┐
│  [인물 사진] │  LÊ ĐỨC THƯỞNG               │
│  (클로버    │  13.11.2003 ─────            │
│   도형 배경) │  Xin chào, 자기소개 문단...    │
└────────────┴─────────────────────────────┘
```
- 좌측: 사진 + 클로버 도형 배경 장식
- 우측: 이름(볼드, 인디고) + 생년월일(밑줄) + 소개 문단(본문 폰트)

### 4.4 타임라인 (학력 / 경력)
```
학력                     경력
●─ Arena Multimedia      ●─ LITUP (Graphic Designer / Content Creator)
   2021 - 2024           |
                         ●─ J-Connect (Remote Designer)
                         |
                         ●─ Freelancer (Gladys, Purple Bedroom Studio, ...)
```
- 점(dot) + 세로 연결선으로 시간 흐름 표현
- 점/연결선 컬러: 인디고 블루-바이올렛(`#4B3FF0`), 라벨은 볼드, 기간은 muted gray

### 4.5 툴 뱃지 (Software Icons)
| 뱃지 | 배경색 | 텍스트/아이콘 색 | 사용처 |
|------|--------|----------------|--------|
| Ai / Ps / Pr / Id / Lr | `#FFFFFF` | `#4B3FF0` | 사용 프로그램(Illustrator, Photoshop, Premiere, InDesign, Lightroom) |
| 조명(라이팅) 아이콘 | `#FFFFFF` | `#4B3FF0` | 촬영/조명 관련 툴 |

- 40×40px 정사각 라운드 배지, 1px 인디고 테두리, 내부 볼드 텍스트/아이콘

### 4.6 데코레이션 모티프
| 요소 | 컬러 | 특징 |
|------|------|------|
| 점선 곡선 경로 | `#4B3FF0` (반투명) | 커버 섹션 전체를 가로지르는 손그림풍 여정 라인 |
| 클로버/꽃 아이콘 | `#4B3FF0` | 4장 클로버 모양, 헤드라인 주변·사진 배경에 반복 배치 |
| 작은 사각형 포인트 | `#14151C` | 헤드라인 주변 마침표처럼 사용되는 미니 도형 |
| 달팽이 일러스트 | `#4B3FF0` (연한 톤) | 페이지 우측 하단, 브랜드 위트를 더하는 시그니처 캐릭터 |

---

## 5. 그림자 & 이펙트

```css
:root {
  --shadow-photo: 0 4px 12px rgba(0, 0, 0, 0.12);      /* 프로필 인물 사진 */
  --shadow-header: 0 1px 6px rgba(0, 0, 0, 0.3);       /* 뷰어 상단 헤더 (다크 배경) */
  --texture-paper-noise: url('paper-grain.png');       /* 커버 배경 종이 그레인 텍스처 */

  --transition-default: all 0.2s ease;
}
```

- 전반적으로 플랫 일러스트 스타일 + 종이 질감 노이즈 오버레이가 톤을 결정 (강한 드롭섀도우 사용 최소화)
- 인물 사진에만 은은한 그림자로 입체감 부여

---

## 6. 접근성 (WCAG 2.1 기준)

| 전경색 | 배경색 | 대비율 | 등급 |
|--------|--------|--------|------|
| `#14151C` | `#E8E0C8` | 13.9:1 | ✅ AAA |
| `#4B3FF0` | `#E8E0C8` | 5.8:1 | ✅ AA |
| `#4B3FF0` | `#FFFFFF` | 6.9:1 | ✅ AA |
| `#FFFFFF` | `#14151C` | 15.8:1 | ✅ AAA (헤더 텍스트) |
| `#6B6B6B` (날짜 muted) | `#E8E0C8` | 3.6:1 | ⚠️ AA 본문 미달 — 보조 정보(날짜)에만 사용 |

> **주의**: muted gray 날짜 텍스트는 12px 소형 텍스트에 해당해 WCAG AA 기준(4.5:1) 미달. 핵심 정보에는 사용하지 말고 보조 캡션 용도로만 제한.

---

## 7. 반응형 전략 (제안)

| 구간 | 레이아웃 전략 |
|------|-------------|
| **xs (0–599px)** | 전 구간 1열 스택, 커버 타이포 40px로 축소, 데코 요소(점선/클로버) 밀도 축소 |
| **md (600–1023px)** | 프로필 2열 유지(사진 축소), 학력/경력 1열 스택 |
| **lg (1024px+)** | 원본 레이아웃 그대로 (프로필 2열 + 학력/경력 2열, 커버 타이포 90px) |

---

## 8. 다크모드 대응 (제안)

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg-cover: #1C1B18;        /* 종이 크림 → 다크 차콜 브라운으로 전환 */
    --color-bg-section: #232219;

    --color-text-primary: #F0EDE2;
    --color-text-muted: #9A9A94;

    /* 인디고 포인트는 밝기 살짝 올려 다크 배경 위 가시성 확보 */
    --color-accent: #6C63F7;
    --color-accent-dot: #6C63F7;

    --color-border: #3A392E;
  }
}
```
