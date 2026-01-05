"use client";

import { ReactNode } from "react";
import ServerComponent from "./server-component";

export default function ClientComponent({ children }: { children: ReactNode }) {
  console.log("클라이언트 컴포넌트");
  return <div>{children}</div>;
}
