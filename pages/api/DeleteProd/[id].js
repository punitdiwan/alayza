import prisma from "../../../lib/prisma";




export default async function handler(req, res) {

    const prodId = req.query.id;


    console.log(prodId, "idddddddddddddd")

      if (req.method === 'DELETE') {

    
    
        const deleteProduct = await prisma.product.delete({
            where: {
                id: Int(prodId),
            },
        });
        res.json(deleteProduct);


    }
}