let products = require("../data/products");
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

function update(id, product) {
  return new Promise((res, rej) => {
    const index = products.findIndex((p) => p.id === id);
    products[index] = { id, ...product };
    writeDataToFile("./data/products.json", products);
    res(products[index]);
  });
}

function removed(id) {
  return new Promise((res, rej) => {
    products = products.filter((it) => it.id !== id);
    writeDataToFile("./data/products.json", products);
    res();
  });
}
module.exports = {
  findAll,
  findById,
  create,
  update,
  removed
};
