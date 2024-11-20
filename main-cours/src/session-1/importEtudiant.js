import Stagiaire,{anne as year ,anne1,greeting,décision, observation} from "./script.js";
let etudiant1=new Stagiaire(1,"Zakaria","Ouchouid")
console.log(etudiant1)
console.log(etudiant1.app())
console.log(year)
console.log(anne1)
console.log(greeting())
console.log(décision)
console.log( observation)
let personne={"nom":"Zakaria","prenom":"lsjdklsjd","note":433}
console.log(personne["nom"])
console.log(personne.nom)
let stagiaires=[]
stagiaires.push({"nom":"Zakaria","prenom":"Ahmed","note":433})
stagiaires.push({"nom":"Abdo","prenom":"lsjdklsjd","note":434})
stagiaires.push({"nom":"Hamza","prenom":"Ahmed","note":435})
stagiaires.push({"nom":"Zakaria","prenom":"lsjdklsjd","note":436})

console.log(stagiaires[2].note)
console.log(stagiaires[2]["note"])
//déconstraction d'un objet
let {id,prenom,nom}=etudiant1
console.log(`Hi ${id} ${nom} ${prenom}`)
//Opération sur les tableaux
let nomStagiaires=stagiaires.map(function(element,index){
    return element.note
})
console.log(nomStagiaires)
let nomCompletStagiaires=stagiaires.map(function(element){
    // return {"nom":element.nom,"prenom":element.prenom}
    return {nomComplet:element.nom+" "+element.prenom,note:element.note}
})
"map=>new array affecté lwa7d lvariable b return"

console.log(nomCompletStagiaires)
console.log(nomCompletStagiaires[0]["nomComplet"])
let noteStagiaire=stagiaires.find((item)=>{
    return item.note===434
})
console.log(noteStagiaire.nom)
// let nomStagiaires2=stagiaires.filter((item)=>{
//     return item.prenom==="Ahmed"
// })
let nomStagiaires2=stagiaires.filter((item)=>{
    return item.prenom==="Ahmed"
}).map((item)=>{
    return item.note
})
console.log(nomStagiaires2)
//reduce
let total=stagiaires.reduce((accumalator,item)=>{
    return accumalator+item.note
},0)
let nombre=4

console.log(facteurielNombre)
console.log(total/stagiaires.length)