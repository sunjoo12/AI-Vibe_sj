# AI Vibe_sj 프로젝트 CLAUDE.md

## 프로젝트 개요

AI Vibe 강의 실습 프로젝트. React 기반 프론트엔드 학습 코드와 실습 예제를 관리한다.

**GitHub 저장소**: https://github.com/sunjoo12/AI-Vibe_sj

---

## 디렉토리 구조

```
Ai Vibe_sj/
├── lecture1/
│   ├── my-react-app/       # 실습 작업 앱
│   └── _template_settings/ # 강의 템플릿 (수정 금지)
├── gh-cli/                 # gh-cli 스킬 정의
└── CLAUDE.md               # 이 파일
```

---

## 작업 완료 후 GitHub 업로드 절차

작업이 끝날 때마다 아래 절차로 `/gh-cli` 스킬을 활용해 저장소에 업로드한다.

### 1단계: Git 초기화 확인 (최초 1회)

저장소가 초기화되지 않은 경우:

```bash
git init
git remote add origin https://github.com/sunjoo12/AI-Vibe_sj.git
```

이미 초기화된 경우 이 단계를 건너뛴다.

### 2단계: 변경 사항 스테이징 및 커밋

`node_modules`는 절대 커밋하지 않는다.

```bash
# .gitignore가 없으면 먼저 생성
# node_modules/, .claude/settings.local.json 등 제외

git add .
git commit -m "작업 내용을 간결하게 한 줄로 작성"
```

### 3단계: GitHub 업로드

```bash
git push -u origin main
```

브랜치가 `master`인 경우:
```bash
git push -u origin master
```

### 4단계: 업로드 확인 (`/gh-cli` 스킬 활용)

`/gh-cli` 스킬을 사용해 업로드 상태를 확인한다:

```bash
gh repo view sunjoo12/AI-Vibe_sj
```

---

## .gitignore 필수 항목

```gitignore
node_modules/
.claude/settings.local.json
dist/
.DS_Store
*.local
```

---

## 작업 규칙

- `_template_settings/` 폴더는 수정하지 않는다 (강의 원본 템플릿).
- 실습은 `my-react-app/` 또는 새 폴더에서 진행한다.
- 커밋 메시지는 한국어 또는 영어로 작업 내용을 명확히 적는다.
- 작업 완료마다 위 업로드 절차를 따른다.
