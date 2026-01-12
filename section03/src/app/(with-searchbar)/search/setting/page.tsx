import { delay } from "@/util/delay";

export default async function Page() {
  await delay(2000);
  return <div>setting page</div>;
}

// search폴더의 loading 때문에 스트리밍 로딩 적용됨
