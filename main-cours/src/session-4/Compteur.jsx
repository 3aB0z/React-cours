import { Component } from "react";

class Compteur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      etudiant: {
        id: "",
        designation: "",
        idCategorie: "",
        quantite: "",
        prix: ""
      },
      etudiants: [],
      categories: [
        { id: 1, libelle: "Consommable" },
        { id: 2, libelle: "Non Consommable" },
        { id: 3, libelle: "Informatique" }
      ],
    };
  }

  sommeTotal = 0;

  // incrementer = () => {
  //     this.setState({nombre:this.state.nombre + 1})
  // }

  // save = (e) => {
  //     e.preventDefault()
  //     this.setState({etudiants: [...this.state.etudiants, this.state.etudiant]})
  // }

  // handleClick = (e,etudiant) => {
  //     e.currentTarget.style.backgroundColor = "gray"
  //     this.setState({etudiant: {id: etudiant.id, nom: etudiant.nom, prenom: etudiant.prenom, age: etudiant.age}})
  // }

  handleAjouter = () => {
    this.setState({
      etudiants: [...this.state.etudiants, { ...this.state.etudiant }],
    });
  };

  supprimer = () => {
    this.setState({
      etudiants: this.state.etudiants.filter((item) => {
        return item.id !== this.state.etudiant.id;
      }),
    });
  };

  modifier = () => {
    this.setState({
      etudiants: this.state.etudiants.map((item) => {
        if (item.id === this.state.etudiant.id) {
          item = { ...this.state.etudiant };
        }
        return item;
      }),
    });
  };

  render() {
    return (
      <>
        {/* <h1>{this.state.nombre}</h1><br />
                <h1>{this.state.nom}</h1> */}

        {/* <h1 className="text-red-600 text-4xl text-center my-8 font-bold">GESTION DES STAGIAIRES AVEC CLASS COMPONENT</h1>
                <form className="w-full flex justify-center items-center">
                    <div className="w-64 flex flex-col items-center space-y-6">
                        <input className="bg-gray-300 w-full h-8 rounded-md outline-none pl-2" type="text" value={this.state.etudiant.id} onChange={(e)=>{this.setState({etudiant: {...this.state.etudiant, id: e.target.value}})}} />
                        <input className="bg-gray-300 w-full h-8 rounded-md outline-none pl-2" type="text" value={this.state.etudiant.nom} onChange={(e)=>{this.setState({etudiant: {...this.state.etudiant, nom: e.target.value}})}} />
                        <input className="bg-gray-300 w-full h-8 rounded-md outline-none pl-2" type="text" value={this.state.etudiant.prenom} onChange={(e)=>{this.setState({etudiant: {...this.state.etudiant, prenom: e.target.value}})}} />
                        <input className="bg-gray-300 w-full h-8 rounded-md outline-none pl-2" type="text" value={this.state.etudiant.age} onChange={(e)=>{this.setState({etudiant: {...this.state.etudiant, age: e.target.value}})}} />
                        <div className="flex flex-row justify-center items-center space-x-4">
                            <button className="bg-emerald-500 rounded-lg py-1 px-4 text-white text-lg" onClick={this.save}>Save</button>
                            <button className="bg-yellow-500 rounded-lg py-1 px-4 text-white text-lg" onClick={this.enregistrer}>Enregistrer</button>
                            <button className="bg-red-500 rounded-lg py-1 px-4 text-white text-lg" onClick={this.supprimer}>Supprimer</button>
                        </div>
                    </div>
                </form>

                <table className="w-[90%] mt-8 table-auto border-collapse bg-slate-700 mx-auto">
                    <thead>
                        <tr>
                            <th className="text-white py-2 border border-slate-500 bg-slate-800">Id</th>
                            <th className="text-white py-2 border border-slate-500 bg-slate-800">Nom</th>
                            <th className="text-white py-2 border border-slate-500 bg-slate-800">Prenom</th>
                            <th className="text-white py-2 border border-slate-500 bg-slate-800">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.etudiants.map((item) => (
                            <tr key={item.id} onClick={(e)=>{this.handleClick(e,item)}}>
                                <td className="text-slate-200 p-2 border border-slate-500">{item.id}</td>
                                <td className="text-slate-200 p-2 border border-slate-500">{item.nom}</td>
                                <td className="text-slate-200 p-2 border border-slate-500">{item.prenom}</td>
                                <td className="text-slate-200 p-2 border border-slate-500">{item.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table> */}

        <fieldset className="table-container p-4">
          <legend>Nouvelle ligne</legend>

          <div className="form-row">
            <label htmlFor="id">ID :</label>
            <input
              type="text"
              value={this.state.etudiant.id}
              name="id"
              className="bg-gray-50 w-48 border"
              onChange={(e) =>
                this.setState({
                  etudiant: { ...this.state.etudiant, id: e.target.value },
                })
              }
            />
          </div>

          <div className="form-row">
            <label htmlFor="designation">Designation :</label>
            <input
              type="text"
              value={this.state.etudiant.designation}
              name="designation"
              className="bg-gray-50 w-48 border"
              onChange={(e) =>
                this.setState({
                  etudiant: {
                    ...this.state.etudiant,
                    designation: e.target.value,
                  },
                })
              }
            />
          </div>

          <div className="form-row">
            <label htmlFor="quantite">Quantité :</label>
            <input
              type="text"
              value={this.state.etudiant.quantite}
              name="quantite"
              className="bg-gray-50 w-48 border"
              onChange={(e) =>
                this.setState({
                  etudiant: {
                    ...this.state.etudiant,
                    quantite: e.target.value,
                  },
                })
              }
            />
          </div>

          <div className="form-row">
            <label htmlFor="prix">Prix :</label>
            <input
              type="text"
              value={this.state.etudiant.prix}
              name="prix"
              className="bg-gray-50 w-48  border"
              onChange={(e) =>
                this.setState({
                  etudiant: { ...this.state.etudiant, prix: e.target.value },
                })
              }
            />
          </div>

          <div className="form-row">
            <label htmlFor="prix">Catégorie :</label>
            <select
              value={this.state.etudiant.idCategorie}
              onChange={(e) =>
                this.setState({
                  etudiant: {
                    ...this.state.etudiant,
                    idCategorie: e.target.value,
                  },
                })
              }
              className="bg-gray-50 w-48 h-7 border"
            >
              {this.state.categories.map((item) => {
                return <option key={item.id}>{item.libelle}</option>;
              })}
            </select>
          </div>

          <button id="ajouter" onClick={this.handleAjouter}>
            Ajouter
          </button>
        </fieldset>

        <div className="table-container">
          <h1>Liste des etudiants</h1>
          <table className="custom-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Désignation</th>
                <th>Catégorie</th>
                <th>Quantité</th>
                <th>Prix</th>
                <th>Prix total</th>
              </tr>
            </thead>
            <tbody id="tdata">
              {this.state.etudiants.map((item, index) => {
                let prixTotal = Number(item.prix) * Number(item.quantite);
                this.sommeTotal += prixTotal;
                let coleurQuantite = "black";

                if (item.quantite < 5) {
                  coleurQuantite = "red";
                } else if (item.quantite >= 5 && item.quantite < 20) {
                  coleurQuantite = "blue";
                } else {
                  coleurQuantite = "green";
                }

                return (
                  <tr
                    key={index}
                    onClick={() => this.setState({ etudiant: { ...item } })}
                    className={`hover:bg-red-300 cursor-pointer ${
                      item.id === this.state.etudiant.id
                        ? "bg-red-300"
                        : "bg-white"
                    } `}
                    tabIndex={1}
                  >
                    <th>{item.id}</th>
                    <td>{item.designation}</td>
                    <td>{item.idCategorie}</td>
                    <td className="note" style={{ color: coleurQuantite }}>
                      {item.quantite}
                    </td>
                    <td>{item.prix}</td>
                    <td>{prixTotal}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="2" id="best">
                  Prix total :
                </th>
                <td id="best-note" colSpan="4">
                  {this.sommeTotal}
                </td>
              </tr>
            </tfoot>
          </table>
          <div className="py-3">
            <button
              className="btn-supprimer bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md"
              onClick={this.supprimer}
            >
              Supprimer
            </button>
            <button className="btn-modifier" onClick={this.modifier}>
              modifier
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Compteur;
