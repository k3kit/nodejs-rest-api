const products = require("../data/products");
const { v4: uuid4 } = require("uuid");

const { writeDataToFile } = require("../utils/fs");
function findAll() {
  return new Promise((res, rej) => {
    res(products);
  });
}
function findById(id) {
  return new Promise((res, rej) => {
    const product = products.find((it) => it.id === id);
    res(product);
  });
}

function create(product) {
  return new Promise((res, rej) => {
    const newProduct = { id: uuid4(), ...product };
    products.push(newProduct);
    writeDataToFile("./data/products.json", products);
    res(newProduct);
  });
}
module.exports = {
  findAll,
  findById,
  create,
};
