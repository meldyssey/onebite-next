// CSS Module
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode, useEffect } from "react";
import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
import { InferGetServerSidePropsType } from "next";

// Next.js에서 약속된 이름으로 내보내주면 SSR로 동작하도록 자동으로 설정됨
export const getServerSideProps = () => {
  // 컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터 불러오는 함수
  // window는 브라우저 뜻해서 서버에서만 동작하는 getServerSideProps에서는 동작하지 못함
  // window.location;
  console.log("서버사이드프롭스");
  const data = "hello";

  return {
    //리턴값음 객체여야 함 -> 객체를 읽어와서 props를 페이지 컴포넌트에 전달
    props: {
      data,
    },
  };
};

//props로 받아오듯이 getServerSideProps의 props를 받아올 수 있음
export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // 서버에서도 한 번 실행이 되기 때문에 여기서 오류 날 수 있음
  // window.location;
  // 마운트 된 이후 실행되게끔 하면 오류 안남
  useEffect(() => {
    console.log(window);
  }, []);
  console.log(data);
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

// JavaScript에서 함수는 객체이기 때문에 메서드 추가가 가능
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
