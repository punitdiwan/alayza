import prisma from "../../../lib/prisma";
var jwt = require("jsonwebtoken");
const SECRET_KEY = "USERSAPI";
const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  const { query, method, body } = req;
  const deletedId = query.id;
  console.log(query.id, "body-userid");

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
      { email: dataUser?.email, name: dataUser?.name },
      SECRET_KEY
    );
    if (dataUser) {
      let link = `http://localhost:3000/forgot?token=${token}`;

      let testAccount = await nodemailer.createTestAccount();

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        // driver: "smtp",
        // pool: true,
        host: "in-v3.mailjet.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.MAIL_USERNAME, // generated ethereal user
          pass: process.env.MAIL_PASSWORD, // generated ethereal password
          // clientSecret: process.env.DO_SPACE_SECRET,
        },
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Support" <support@schoolscoop.co.in>', // sender address
        to: "ravindra.06446@gmail.com", // list of receivers
        subject: "Reset Password", // Subject line
        text: "Reset password  ", // plain text body
        html: link, // html body
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      console.log(`http://localhost:3000/forgot?token=${token}`);
      return res.status(200).json({ user: dataUser, token: token });
    } else {
      return res.json("User Not Exists");
    }
  } else if (method === "PUT") {
    const updatedData = await prisma.user.update({
      where: {
        email: "sdfsf@sdf",
      },
    });
  }
}
