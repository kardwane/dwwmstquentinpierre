"use strict";
/**
 * EXERCICE :
 * Déclarer une variable painting à false.
 * déclarer une fonction "start position" qui prend un argument.
 *      passe painting à true, et appelle une fonction draw en 
 *      lui donnant son argument.
 * déclarer une fonction  "finished position" qui passe painting à 
 *      false puis fait un beginpath();
 * déclarer une fonction "draw" qui prend un argument.
 *      si painting est faux alors on met fin à la fonction
 *      sinon on donne une largeur de trait de 10,
 *      on donne une couleur noir,
 *      on met un linecap à round.
 *      on fait un lineTo sur la position x et y de la souris
 *          que l'on aura récupéré de notre argument.
 *      on fait un stroke 
 *      On fait un begin path
 *      On fait un moveTo à la position x et y de la souris.
 * Ajoutons 3 évènements sur notre canvas,
 *      mousedown on appelle startPosition
 *      mouseup on appelle finishedPosition
 *      mousemove on appelle draw
 * ------------- BONUS -----------------
 * Permettre de changer la couleur,
 * Permettre de changer la taille,
 * Permettre le retour en arrière (annuler)
 * Permettre le retour en avant (refaire)
 * Permettre de sauvegarder :
 *      L'utilisation de .toDataURL("image/png") pourra s'avérer utile
 * Permettre le chargement d'une image,
 *      L'utilisation de new FileReader() et de readAsDataURL pourra s'avérer utile.
 */


let painting = false, 
// Optionnelle.
color = "black", size = 10,
undoList = [], lastAction = [], redoList = [];
const canvas = document.querySelector('canvas'); 
const ctx = canvas.getContext("2d");

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);
/* cette première fonction est appelé quand on commence à dessiner */
function startPosition(e){
    painting = true;
    // pour faire des points au clique
    draw(e);
}
/* Cette seconde fonction est appelé quand on termine de dessiner */
function finishedPosition(){
    painting = false;
    ctx.beginPath();
    undoList.push(lastAction);
    lastAction = [];
}
/* cette fonction fera apparaître le dessin */
function draw(e){
    // Si on n'est pas en train de dessiner, on arrête la fonction.
    if(!painting) return;
    ctx.lineWidth = size;
    ctx.strokeStyle = color;
    ctx.lineCap = "round";
    let mouse = getMousePos(e);
    /* On dessine là où se trouve la souris. */
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
    // on augmente un peu la fluidité avec ceci: (optionnelle)
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);
    lastAction.push({
        x: mouse.x,
        y: mouse.y,
        color: color,
        size: size
    })
}
function getMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
function redraw(tab){
    tab.forEach(action =>{
        ctx.beginPath();
        action.forEach(move=>{
            ctx.strokeStyle = move.color;
            ctx.lineWidth = move.size;
            ctx.lineTo(move.x, move.y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(move.x, move.y);
        })
    })
    ctx.beginPath();
}
function keyboard(e){
    e.preventDefault();
    // Selon la touche pressé je lance différente fonctions.
    switch(e.key){
        case "s":
            save();
            break;
        case "l":
            load();
            break;
        case "c":
            chooseColor();
            break;
        case "z":
            undo();
            break;
        case "y":
            redo();
            break;
        case "+":
            size++;
            console.log(size);
            break;
        case "-":
            size = size<=1?1:--size;
            console.log(size);
            break;
    }
}
function load(){
    // je crée un nouvel element input
    let input = document.createElement("input");
    // je lui donne le type file
    input.setAttribute("type", "file");
    // je le clique
    input.click();
    // Quand je rentre un fichier.
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
                ctx.clearRect(0,0,canvas.width, canvas.height);
                //J'ajoute ma nouvelle image
                ctx.drawImage(img, 0,0);
            }
            /* J'ajoute à la source de mon image ce que me retourne
            mon lecteur */
            img.src = event.target.result;
        }
        // Je donne à mon lecteur, le fichier selectionné.
        reader.readAsDataURL(e.target.files[0]);
    }
}
function save(){
    /* On change les données du canvas en donnée png sous forme de
    string */
    let png = canvas.toDataURL("image/png");
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
}
function chooseColor(){
    // Je crée un nouvel element input
    let input = document.createElement("input");
    // je lui donne le type color
    input.setAttribute("type", "color");
    // et je clique dessus
    input.click();
    // Lorsque je rentre une couleur dans mon input
    input.oninput = function(e){
        // je donne sa valeur à ma variable color.
        color = e.target.value;
    }
}
function undo(){
    if(!undoList.length)return;
    let redoAction = undoList.pop();
    redoList.push(redoAction);
    ctx.clearRect(0,0,canvas.width, canvas.height);
    redraw(undoList);
}
function redo(){
    if(!redoList.length)return;
    let redoAction = redoList.pop();
    undoList.push(redoAction);
    redraw([redoAction]);
}
// On commence à dessiner quand on enfonce le bouton de la souris
canvas.addEventListener("mousedown", startPosition);
// On arrête quand on le relève.
canvas.addEventListener("mouseup", finishedPosition);
// On dessine quand on déplace la souris.
canvas.addEventListener("mousemove", draw);
// quand on appui sur une touche du clavier
document.addEventListener("keypress", keyboard);