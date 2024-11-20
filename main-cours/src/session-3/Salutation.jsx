import Etudiant from './Etudiant'

export default function Salutation() {
    let listEtudiants = [
        {id: 1, nom: "Nom 1", prenom: "prenom 1"},
        {id: 2, nom: "Nom 2", prenom: "prenom 2"},
        {id: 3, nom: "Nom 3", prenom: "prenom 3"},
        {id: 4, nom: "Nom 4", prenom: "prenom 4"}
    ]
    // let isLogged = true
    // let nom = 'Youssef'
    return(
        <>
            {/* {
                isLogged ? <h1>Welcome {nom}</h1> : <h1>You are guest member</h1>
            } */}
            {/* {
                isLogged && <h1>Welcome {nom}</h1>
            } */}
            {/* <h1>{isLogged ? 'Welcome' + nom : 'You are guest member'}</h1> */}
            {/* <ul>
                {
                    listEtudiants.map((item) => {
                        return <li key={item.id}>id: {item.id}, nom: {item.nom}, prenom: {item.prenom}</li>
                    })
                }
            </ul> */}
            {
                listEtudiants.map((item, index) => {
                    return <Etudiant key={index} id={item.id} nom={item.nom} prenom={item.prenom} />
                })
            }
        </>
    )
}