// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../../lib/prisma.js";
// var jwt = require("jsonwebtoken");
// const SECRET_KEY = "USERSAPI";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const data = await prisma.order.findMany({});
      return res.status(200).json(data);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  } else if (req.method === "POST") {
    // let { data, total } = req.body;
    // let data2 = data.map((item) => item);
    // console.log(data2, "djfsfghdsghfdjsgfjh");
    const dataResp = await prisma.order.create({
    data: {
        totalAmt: 1000,
        userId: 8,
        OrderItem: {
          create: [
            {
               qty: 2,
               amount: 500,
               productId: 1
               },
               {
                qty: 1,
                amount: 500,
                productId: 2
                },
          ],
        }
    }
    });
    // const dataResp = await prisma.order.create({
    //   data: {
    //     totalAmt: total,
    //     userId: 17,
    //     OrderItem: data
    //   },
    // });

    // const token = jwt.sign(
    //   { email: dataResp?.email, name: dataResp?.name },
    //   SECRET_KEY
    // );

    return res.status(201).json(dataResp);
  } else {
    return res.status(405).json({ msg: "Method not allowed" });
  }
}
