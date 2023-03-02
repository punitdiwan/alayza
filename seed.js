const { PrismaClient } = require('@prisma/client');
const {  products } = require('./data.js');
const prisma = new PrismaClient();

const load = async () => {
  try {

    await prisma.product.createMany({
      data: products,
    });
    console.log('Added product data');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
