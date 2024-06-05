// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../../lib/prisma.js";
// import AWS from "aws-sdk";

export default async function handler(req, res) {
  const slug = req.query;

  if (req.method === "GET") {
    try {
      const data = await prisma.product.findMany({});
      return res.status(200).json(data);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  }
  else if (req.method === "POST") {

    const dataResp = await prisma.product.create(req.body);
    return res.status(201).json(dataResp);
  } else {
    return res.status(405).json({ msg: "Method not allowed" });
  }
}
