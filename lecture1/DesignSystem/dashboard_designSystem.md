# 대시보드 디자인 시스템

## 프로젝트 정보
- **출처**: EmploYee — HR 팀 관리 대시보드 UI 레퍼런스
- **분석 날짜**: 2026-06-24
- **레퍼런스 이미지**: `reference/대시보드 레퍼런스.jpg`
- **참고 포맷**: `DesignSystem/neopam_designSystem.md`

---

## 1. 타이포그래피

### CSS 변수 정의

```css
:root {
  /* ─── Font Family ─── */
  --font-primary: 'Inter', 'Noto Sans KR', sans-serif;
  --font-logo: 'Inter', sans-serif; /* EmploYee 로고 영문 */

  /* ─── Font Size ─── */
  --text-xs:   11px;   /* 통계 라벨 (Projects / Done / Progress) */
  --text-sm:   12px;   /* Productivity 퍼센트, 부가 캡션 */
  --text-base: 13px;   /* 직책(Role), 프로젝트 서브타이틀 */
  --text-md:   14px;   /* GNB 메뉴, 브레드크럼, 일반 본문 */
  --text-lg:   16px;   /* 멤버 이름, 섹션 소제목 (Projects) */
  --text-xl:   18px;   /* 사이드바 섹션 타이틀 (My Statistic) */
  --text-2xl:  24px;   /* 차트 중앙 퍼센트 (75%) */
  --text-3xl:  28px;   /* 페이지 메인 타이틀 (Design Team) */
  --text-logo: 20px;   /* 로고 텍스트 (EmploYee) */

  /* ─── Font Weight ─── */
  --font-regular: 400;
  --font-medium:  500;
  --font-semi:    600;
  --font-bold:    700;

  /* ─── Line Height ─── */
  --leading-tight:  1.2;  /* 페이지 타이틀, 차트 숫자 */
  --leading-snug:   1.4;  /* 멤버 이름, 섹션 타이틀 */
  --leading-normal: 1.6;  /* 본문, 직책, 라벨 */

  /* ─── Letter Spacing ─── */
  --tracking-tight:  -0.3px; /* 페이지 타이틀, 큰 숫자 */
  --tracking-normal:  0px;
  --tracking-wide:    0.5px; /* 통계 라벨 (Projects / Done) */
}
```

### 타이포그래피 사용 가이드

| 역할 | 크기 | 굵기 | 행간 | 자간 | 사용처 |
|------|------|------|------|------|------|
| 로고 | 20px | 700 | 1.2 | 0px | `EmploYee` 브랜드 로고 |
| 페이지 타이틀 | 28px | 700 | 1.2 | -0.3px | `Design Team` 등 섹션 제목 |
| 섹션 타이틀 | 18px | 600 | 1.4 | 0px | `My Statistic`, `Projects` |
| 멤버 이름 | 16px | 600 | 1.4 | 0px | 카드 내 이름 |
| GNB 메뉴 | 14px | 500 | 1.4 | 0px | 사이드바 네비게이션 |
| 브레드크럼 | 14px | 400 | 1.6 | 0px | `People → Design Team` |
| 직책(Role) | 13px | 400 | 1.6 | 0px | `Middle UI/UX`, `Junior Graphic` |
| 통계 수치 | 16px | 700 | 1.2 | -0.3px | 22 / 18 / 3 등 숫자 |
| 통계 라벨 | 11px | 400 | 1.6 | 0.5px | Projects / Done / Progress |
| Productivity % | 12px | 600 | 1.4 | 0px | `65%`, `80%`, `40%` |
| 도넛 차트 수치 | 24px | 700 | 1.2 | -0.3px | 차트 중앙 `75%` |
| 변화율 표시 | 12px | 500 | 1.4 | 0px | `+20% ↑` |

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

  /* ─── Layout ─── */
  --sidebar-left-width: 180px;          /* 왼쪽 네비게이션 사이드바 */
  --sidebar-right-width: 240px;         /* 오른쪽 통계 사이드바 */
  --container-padding: 24px;            /* 메인 콘텐츠 내부 패딩 */
  --page-outer-padding: 32px;           /* 전체 페이지 외곽 여백 */

  /* ─── Section Spacing ─── */
  --section-gap: 24px;                  /* 섹션 간 간격 */
  --section-title-mb: 16px;             /* 섹션 타이틀 하단 여백 */

  /* ─── Component Spacing ─── */
  --card-padding: 20px;                 /* 멤버 카드 내부 패딩 */
  --card-gap: 16px;                     /* 카드 그리드 간격 */
  --card-border-radius: 12px;           /* 카드 모서리 */

  --nav-item-height: 40px;              /* GNB 메뉴 아이템 높이 */
  --nav-item-padding-x: 16px;           /* GNB 메뉴 좌우 패딩 */
  --nav-item-gap: 4px;                  /* 메뉴 아이템 간 간격 */
  --nav-icon-gap: 10px;                 /* 아이콘과 텍스트 간격 */

  --search-height: 40px;                /* 검색바 높이 */
  --search-border-radius: 20px;         /* 검색바 완전 둥근 모서리 */

  --filter-height: 40px;                /* 필터 드롭다운 높이 */
  --filter-border-radius: 8px;          /* 필터 모서리 */

  --avatar-size-sm: 28px;               /* 헤더 아바타 스택 */
  --avatar-size-md: 64px;               /* 멤버 카드 아바타 */
  --avatar-size-profile: 40px;          /* 프로필 영역 아바타 */

  --progress-bar-height: 4px;           /* Productivity 진행바 높이 */
  --progress-bar-radius: 2px;

  --button-height: 40px;                /* CTA 버튼 높이 */
  --button-border-radius: 8px;          /* 버튼 모서리 */

  --main-container-radius: 20px;        /* 전체 대시보드 카드 모서리 */
}
```

### 여백 사용 가이드

| 구역 | 속성 | 값 |
|------|------|----|
| 외부 페이지 배경 | padding | 32px |
| 전체 대시보드 컨테이너 | border-radius | 20px |
| 왼쪽 사이드바 | width | 180px, padding: 20px |
| 오른쪽 사이드바 | width | 240px, padding: 20px |
| 메인 콘텐츠 | padding | 24px |
| 멤버 카드 내부 | padding | 20px |
| 카드 그리드 | gap | 16px |
| 사이드바 메뉴 아이템 | height | 40px, padding-x: 16px |
| 섹션 간 간격 | margin-bottom | 24px |

---

## 3. 그리드 시스템

```css
:root {
  --grid-columns-main: 3;     /* 멤버 카드 3열 */
  --grid-columns-tablet: 2;   /* 태블릿 2열 */
  --grid-columns-mobile: 1;   /* 모바일 1열 */
  --grid-gap: var(--card-gap);

  /* ─── 전체 레이아웃 분할 ─── */
  --layout-sidebar-left:  180px;
  --layout-main:          1fr;
  --layout-sidebar-right: 240px;
}

/* 전체 레이아웃 구성 */
.dashboard-layout {
  display: grid;
  grid-template-columns: var(--layout-sidebar-left) var(--layout-main) var(--layout-sidebar-right);
  gap: 0;
  height: 100vh;
}
```

### 반응형 브레이크포인트

| 이름 | 기준 | 레이아웃 |
|------|------|---------|
| xs (모바일) | 0 ~ 599px | 1열, 사이드바 숨김 → 하단 탭바 |
| sm (태블릿 소) | 600 ~ 899px | 2열 카드, 오른쪽 사이드바 숨김 |
| md (태블릿) | 900 ~ 1199px | 2열 카드, 오른쪽 사이드바 오버레이 |
| lg (데스크톱) | 1200px~ | 3패널 전체 표시, 카드 3열 |

---

## 4. 컴포넌트 패턴

### 4.1 전체 레이아웃 구조
```
┌─────────────────────────────────────────────────────────┐
│  [외부 배경: 연보라 #E8EAFF + 헥사곤 패턴]              │
│  ┌─────────────────────────────────────────────────┐    │
│  │ 사이드바(180px) │ 메인 콘텐츠(flex:1) │ 우측(240px) │ │
│  └─────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
전체 컨테이너: 배경 #FFFFFF, border-radius 20px, 그림자
```

### 4.2 왼쪽 사이드바 (GNB)
```
┌──────────────┐
│  EmploYee    │  ← 로고 (20px, bold, blue accent on 'Y')
├──────────────┤
│ ○ Dashboard  │  ← 비활성: 아이콘(#9CA3AF) + 텍스트(#9CA3AF)
│ ● People     │  ← 활성: 배경(#EEF2FF), 텍스트(#4C6FFF), pill 형태
│ ○ Statistic  │
│ ○ Schedule   │
│ ○ Company    │
│ ○ Settings   │
└──────────────┘
```
- 배경: `#FFFFFF`
- 활성 메뉴 배경: `#EEF2FF` (연보라 pill), 텍스트: `#4C6FFF`
- 비활성 메뉴 텍스트: `#9CA3AF`
- 아이콘 스타일: Line icon, 16px

### 4.3 브레드크럼 + 페이지 헤더
```
People  →  Design Team
─────────────────────────────────────────────────────
Design Team                    [아바타 스택] 20
```
- 브레드크럼: 14px, gray(`#9CA3AF`), 화살표 구분자
- 페이지 타이틀: 28px, bold, `#1E2A3A`
- 팀원 수 뱃지: 원형 아바타 오버랩 스택 + 숫자 텍스트

### 4.4 검색 + 필터 바
```
┌─────────────────────────┐  ┌─────────────────┐  ┌──┐
│ 🔍 Search               │  │ Grade        ▾  │  │≡▾│
└─────────────────────────┘  └─────────────────┘  └──┘
```
- 검색바: 배경 `#F4F5F7`, border 없음, border-radius 20px, height 40px
- 필터 드롭다운: 배경 `#F4F5F7`, border-radius 8px
- 뷰 토글 아이콘: border `1px solid #E5E7EB`, border-radius 8px

### 4.5 멤버 카드
```
┌──────────────────────────┐
│     [원형 아바타 64px]    │  ← 가운데 정렬
│      James Smith         │  ← 16px, bold, #1E2A3A
│      Middle UI/UX        │  ← 13px, #9CA3AF
├──────────────────────────┤
│ Projects  Done  Progress │  ← 11px, gray 라벨
│    22      18      3     │  ← 16px, bold, #1E2A3A
├──────────────────────────┤
│ Productivity: 65%        │  ← 12px, 컬러 퍼센트
│ ████████░░░░░░░░░░░░░    │  ← 4px 진행바
└──────────────────────────┘
```
- 카드 배경: `#FFFFFF`, border-radius: 12px
- 아바타: 원형(border-radius: 50%), 64px
- Productivity % 색상:
  - 80%+ : `#10B981` (그린)
  - 60~79%: `#F59E0B` (앰버)
  - 60% 미만: `#EF4444` (레드)
- 진행바 배경: `#F3F4F6`, 채운 색: `#4C6FFF`

### 4.6 도넛 차트 (My Statistic)
```
         ╭────────╮
        /  Productivity \
       │     75%         │  ← 24px, bold, #1E2A3A
        \   +20% ↑      /   ← 12px, #4C6FFF
         ╰────────╯
    (도넛 링: #4C6FFF, 트랙: #E8EAFF)
```
- 차트 색상: `#4C6FFF` (채운 부분), `#E8EAFF` (빈 부분)
- 차트 두께: stroke-width 약 10px
- "Productivity" 라벨: 12px, `#9CA3AF`
- 퍼센트 수치: 24px, bold, `#1E2A3A`
- 변화율 `+20% ↑`: 12px, `#4C6FFF`

### 4.7 프로젝트 미리보기 카드
```
┌──────────────────────────────────────────┐
│ [썸네일 이미지]           The Om          │
│                          Meditations app  │
└──────────────────────────────────────────┘
```
- 가로형 카드: 이미지(우측) + 텍스트(좌측) 레이아웃
- border-radius: 8px
- 이미지 영역: 고정 너비 약 70px, object-fit: cover
- 프로젝트명: 14px, semi-bold
- 서브타이틀: 12px, `#9CA3AF`

### 4.8 CTA 버튼 (View all)
```
┌──────────────────────────────────────────┐
│              View all                    │
└──────────────────────────────────────────┘
배경: #4C6FFF / 텍스트: #FFFFFF / radius: 8px / height: 40px
```
- 호버: `#3B5ADB` (더 진한 블루)
- 텍스트: 14px, semi-bold, 가운데 정렬
- 너비: 100% (사이드바 너비에 맞춤)

### 4.9 유저 프로필 헤더 (우측 사이드바 상단)
```
[아바타 40px]  Veya Sung        ···
               Art Director
```
- 아바타: 원형, 40px
- 이름: 14px, semi-bold
- 역할: 12px, `#9CA3AF`
- 더보기 버튼 `···`: 아이콘 버튼, 우측 정렬

---

## 5. 그림자 & 이펙트

```css
:root {
  --shadow-container: 0 8px 40px rgba(100, 116, 255, 0.12);  /* 전체 대시보드 컨테이너 */
  --shadow-card: 0 2px 12px rgba(0, 0, 0, 0.06);              /* 멤버 카드 */
  --shadow-card-hover: 0 4px 20px rgba(76, 111, 255, 0.15);   /* 카드 호버 */
  --shadow-search: 0 1px 4px rgba(0, 0, 0, 0.05);             /* 검색바 */

  /* ─── 트랜지션 ─── */
  --transition-default: all 0.2s ease;
  --transition-card: transform 0.2s ease, box-shadow 0.2s ease;

  /* ─── 호버 효과 ─── */
  /* 카드 호버: translateY(-2px) + shadow 강화 */
  /* 메뉴 아이템 호버: 배경 #F4F5F7로 전환 */
  /* 버튼 호버: background-color #3B5ADB로 전환 */
}
```

---

## 6. 접근성 (WCAG 2.1 기준)

| 전경색 | 배경색 | 대비율 | 등급 |
|--------|--------|--------|------|
| `#1E2A3A` | `#FFFFFF` | 15.3:1 | ✅ AAA |
| `#4C6FFF` | `#FFFFFF` | 4.5:1 | ✅ AA |
| `#4C6FFF` | `#EEF2FF` | 3.8:1 | ⚠️ 대형 텍스트·아이콘에만 허용 |
| `#9CA3AF` | `#FFFFFF` | 2.9:1 | ⚠️ AA 미달 — 보조 정보 전용 |
| `#FFFFFF` | `#4C6FFF` | 4.5:1 | ✅ AA (버튼 텍스트) |
| `#10B981` | `#FFFFFF` | 3.0:1 | ⚠️ 아이콘·장식 요소 전용 |

> **주의**: `#9CA3AF` (직책, 라벨 텍스트)는 11px 미만 단독 사용 금지. 보조 정보에 한해 허용.
> `#4C6FFF` on `#EEF2FF` (활성 메뉴 배경)는 아이콘/장식 목적으로만 사용, 핵심 텍스트 크기(14px 이상)에서만 적용 권장.

---

## 7. 반응형 전략

| 구간 | 레이아웃 전략 |
|------|-------------|
| **xs (0–599px)** | 사이드바 숨김, 하단 탭 네비게이션 전환, 카드 1열, 우측 패널 별도 페이지 처리 |
| **sm (600–899px)** | 왼쪽 사이드바 아이콘만 표시(48px), 카드 2열, 우측 사이드바 숨김 |
| **md (900–1199px)** | 왼쪽 사이드바 전체 표시, 카드 2열, 우측 사이드바 오버레이 또는 탭으로 전환 |
| **lg (1200px+)** | 3패널 전체 표시, 카드 3열, 도넛 차트 및 프로젝트 카드 우측 사이드바 고정 |

---

## 8. 다크모드 대응

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* ─── 배경 ─── */
    --color-bg-outer: #1A1C2E;       /* 외부 배경: 다크 네이비 */
    --color-bg-container: #1F2235;   /* 대시보드 컨테이너 */
    --color-bg-sidebar: #181A2D;     /* 사이드바 배경 */
    --color-bg-card: #252840;        /* 카드 배경 */
    --color-bg-input: #2A2D45;       /* 검색바, 필터 배경 */
    --color-bg-nav-active: #2D3258;  /* 활성 메뉴 배경 */

    /* ─── 텍스트 ─── */
    --color-text-primary: #E8EAFF;   /* 메인 텍스트 */
    --color-text-secondary: #8B92B8; /* 서브 텍스트 */
    --color-text-muted: #5A6080;     /* 캡션, 비활성 라벨 */

    /* ─── 테두리 ─── */
    --color-border: #2D3258;

    /* ─── 브랜드 블루는 명도 유지 ─── */
    --color-primary: #6B8AFF;        /* 다크 배경 위 가시성 확보 */
    --color-primary-hover: #4C6FFF;

    /* ─── 그림자 조정 ─── */
    --shadow-container: 0 8px 40px rgba(0, 0, 0, 0.4);
    --shadow-card: 0 2px 12px rgba(0, 0, 0, 0.3);
  }
}
```
