"use strict";
/**
 * ------------------------ EXO 1 -----------------------------
 * Créer un objet qui contiendra un jeu de plus ou moins et l'exporter dans un autre script pour lancer
 * le jeu. 
 * Le jeu devra être généré entièrement par JS
 * le jeu devra contenir au moins un input de type nombre, un bouton pour valider, et un p pour 
 * afficher les messages du jeu.  Mais vous êtes libre de le personaliser plus que cela.
 */
const Game = {
    create: function(){
        this.input = document.createElement("input");
        this.input.setAttribute("type","number");
        this.btn = document.createElement("button");
        this.btn.textContent = "Tenter";
        this.p = document.createElement("p");
        this.p.textContent = "Choisi un nombre entre 0 et 100";
        const div = document.createElement("div");
        div.style.display = "flex";
        div.style.flexDirection = "column";
        div.style.alignItems = "center";
        div.append(this.p, this.input, this.btn);
        this.btn.addEventListener("click", this.check.bind(this));
        return div;
    },
    start: function(){
        this.target = Math.floor(Math.random()*100);
        this.input.focus();
    },
    check: function(){
        if(this.input.value <this.target){
            this.p.textContent = "C'est plus grand !";
        }else if(this.input.value > this.target){
            this.p.textContent = "C'est plus petit !";
        }else{
            this.p.textContent= "Félicitation tu as gagné !";
            this.btn.disabled = true;
        }
        this.input.value = "";
    }
}
export default Game;