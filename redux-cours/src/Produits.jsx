import { useDispatch, useSelector } from "react-redux";
import { fetchProduits } from "./redux/actions/productActions";
import { useEffect } from "react";

export default function Produits() {
  const produits = useSelector((state) => state.productReducer.produits);
  const dispatch = useDispatch();
  function handleAfficher() {
    console.log(produits);
  }

  useEffect(() => {
    dispatch(fetchProduits());
  }, [dispatch]);

  return (
    <>
      <button
        className="bg-amber-500 px-2 py-1 text-white rounded-md"
        onClick={handleAfficher}
      >
        Afficher Produits
      </button>

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
              Prix:
            </th>
            <th className="text-white py-2 border border-slate-500 bg-slate-800">
              Categorie:
            </th>
            <th className="text-white py-2 border border-slate-500 bg-slate-800">
              Quantite Stock:
            </th>
          </tr>
        </thead>
        <tbody>
          {produits.map((item, index) => {
            return (
              <tr key={index}>
                <td className="text-slate-200 p-2 border border-slate-500">
                  {item.id}
                </td>
                <td className="text-slate-200 p-2 border border-slate-500">
                  {item.libelle}
                </td>
                <td className="text-slate-200 p-2 border border-slate-500">
                  {item.prix}
                </td>
                <td className="text-slate-200 p-2 border border-slate-500">
                  {item.categorie}
                </td>
                <td className="text-slate-200 p-2 border border-slate-500">
                  {item.quantiteStock}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
