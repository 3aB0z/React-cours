/* eslint-disable react/prop-types */
export default function Etudiant({id, nom, prenom}) {
  return (
    <>
      <li>Id: {id}</li>
      <li>Nom: {nom}</li>
      <li>Prenom: {prenom}</li>
    </>
  );
}
