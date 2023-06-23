"use strict";
//-------------------------------- EXO 2 ---------------------------------
/**
 * 1. Transformer l'application de dessin en un unique objet.
 * 2. Ajouter une méthode Init() qui aura pour rôle de selectionner le canvas et lancer les écouteurs 
 *      d'évènements.
 * 3. Intégrez le resize() à la méthode Init()
 * 3. changer l'objet pour qu'au lieu de selectionner un canvas existant, il en crée un.
 * 4. changer la méthode init() pour lui donner un argument optionnel :
 *      Si on ne lui donne rien, il ajoutera le canvas au body et le resize se fera selon la taille du viewport
 *      Si on lui donne un élément html, il ajoutera le canvas à cet élément et son resize se fera selon la taille de l'élément.
 */
const paint = {
    painting: false,
    color: "black",
    size: 10,
    undoList: [], 
    lastAction: [], 
    redoList: [],
    canvas: document.createElement("canvas"),
    init: function(parent= false){
        this.ctx = this.canvas.getContext("2d");
        //Si on nous donne un parent, on met le canvas dedans, sinon on le met dans le body.
        if(parent){
            parent.append(this.canvas);
        }else{
            document.body.append(this.canvas);
        }
        this.parent = parent;
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
        // On commence à dessiner quand on enfonce le bouton de la souris
        this.canvas.addEventListener("mousedown", this.startPosition.bind(this));
        // On arrête quand on le relève.
        this.canvas.addEventListener("mouseup", this.finishedPosition.bind(this));
        // On dessine quand on déplace la souris.
        this.canvas.addEventListener("mousemove", this.draw.bind(this));
        // quand on appui sur une touche du clavier
        document.addEventListener("keypress", this.keyboard.bind(this));
    },
    resize: function(){
        // Si on a un parent, on adapte la taille du canvas à celui du parent, sinon à celui du viewport
        if(this.parent){
            this.canvas.width = this.parent.offsetWidth;
            this.canvas.height = this.parent.offsetHeight;
            return;
        }
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    },
    startPosition: function(e){
        this.painting = true;
        // pour faire des points au clique
        this.draw(e);
    },
    finishedPosition: function(){
        this.painting = false;
        this.ctx.beginPath();
        this.undoList.push(this.lastAction);
        this.lastAction = [];
    },
    draw: function(e){
        // Si on n'est pas en train de dessiner, on arrête la fonction.
        if(!this.painting) return;
        this.ctx.lineWidth = this.size;
        this.ctx.strokeStyle = this.color;
        this.ctx.lineCap = "round";
        let mouse = this.getMousePos(e);
        /* On dessine là où se trouve la souris. */
        this.ctx.lineTo(mouse.x, mouse.y);
        this.ctx.stroke();
        // on augmente un peu la fluidité avec ceci: (optionnelle)
        this.ctx.beginPath();
        this.ctx.moveTo(mouse.x, mouse.y);
        this.lastAction.push({
            x: mouse.x,
            y: mouse.y,
            color: this.color,
            size: this.size
        })
    },
    getMousePos: function(evt) {
        var rect = this.canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    },
    redraw: function(tab){
        tab.forEach(action =>{
            this.ctx.beginPath();
            action.forEach(move=>{
                this.ctx.strokeStyle = move.color;
                this.ctx.lineWidth = move.size;
                this.ctx.lineTo(move.x, move.y);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(move.x, move.y);
            })
        })
        this.ctx.beginPath();
    },
    keyboard: function(e){
        e.preventDefault();
        // Selon la touche pressé je lance différente fonctions.
        switch(e.key){
            case "s":
                this.save();
                break;
            case "l":
                this.load();
                break;
            case "c":
                this.chooseColor();
                break;
            case "z":
                this.undo();
                break;
            case "y":
                this.redo();
                break;
            case "+":
                this.size++;
                console.log(this.size);
                break;
            case "-":
                this.size = this.size<=1?1:--this.size;
                console.log(this.size);
                break;
        }
    },
    load: function(){
        // je crée un nouvel element input
        let input = document.createElement("input");
        // je lui donne le type file
        input.setAttribute("type", "file");
        // je le clique
        input.click();
        // Quand je rentre un fichier.
        let that = this;
        input.oninput = function(e){
            // Je crée un lecteur de fichier.
            let reader = new FileReader();
            // quand je charge un fichier dans mon lecteur
            reader.onload = function(event){
                //je crée une nouvelle image.
                let img = new Image();
                // quand mon image est chargé:
                img.onload = function(){
                    // je vide mon canvas
                    that.ctx.clearRect(0,0,that.canvas.width, that.canvas.height);
                    //J'ajoute ma nouvelle image
                    that.ctx.drawImage(img, 0,0);
                }
                /* J'ajoute à la source de mon image ce que me retourne
                mon lecteur */
                img.src = event.target.result;
            }
            // Je donne à mon lecteur, le fichier selectionné.
            reader.readAsDataURL(e.target.files[0]);
        }
    },
    save: function(){
        /* On change les données du canvas en donnée png sous forme de
        string */
        let png = this.canvas.toDataURL("image/png");
        /* On vient remplacer son type mime par un autre plus apte
        au transfère de donnée. */
        png.replace("image/png", "application/octet-stream");
        // Je crée un lien
        let link = document.createElement("a");
        // Je viens lui ajouter l'attribut download avec le nom du fichier.
        link.setAttribute("download", "SauvegardeCanvas.png");
        // On lui ajoute son href avec mon image en valeur.
        link.setAttribute("href", png);
        // et on le clique
        link.click();
    },
    chooseColor: function(){
        // Je crée un nouvel element input
        let input = document.createElement("input");
        // je lui donne le type color
        input.setAttribute("type", "color");
        // et je clique dessus
        input.click();
        // Lorsque je rentre une couleur dans mon input
        input.oninput = function(e){
            // je donne sa valeur à ma variable color.
            this.color = e.target.value;
        }.bind(this)
    },
    undo: function(){
        if(!this.undoList.length)return;
        let redoAction = this.undoList.pop();
        this.redoList.push(redoAction);
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.redraw(this.undoList);
    },
    redo: function(){
        if(!this.redoList.length)return;
        let redoAction = this.redoList.pop();
        this.undoList.push(redoAction);
        this.redraw([redoAction]);
    }
}
export default paint;