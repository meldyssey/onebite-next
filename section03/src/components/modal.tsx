"use client";

import { ReactNode, useEffect, useRef } from "react";
import style from "./modal.module.css";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!dialogRef.current?.open) {
      // 모달 컴포넌트가 화면에 마운트되는 순간 자동으로 화면에 보여짐
      dialogRef.current?.showModal();
      // 스크롤은 최상단으로 고정
      dialogRef.current?.scrollTo({
        top: 0,
      });
    }
  }, []);

  return createPortal(
    <dialog
      // esc 눌렀을 경우 -> 뒤로가기
      onClose={() => router.back()}
      onClick={(e) => {
        //모달의 배경이 클릭 -> 뒤로가기
        if ((e.target as any).nodeName === "DIALOG") {
          router.back();
        }
      }}
      className={style.modal}
      ref={dialogRef}
    >
      {children}
    </dialog>,
    document.getElementById("modal-root") as HTMLElement,
  );
}
