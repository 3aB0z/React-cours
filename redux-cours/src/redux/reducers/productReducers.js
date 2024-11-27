const initialState = {
  products: [
    { id: "1", libelle: "apple", quantite: 3 },
    { id: "2", libelle: "orange", quantite: 5 },
    { id: "3", libelle: "bananna", quantite: 4 },
  ],
  ventes: [
    { id: "1", libelle: "apple", quantite: 6 },
    { id: "2", libelle: "ornage", quantite: 2 },
  ],
  categories: [],
};

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...state, products: [...state.products, action.payload] };
    case "UPDATE_PRODUCT":
      return {
        ...state,
        products: [
          ...state.products.map((item) => {
            if (item.id === action.payload.id) {
              return action.payload;
            }
            return item;
          }),
        ],
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: [
          ...state.products.filter((item) => {
            return item.id !== action.payload;
          }),
        ],
      };
    case "REMPLIR_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
}
