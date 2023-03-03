import prisma from "../../../lib/prisma";




export default async function handler(req, res) {
    const { query, method, body } = req;
    if (method === 'DELETE') {
        const product = await prisma.product.findUnique({
            where: {
                prod_id: query.id,
            },
        });
        const deleteProduct = await prisma.product.delete({
            where: {
                id: parseInt(product.id),
            },
        });
        console.log(deleteProduct);
        return res.status(200).json({});
    }
    else if (method === 'GET') {
        const product = await prisma.product.findUnique({
            where: {
                prod_id: query.id,
            },
        });
        console.log(product);
        return res.status(200).json(product);
    }
    else if (method === "PUT") {
        const records =  body.data;
        const updateProduct = await prisma.product.update({
            where: {
                prod_id: query.id,
            },
           data: records
        })
        return res.status(200).json(updateProduct);

    }
}