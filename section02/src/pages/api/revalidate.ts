import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // revalidate 경로 작성
    await res.revalidate("/");
    return res.json({ revalidate: true });
  } catch {
    res.status(500).send("Revalidation Failed");
  }
}
