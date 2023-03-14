import prisma from "../../../lib/prisma";
var jwt = require("jsonwebtoken");
const SECRET_KEY = "USERSAPI";
let Mailjet = require("node-mailjet");

export default async function handler(req, res) {
  const { query, method, body } = req;

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
    if (dataUser) {
      let link = `http://localhost:3000/forgot?token=${token}`;

      const mailjet = Mailjet.apiConnect(
        "9cc1335e98c4ec0281b2d9f1d5aaeccb",
        "147dc0800206e55d654467f8923bdba9"
      );
      const request = mailjet.post("send", { version: "v3.1" }).request({
        Messages: [
          {
            From: { Email: "no-reply@maitretech.com", Name: "Support" },
            To: [{ Email: "ravindra.064464@gmail.com" }],
                TemplateID: 4653160,
                "TemplateLanguage": true,
            "Variables": { "FORGET_PASSWORD_LINK": link },
            Subject: "Reset Password",
          },
        ],
        //
      });
      request
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err.statusCode);
        });

      console.log(`http://localhost:3000/forgot?token=${token}`);
      return res.status(200).json({ user: dataUser, token: token });
    }
  }
}
