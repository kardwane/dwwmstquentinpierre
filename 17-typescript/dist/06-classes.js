"use strict";
class Truc {
    /**
     * Attention, les public, protected et private défini en TS ne le seront pas en JS.
     */
    prenom = "Maurice";
    nom = "Dupont";
    age = 54;
}
const t = new Truc();
t.prenom;
// Les champs protected et private ne sont pas accessible à l'exterieur.
// t.nom;
// t.age;
class Machin extends Truc {
    constructor() {
        super();
        this.prenom;
        this.nom;
        // Le champ privé n'est pas accessible en héritage.
        // this.age;
    }
    faireUnTruc() {
        // On précise que this devra être un HTMLElement 
        // ce qui nous donne facilement accès aux méthodes correspondantes.
        console.log(this);
    }
}
// Ma classe va contenir un type qui revient en plusieurs endroit.
class Collection {
    items;
    // Ma variable est automatiquement sauvegardé dans mon objet.
    constructor(items) {
        this.items = items;
    }
    //Mon constructeur récupère un tableau d'un type.
    addOne(arg) {
        // Ma méthode va récupérer un argument de ce type.
        this.items.push(arg);
        return this;
    }
    addMore(arg) {
        // Ma méthode va récupérer un tableau de ce même type.
        this.items.push(...arg);
        return this;
    }
}
const c = new Collection([5, 4, 8, 9]);
/**
 * Petite astuce pas lié à TS mais à la POO.
 * Il arrive souvent qu'on ai des méthodes qui ne retournent rien.
 * (comme ici addOne et addMore)
 * On va alors leur faire retourner leur propre instance (this)
 * cela nous permettra de chaîner les méthodes:
 */
c.addOne(42).addMore([0, 1, 2, 3]).addOne(21);
console.log(c);
class Triangle {
    c1 = 5;
    c2 = 8;
    c3 = 2;
}
class Rectangle {
    c1 = 12;
    c2 = 20;
}
function getC1(arg) {
    return arg.c1;
}
/**
 * La comparaison des objets se fait selon leurs propriétés, getC1 attend un rectangle,
 * donc un objet qui contient c1 et c2
 * alors lui donner Triangle qui a bien ces mêmes propriétés ne le dérangera pas.
 */
getC1(new Triangle);
