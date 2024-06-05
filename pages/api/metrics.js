// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../lib/prisma"

export default async (req, res) => {
    let metrics = await prisma.$metrics.json()
    return res.status(200).json(metrics);
};
