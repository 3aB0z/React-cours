export let anne=2020
anne=20000
export let anne1=anne
anne1=3333
class Etudiant{
    constructor(id,nom,prenom){
        this.id=id
        this.nom=nom
        this.prenom=prenom
    }
    app(){
        return "Nom:"+" "+this.nom
    }
}
//Template littéral (literal template)

export function greeting(){  
    return `anne:${anne}` 
}
//opérateur conditionnel ternaire
let note =11
export let décision= note>10 ? "Admis":"Redoublant"
let isStudent=true
export let observation=isStudent==true ? "He is student": ""
//obligatoire
export default Etudiant
