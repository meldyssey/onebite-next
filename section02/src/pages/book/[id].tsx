import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import style from "./[id].module.css";
import fetchOneBook from "@/lib/fetch-one-book";
import { useRouter } from "next/router";

export const getStaticPaths = () => {
  return {
    // 꼭 문자열로 설정
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    // 존재하지 않는 url에 접속하는 경우 대비책
    fallback: true,
    // false: path에 설정하지 않은 경로는 모두 404 Not found
    // "blocking": SSR 방식으로 실시간으로 페이지 생성(사전렌더링)
    // true: SSR 방식 + 데이터가 없는 fallback 상태의 페이지(Props 데이터가 없는 상태의 페이지)부터 생성해 반환
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  // 무조건 존재할 꺼다는 '!' 단언으로
  const id = context.params!.id;
  const book = await fetchOneBook(Number(id));
  if (!book) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      book,
    },
  };
};

export default function Page({
  book,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  // fallback 상태일 때 메시지를 띄우는 방법
  if (router.isFallback) return "로딩중입니다.";
  if (!book) return "문제가 발생했습니다. 다시 시도하세요.";

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} alt="" />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
}
