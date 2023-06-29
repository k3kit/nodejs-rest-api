const products = require("../data/products");

function findAll() {
  return new Promise((res, rej) => {
    res(products);
  });
}

module.exports = {
  findAll,
};
