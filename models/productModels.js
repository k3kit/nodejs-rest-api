const products = require("../data/products");

function findAll() {
  return new Promise((res, rej) => {
    res(products);
  });
}
function findById(id) {
  return new Promise((res, rej) => {
    const product = products.find((it) => it.id === id);
    resolve(product);
  });
}

module.exports = {
  findAll,
  findById,
};
