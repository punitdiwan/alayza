import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  const { query, method, body } = req;
  const deletedId = query.id;
  // console.log(query.id, "body-id");

  if (method === "DELETE") {
    // const product = await prisma.product.findUnique({
    //   where: {
    //     prod_id: query.id,
    //   },
    // });
    const deleteProduct = await prisma.product.delete({
      where: {
        id: parseInt(deletedId),
      },
    });
    console.log(deleteProduct);
    return res.status(200).json({});
  }
  // else if (method === "GET") {
  //   const product = await prisma.product.findUnique({
  //     where: {
  //       prod_id: String(query.id),
  //     },
  //   });
  //   console.log(product, "produxt-data");
  //   return res.status(200).json(product);
  // }
  else if (method === "PUT") {
    const records = body.data;
    console.log(records, "record");
    const updateProduct = await prisma.product.update({
      where: {
        // prod_id: query.id,
        id: 143,
      },
      data: body
    });
    return res.status(200).json(updateProduct);
  }
}
