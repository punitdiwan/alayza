import prisma from "../../../lib/prisma";
var jwt = require("jsonwebtoken");
const SECRET_KEY = "USERSAPI";
let Mailjet = require("node-mailjet");

export default async function handler(req, res) {
  const { query, method, body } = req;
  // console.log(query.id,"id")

  if (req.method === "GET") {
    const dataUser = await prisma.user.findUnique({
      where: {
        email: query.id,
      },
    });
    const token = jwt.sign(
      { email: dataUser?.email, name: dataUser?.name },
      SECRET_KEY
    );

    // console.log(dataUser, "email");
    if (dataUser) {
      let link = `${process.env.FORGOT_URL}/forgot?token=${token}`;

      const mailjet = Mailjet.apiConnect(
        process.env.MAIL_USERNAME,
        process.env.MAIL_PASSWORD
      );
      const request = mailjet.post("send", { version: "v3.1" }).request({
        Messages: [
          {
            From: { Email: "no-reply@maitretech.com", Name: "Support" },
            To: [{ Email: dataUser.email }],
            TemplateID: 4653160,
            TemplateLanguage: true,
            Variables: { FORGET_PASSWORD_LINK: link },
            Subject: "Reset Password",
          },
        ],
      });
      request
        .then((result) => {
        })
        .catch((err) => {
          console.log(err.statusCode);
        });

      console.log(`http://localhost:3000/forgot?token=${token}`);
      return res.status(200).json({ user: dataUser, token: token });
    }
  }else {
    return res.status(405).json( "User Not Exists" );
  }
}
