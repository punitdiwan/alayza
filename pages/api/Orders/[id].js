// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../../lib/prisma.js";
import { nanoid } from "nanoid";
let Mailjet = require("node-mailjet");

export default async function handler(req, res) {

    const { query, method, body } = req;


  if (req.method === "GET") {
    try {
      const data = await prisma.order.findUnique({
        where: {
          id: parseInt(query.id),
        },
        include: {
          OrderItem: {
            include: {
              Product: true,
            },
          },
        },
      });
      return res.status(200).json(data);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  } else if (req.method === "POST") {
    let { dataNew, total, user } = req.body;

    // let data2 = dataNew.map((item) => item.orderId);

    // console.log(user.name, "djfsfghdsghfdjsgfjh");
    const dataResp = await prisma.order.create({
      data: {
        totalAmt: total,
        userId: user.userId,
        orderId: nanoid(),
        OrderItem: {
          create: dataNew,
        },
      },
    });

    return res.status(201).json(dataResp);
  } else {
    return res.status(405).json({ msg: "Method not allowed" });
  }
}
