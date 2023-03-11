// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../../lib/prisma.js";
var jwt = require("jsonwebtoken");
const SECRET_KEY = "USERSAPI";

export default async function handler(req, res) {
  const data = req.body;
  // console.log(data.data.password, "pass");

  if (req.method === "GET") {
    try {
      const data = await prisma.user.findMany({});
      return res.status(200).json(data);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  } else if (req.method === "POST") {
    // const hashPass = await bcrypt.hash(data.data.password, 10);

    const dataResp = await prisma.user.create(req.body);

    const token = jwt.sign(
      { email: dataResp?.email, name: dataResp?.name },
      SECRET_KEY
    );
    return res.status(201).json({ user: dataResp, token: token });
  } else {
    return res.status(405).json({ msg: "Method not allowed" });
  }
}
