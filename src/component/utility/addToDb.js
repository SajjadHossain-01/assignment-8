const getStoredProdect = () => {
  const storedProductStr = localStorage.getItem("product-id");
  if (storedProductStr) {
    const storedproduts = JSON.parse(storedProductStr);
    return storedproduts;
  } else {
    return [];
  }
};

const addStoredProduct = (id) => {
  const storedProduct = getStoredProdect();
  if (storedProduct.includes(id)) {
    console.log("object");
  }
  else{
    storedProduct.push(id)
    const storedListStr = JSON.stringify(storedProduct);
    
    console.log(storedListStr);
    localStorage.setItem("product-id", storedListStr)
  }
};
export {addStoredProduct , getStoredProdect}