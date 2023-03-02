// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "./../../lib/prisma.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const data = await prisma.product.findMany({});
      return res.status(200).json(data);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  } else if (req.method === "POST") {
    // const prod =  prisma.product
    const data = req.body.product;
    console.log("Response", req.body);
    //data.prod_id = nanoid();
    // console.log(data);
    const dataResp = await prisma.product.create(req.body);

  

  // const dataResp = await prisma.product.create({
  //   data: {
  //     prod_id: "1222151",
  //     name: "Tv",
  //     price: "1600",
  //     category: "tv",
  //     brand: "samsung"
  //   },
  // })
  // const dataResp = await prod.create(data);
  //const data = await prisma.product.create({  prod_id, name, price, categry, brand});
  //    console.log(dataResp);
  return res.status(201).json(dataResp);
  //return res.status(201).json(req.body.data);
} else {
  return res.status(405).json({ msg: "Method not allowed" });
}
}
