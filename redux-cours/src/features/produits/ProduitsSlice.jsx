import { createSlice } from "@reduxjs/toolkit";

const produitsSlice = createSlice({
  name: "produits",
  initialState: {
    produits: [
      { id: "1", libelle: "apple", quantite: 3 },
      { id: "2", libelle: "orange", quantite: 5 },
      { id: "3", libelle: "bananna", quantite: 4 },
    ],
  },
  reducers: {
    addProduit: (state, action) => {
      state.produits.push(action.payload);
    },
    modifierProduit: (state, action) => {
      state.produits = state.produits.map((item) => {
        if (item.id == action.payload.id) {
          return { ...action.payload };
        }
        return item;
      });
    },
    deleteProduit: (state, action) => {
      state.produits = state.produits.filter((item) => {
        return item.id != action.payload;
      });
    },
  },
});

export const { addProduit, modifierProduit, deleteProduit } =
  produitsSlice.actions;
export default produitsSlice.reducer;
