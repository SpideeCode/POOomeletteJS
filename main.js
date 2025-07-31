//1
class Personnage {
    constructor(nom, lieu, argent, mainDroite = [], mainGauche = [] , ) {
        this.nom = nom
        this.lieu=lieu
        this.argent = argent
        this.mainDroite=mainDroite
        this.mainGauche=mainGauche
    }

    seDeplacer (lieu) {
        lieu.personnes.push(this)
        this.lieu=lieu.nom
        console.log(this.nom + " est actuellement à la " + this.lieu);

    }
    payerArticle (article) {
        this.argent-=article.prix
        console.log(`${this.nom} a paye ${article.nom} a ${article.prix} euros,  il lui reste ${this.argent}euros dans son compte`);
        
    }
    couper (ingredient, outil) {
        ingredient.etat=="coupé"
        console.log(`${ingredient.nom} a été coupé avec ${outil.nom}`)
    }
}

let perso1 = new Personnage("Ibrahim","",10)
//2
class Lieu {
    constructor(nom, personnes = []) {
        this.nom=nom
        this.personnes=personnes
    }
}

let maison = new Lieu ("Maison")

//3
class Outil {
    constructor(nom) {
        this.nom = nom;
        
    }

    cuire() {
        console.log("ça cuit...");
        setTimeout(() => {
                this.contenu[0].etat = "cuit";
                console.log("Notre omelette est cuite :)");
            
        }, 4000);
    }
}

let couteau = new Outil ("Couteau", "couper")

//4
class Ingredient {
    constructor(nom, etat, prix) {
        this.nom=nom
        this.etat=etat
        this.prix=prix

    }
}

let oignon = new Ingredient("Oignon", "entier",1)
let oeuf = new Ingredient("Oeufs", "piece",1)
let epice = new Ingredient("Epice", "piece",1)
let fromage = new Ingredient("Fromage", "entier",1)

//5
let epicerie = new Lieu("Epicerie")
epicerie.paniers = []
epicerie.contenu = [oignon,oeuf,epice,fromage]


class Panier {
    constructor(nom ,articles = []) {
        this.nom = nom
        this.articles=articles
    }
}

let panier1 = new Panier("panier1")
let panier2 = new Panier("panier2")
let panier3 = new Panier("panier3")
let panier4 = new Panier("panier4")
let panier5 = new Panier("panier5")


epicerie.paniers.push(panier1,panier2,panier3,panier4,panier5)



//6
let poele = new Outil("Poele")
poele.contenu = []

// poele.cuire = function () {
//     console.log("ca cuit")

//     setTimeout(() =>{}, 4000)
//     this.contenu[0].etat="cuit"


//     //  Cette méthode remplacera this.contenu par [l'objet newMelange].    
//     //pas compris
// }


//7
class Bol {
    constructor(contenu = []) {
        this.contenu = contenu
    }

    melanger (nomDuMelange) {
        console.log("les ingrédients ont été mélangé et ca donne " + nomDuMelange + " pas cuite")
        this.contenu= new Ingredient(nomDuMelange, "pas cuit", 0 )    //peut etre erreur
    }
}

let bol = new Bol()
///////////                 DEBUT DE L'OMELETTE 



//1
perso1.seDeplacer(maison)


//2
perso1.seDeplacer(epicerie)


perso1.mainDroite.push(epicerie.paniers[0])
epicerie.paniers.splice(0,1)
console.log(`${perso1.nom} a ${perso1.mainDroite.at(0).nom} dans sa main droite`);




//boucle qui fait que le perso met tous les articles de lepicerie dans son panier
epicerie.contenu.forEach(element => {
    perso1.mainDroite[0].articles.push(element)
      console.log(`${perso1.nom} a pris ${element.nom} `)
});



//fonction qui affiche les articles present dans le panier du perso
function contenuPanier (panier) {
    panier.forEach(element => {
        console.log(element.nom)
    });
}





//3
//le personnagepaye les articles qu'il a pris
perso1.mainDroite[0].articles.forEach(element => {
    perso1.payerArticle(element)
});

//retire ibrahim de lepicerie
epicerie.personnes.pop()

//mets ibrahim dans la maison 
perso1.seDeplacer(maison)
maison.personnes.push(perso1)


//mets les éléments dans le bol
perso1.mainDroite[0].articles.forEach(element => {
    bol.contenu.push(element)
    console.log(`${element.nom} ajouté au bol`)

});

//vide le panier
perso1.mainDroite[0].articles = perso1.mainDroite[0].articles.splice()

//retourne a lepicerie
perso1.seDeplacer(epicerie)
epicerie.paniers.push(perso1.mainDroite[0])

//vide la main
perso1.mainDroite=perso1.mainDroite.splice()
console.log(perso1.nom + " a déposé le panier")


//retourner a la maison pour continuer l'omelette
epicerie.personnes.pop()
perso1.seDeplacer(maison)
maison.personnes.push(perso1)

//couper les éléments entiers
bol.contenu.forEach(element => {
    if (element.etat=="entier") {
        perso1.couper(element,couteau)
    }
    
});

//mélange les elements dans le bol
bol.melanger("omelette")
poele.contenu.push(bol.contenu)

// cuire contenu poele
console.log("l'omelette est :" + poele.contenu[0].etat)
poele.cuire();


