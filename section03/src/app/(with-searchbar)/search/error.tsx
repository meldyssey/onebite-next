// 서버, 클라이언트 어떤 환경에서 에러가 발생하던지 에러 컴포넌트가 대응할 수 있도록 하기 위해
"use client";

import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";

export default function Error({
  error,
  reset, //서버로 페치를 다시 보내지 않고 클라이언트에서 불러오는 것을 다시 시도함
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    console.error(error.message);
  }, [error]);
  return (
    <div>
      <h3>검색과정에서 오류가 발생했습니다</h3>
      <button
        onClick={() => {
          // 안의 함수가 한 몸처럼 움직임
          startTransition(() => {
            router.refresh(); // 현재 페이지에 필요한 서버컴포넌트들을 다시 불러옴 - 비동기
            reset(); // 에러 상태를 초기화, 컴포넌트들을 다시 렌더링
          });
        }}
      >
        다시 시도
      </button>
    </div>
  );
}
