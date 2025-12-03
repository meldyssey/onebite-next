import { useRouter } from "next/router";

export default function Page() {

  const router = useRouter();
  console.log(router)
  const {q} = router.query;
  return (
    <h1>Search {q}</h1>
  )
}