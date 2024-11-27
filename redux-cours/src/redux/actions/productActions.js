export function addProductAction(newProduct) {
  return {
    type: "ADD_PRODUCT",
    payload: newProduct,
  };
}

export function updateProductAction(newProduct) {
  return {
    type: "UPDATE_PRODUCT",
    payload: newProduct,
  };
}

export function deleteProductAction(idProduct) {
  return {
    type: "DELETE_PRODUCT",
    payload: idProduct,
  };
}

export function fetchProduits() {
  return (dispatch /*, getState*/) => {
    fetch("http://196.127.103.9:3000/api/produits")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({
          type: "REMPLIR_CATEGORIES",
          payload: data,
        });
      });
  };
}
