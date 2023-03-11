import prisma from "../../../lib/prisma";
var jwt = require("jsonwebtoken");
const SECRET_KEY = "USERSAPI";

export default async function handler(req, res) {
  const { query, method, body } = req;
  const deletedId = query.id;
  // console.log(query.id, "body-userid");

  if (method === "DELETE") {
    // const product = await prisma.product.findUnique({
    //     where: {
    //         prod_id: query.id,
    //     },
    // });
    const deleteUser = await prisma.user.delete({
      where: {
        id: parseInt(deletedId),
      },
    });
    // console.log(deleteProduct);
    return res.status(200).json({});
  } else if (req.method === "GET") {
    const dataUser = await prisma.user.findUnique({
      where: {
        email: query.id,
      },
    });
    const token = jwt.sign({ email: dataUser?.email, name:dataUser?.name }, SECRET_KEY);
    return res.status(200).json({user: dataUser, token: token});
  }
}
