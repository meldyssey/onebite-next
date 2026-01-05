# 한입 크기로 잘라먹는 Next.js 학습 저장소

Next.js를 학습하면서 실습한 내용을 기록하는 저장소입니다.

## 📚 프로젝트 소개

Next.js의 주요 기능들을 학습하고 실습하면서 만든 프로젝트들을 포함하고 있습니다.
단계별로 Next.js의 다양한 렌더링 방식(SSR, SSG, ISR)과 기능들을 익히고 있습니다.

## 🛠️ 기술 스택

- **Framework**: Next.js 14.2.33
- **Language**: TypeScript 5
- **Library**: React 18
- **Styling**: CSS Modules
- **Linting**: ESLint

## 📖 학습 진행 내용

### 학습 항목

#### Page Router

- [x] API Routes 구현
- [x] Layout 구현
- [x] UI 구현
- [x] SSR (Server-Side Rendering) Intro
- [x] SSR 적용
- [x] SSG (Static Site Generation) 적용
- [x] SSG 동적 경로 적용
- [x] SSG 폴백 옵션 실습
- [x] ISR (Incremental Static Regeneration)
- [x] SEO 설정
- [x] 배포

#### App Router

- [x] 페이지 라우팅 설정
- [x] Layout 구현
- [x] 리액트 서버 컴포넌트
- [x] 네비게이팅
- [x] UI 구현
- [ ] 데이터 페칭
- [ ] 데이터 캐시
- [ ] 리퀘스트 메모이제이션
- [ ] 풀 라우트 캐시
- [ ] 라우트 세그먼트 옵션
- [ ] 클라이언트 라우터 캐시
- [ ] 스트리밍
- [ ] 에러 핸들링
- [ ] 서버 액션
- [ ] 패럴랠 라우트
- [ ] 인터셉팅 라우트
- [ ] 패럴랠 & 인터셉팅 라우트
- [ ] 최적화 및 배포하기

## 📁 프로젝트 구조

```
onebite-next/
├── section02/
│   ├── src/
│   │   ├── components/     # 재사용 가능한 컴포넌트
│   │   ├── lib/           # 유틸리티 및 헬퍼 함수
│   │   ├── mock/          # 목업 데이터
│   │   ├── pages/         # Next.js 페이지 라우팅
│   │   ├── styles/        # CSS 스타일 파일
│   │   └── types.ts       # TypeScript 타입 정의
│   └── package.json
└── README.md
```

## 📝 학습 블로그

Next.js를 학습하면서 정리한 내용을 블로그에 기록하고 있습니다.

### 관련 블로그 포스트

- [[Next.js] Next.js 시작하기
  ](https://velog.io/@melcoding/next.js-start)
- [[Next.js] Page Router
  ](https://velog.io/@melcoding/Next.js-Page-Router)
- [[Next.js] 페이지 라우팅 설정하기
  ](https://velog.io/@melcoding/Next.js-page-routing)
- [[Next.js] 프리페칭(Prefetching)
  ](https://velog.io/@melcoding/Next.js-Prefetching)
- [[Next.js] 데이터 패칭(Data fetching)
  ](https://velog.io/@melcoding/Next.js-data-fetching)
- [[Next.js] SSG fallback 옵션
  ](https://velog.io/@melcoding/Next.js-SSG-fallback)
- [[Next.js] ISR과 On-Demand ISR (요청 기반 ISR)
  ](https://velog.io/@melcoding/Next.js-ISR)
- [[Next.js] Next.js SEO 설정
  ](https://velog.io/@melcoding/Next.js-SEO)
- [[Next.js] 페이지 라우터 장단점
  ](https://velog.io/@melcoding/Next.js-page-router-pros-cons)
- [[Next.js] App Router (File-based Routing)
  ](https://velog.io/@melcoding/Next.js-App-Router-File-based-Routing)
- [[Next.js] 리액트 서버 컴포넌트
  ](https://velog.io/@melcoding/Next.js-react-server-component)

## 📌 참고 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [React 공식 문서](https://react.dev)
- [TypeScript 공식 문서](https://www.typescriptlang.org/docs)
