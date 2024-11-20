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
