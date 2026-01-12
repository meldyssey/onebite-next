export default function Loading() {
  return <div>Loading...</div>;
}

/*
주의사항
- loading.tsx 해당 위치 및 해당 경로 아래의 위치에 모두 적용되는 것 유의(layout과 동일)
- 비동기 컴포넌트에만 스트리밍 적용됨(async 적용된 컴포넌트)
- loading.tsx는 Page 컴포넌트에만 스트리밍 설정 가능 => 페이지 아닌 다른 페이지는 다른 컴포넌트 사용 필요
- 브라우저에서 페이지가 아닌 쿼리스트링만 변경될 때에는 적용되지 않는다 => 한 방에 교체됨
*/
