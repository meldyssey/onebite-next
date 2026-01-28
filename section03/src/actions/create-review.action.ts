// 파일로 나눈 경우 상단으로 위치시키기
"use server";

import { delay } from "@/util/delay";
import { revalidatePath, revalidateTag } from "next/cache";

export async function createReviewAction(_: any, formData: FormData) {
  const bookId = formData.get("bookId")?.toString();
  const content = formData.get("content")?.toString();
  const author = formData.get("author")?.toString();

  if (!bookId || !content || !author) {
    return {
      status: false,
      error: "리뷰 내용과 작성자를 입력해주세요.",
    };
  }

  try {
    await delay(2000);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
      {
        method: "POST",
        body: JSON.stringify({ bookId, content, author }),
      },
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    /*재검증해서 다시 생성함 
    - 서버측에서만 호출할 수 있는 메서드
    - 해당 페이지의 모든 캐시 무효화 시킴
    - 풀라우트캐시까지 삭제됨
    */
    // 1. 특정 주소의 해당하는 페이지만 재검증
    // revalidatePath(`/book/${bookId}`);

    /* 2. 특정 경로의 모든 동적 페이지를 재검증
    - 경로는 해당 파일 혹은 폴더 경로로 작성해야 함
    */
    // revalidatePath("/book/[id]", "page");

    /* 3. 특정 레이아웃을 갖는 모든 페이지 재검증
    - 해당 경로의 레이아웃을 사용하는 페이지 검증
     */
    // revalidatePath("/(with-searchbar)", "layout");

    /* 4. 모든 데이터 재검증
    - 프로젝트의 모든 페이지가 재검증
     */
    // revalidatePath("/", "layout");

    /* 5. 태그 기준, 데이터 캐시 재검증
    - 해당 태그 값을 갖는 데이터 캐시가 재검증 됨
     */
    revalidateTag(`review-${bookId}`);
    return {
      status: true,
      error: "",
    };
  } catch (error) {
    return {
      status: false,
      error: `리뷰 저장에 실패했습니다 : ${error}`,
    };
  }
}
