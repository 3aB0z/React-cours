import { useDispatch, useSelector } from "react-redux";
import {
  addProduit,
  deleteProduit,
  modifierProduit,
} from "./features/produits/ProduitsSlice";
import { useState } from "react";

function Produits() {
  const [form, setForm] = useState({
    id: "",
    libelle: "",
    quantite: "",
  });
  const produits = useSelector((state) => state.produits.produits);
  // const categories = useSelector((state) => state.productReducer.categories);

  const dispatch = useDispatch();

  const handleAddProduct = () => {
    setForm({
      id: "",
      libelle: "",
      quantite: "",
    });
    dispatch(addProduit({ ...form }));
  };

  const handleModifierProduct = () => {
    setForm({
      id: "",
      libelle: "",
      quantite: "",
    });
    dispatch(modifierProduit({ ...form }));
  };

  const handleDeleteProduct = () => {
    dispatch(deleteProduit(form.id));
    setForm({
      id: "",
      libelle: "",
      quantite: "",
    });
  };

  const changeInputValue = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div>
          <h1 className="text-sky-600 mt-8 text-center text-4xl font-bold">
            Products
          </h1>
          <table className="mt-8 border-collapse bg-slate-700 mx-auto">
            <thead>
              <tr>
                <th className="text-white py-2 border border-slate-500 bg-slate-800">
                  Id:
                </th>
                <th className="text-white py-2 border border-slate-500 bg-slate-800">
                  Libelle:
                </th>
                <th className="text-white py-2 border border-slate-500 bg-slate-800">
                  Quantite:
                </th>
              </tr>
            </thead>
            <tbody>
              {produits.map((item) => {
                return (
                  <tr
                    className="hover:cursor-pointer"
                    key={item.id}
                    onClick={() => setForm({ ...item })}
                  >
                    <td className="text-slate-200 p-2 border border-slate-500">
                      {item.id}
                    </td>
                    <td className="text-slate-200 p-2 border border-slate-500">
                      {item.libelle}
                    </td>
                    <td className="text-slate-200 p-2 border border-slate-500">
                      {item.quantite}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="bg-slate-300 py-12 px-16 m-12 rounded-3xl flex flex-col items-center">
          <label>Id:</label>
          <input
            type="text"
            value={form.id}
            onChange={(e) => changeInputValue(e)}
            name="id"
          />
          <label className="mt-4">Libelle:</label>
          <input
            type="text"
            value={form.libelle}
            onChange={(e) => changeInputValue(e)}
            name="libelle"
          />
          <label className="mt-4">Quantite:</label>
          <input
            type="number"
            value={form.quantite}
            onChange={(e) => changeInputValue(e)}
            name="quantite"
          />
          {/* This select is temporary, it's just for test */}
          {/* <select className="h-8 mt-8">
            <option className="text-slate-500" value="">
              Selectionner un produit
            </option>
            {categories.map((item, index) => {
              return (
                <option key={index} value={item.id + item.libelle}>
                  {item.libelle}
                </option>
              );
            })}
          </select> */}
          {/* The end of the temporary code */}
          <div>
            <button
              className="bg-green-500 px-3 py-2 mt rounded-lg text-white"
              onClick={handleAddProduct}
            >
              Ajouter
            </button>
            <button
              className="bg-yellow-500 px-3 py-2 mt-8 ml-2 rounded-lg text-white"
              onClick={handleModifierProduct}
            >
              Modifier
            </button>
            <button
              className="bg-red-500 px-3 py-2 mt-8 ml-2 rounded-lg text-white"
              onClick={handleDeleteProduct}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Produits;
