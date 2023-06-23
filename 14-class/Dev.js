"use strict";
import H from "./Human.js";

export default class Dev extends H{
    /**
     * avec le mot clef extends on permet l'héritage d'une classe.
     *  Ici notre nouvelle classe Dev hérite de notre class Human.
     * 
     * L'héritage permet de donner toute les propriétés et méthode du parent à son enfant.
     * Toute, pas exactement il n'est pas possible d'utiliser les propriétés et méthode privées.
     */
    /**
     * Créer un nouvel humain.
     * @param {string} prenom 
     * @param {string} nom 
     * @param {number|string} age 
     * @param {string|Array} tech 
     */
    constructor(prenom, nom, age, tech){
        /**
         * l'héritage JS entraine un problème, le mot clef "this" ne fonctionne plus.
         * Enfin il ne fonctionne plus juqu'à ce qu'on utilise "super()"
         * On utilise la fonction "super()" pour appeler le constructor du parent.
         * On lui donnera donc en argument les variables qui doivent y aller.
         */
        super(prenom, nom, age);
        this.techniques = tech;
    }
    set techniques(t){
        if(Array.isArray(t)){
            this.tech = t;
        }else{
            this.tech = [t];
        }
    }
    /**
     * Il est possible de réécrire la méthode d'un parent en la redéfinissant.
     * Ici this.salutation() de Humain n'existe plus et est remplacé par celle ci.
     * La méthode anniversaire qui faisait appelle à salutation dans la classe Humain
     * fera bien appelle à celle ci dans Dev.
     */
    salutation(){
        console.log(`Bonjour, je suis ${this.fullname} et j'ai ${this.age} et je maîtrise ${this.tech.join(", ")}`);
    }
}