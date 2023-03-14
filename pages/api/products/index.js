// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../../lib/prisma.js";
import AWS from "aws-sdk";

export default async function handler(req, res) {
  // const postId = parseInt(req.query.id);
  // console.log(postId, "iddddd");
  // console.log(req.body, "req.bodyyyy");

  // console.log(req.params,"id");
  const slug = req.query;
  // console.log(slug);

  if (req.method === "GET") {
    try {
      const data = await prisma.product.findMany({});
      return res.status(200).json(data);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  }
  //   else if (method === 'GET') {
  //     const data = await prisma.product.findUnique({
  //         where: {
  //             prod_id: req.query,
  //         },
  //     });
  //     console.log(data);
  //     return res.status(200).json(data);
  // }
  else if (req.method === "POST") {

    
    // AWS.config.update({
    //   accessKeyId: "DO00D6ZU6AK3QG7NDVTA",
    //   secretAccessKey: "stpTIAotvH67FwpgD4e2t3LbUBDj8iMt38T3sVfX7eE ",
    //   endpoint: "https://lmsimages.sgp1.digitaloceanspaces.com",
    // });


    // const s3 = new AWS.S3();
    // const params = {
    //   Bucket: 'zeba-ecom',
    //   Key: 'path/to/image.jpg',
    //   Body: imageFile,
    // };
    
    // s3.putObject(params, function(err, data) {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log('Image uploaded successfully',data);
    //   }
    // });

    const dataResp = await prisma.product.create(req.body);
    console.log(dataResp,'datatatatatata')
    return res.status(201).json(dataResp);
  } else {
    return res.status(405).json({ msg: "Method not allowed" });
  }
}
