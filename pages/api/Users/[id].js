import prisma from "../../../lib/prisma";
var jwt = require("jsonwebtoken");
const SECRET_KEY = "USERSAPI";
// var nodemailer = require("nodemailer");
// let Mailjet = require("node-mailjet");

export default async function handler(req, res) {
  const { query, method, body } = req;
  const deletedId = query.id;
  // console.log(body, "body-userid");

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
    const token = jwt.sign(
      { email: dataUser?.email, name: dataUser?.name, userId:dataUser?.id  },
      SECRET_KEY
    );
    if (dataUser) {
      // let link = `http://localhost:3001/forgot?token=${token}`;

      // const mailjet = Mailjet.apiConnect(
      //   "9cc1335e98c4ec0281b2d9f1d5aaeccb",
      //   "147dc0800206e55d654467f8923bdba9"
      // );
      // const request = mailjet.post("send", { version: "v3.1" }).request({
      //   Messages: [
      //     {
      //       From: { Email: "no-reply@maitretech.com", Name: "Support" },
      //       To: [{ Email: "ravindra.064464@gmail.com" }],
      //       Subject: "Test Mail",
      //       TextPart: link,
      //     },
      //   ],
      // });
      // request
      //   .then((result) => {
      //     console.log(result);
      //   })
      //   .catch((err) => {
      //     console.log(err.statusCode);
      //   });

      // console.log(`http://localhost:3001/forgot?token=${token}`);
      return res.status(200).json({ user: dataUser, token: token });
    } else {
      return res.json("User Not Exists");
    }
  } else if (method === "PUT") {
    const updatedData = await prisma.user.update({
      where: {
        email: query.id,
      },
      data: {
        password: body?.password,
        confirmpassword: body?.confirmpassword,
      },
    });
    return res.status(200).json(updatedData);
  } else {
    return res.json("not updated");
  }
}
