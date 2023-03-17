// import products from "./products";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


// const []

const products = [
  {
    prod_id: "isdifhskhfkshf",
    price: 40,
    name: "Herbal lotion",
    brand: "zebdermm",
    description: "Herbal product which is made by herbal leafs ",
    qty: 1,
    category: "lotion",
    image: "https://picsum.photos/200/300",
  },
  {
    prod_id: "sdhfksjfhdfsdfsf",
    price: 60,
    name: "Herbal lotion",
    brand: "zebdermm",
    description: "Herbal product which is made by herbal leafs ",
    qty: 1,
    category: "lotion",
    image: "https://picsum.photos/200/300",
  },
  {
    prod_id: "ehdkjdhgjkdfhg",
    price: 80,
    name: "Herbal cream",
    brand: "zebdermm",
    description: "Herbal product which is made by herbal leafs ",
    qty: 1,
    category: "cream",
    image: "https://picsum.photos/200/300",
  },
  {
    prod_id: "jhfdghkdfjg",
    price: 150,
    name: "Herbal cream",
    brand: "zebdermm",
    description: "Herbal product which is made by herbal leafs ",
    qty: 1,
    category: "cream",
    image: "https://picsum.photos/200/300",
  },
  {
    prod_id: "fdjgdjkgjdfg",
    price: 150,
    name: "Herbal powder",
    brand: "zebdermm",
    description: "Herbal product which is made by herbal leafs ",
    qty: 1,
    category: "powder",
    image: "https://picsum.photos/200/300",
  },
  {
    prod_id: "fdgldjgldjgjdlfg",
    price: 150,
    name: "Herbal powder",
    brand: "zebdermm",
    description: "Herbal product which is made by herbal leafs ",
    qty: 1,
    category: "powder",
    image: "https://picsum.photos/200/300",
  },
];

async function main() {
  for (let product of products) {
    await prisma.product.create({
      data: product,
    });
  }
  console.log("seeding..");
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });




