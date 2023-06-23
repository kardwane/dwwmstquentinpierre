"use strict";
/**
 * Faire fonctionner le compteur de la partie 1
 */
const btn1 = document.querySelector<HTMLButtonElement>("#compte")
let i = 0;
// "?" indique qu'il doit faire la suite que si btn1 n'est pas null.
btn1?.addEventListener("pointerdown", ()=>{
    i++;
    // Ici on a une erreur de détecté :
    // btn.textContent = i;
    // ici tout va bien.
    btn1.textContent = i.toString();
})
/**
 * montrer le ? traduit en JS sur une vieille version
 * montrer que typescript vérifie le nom des variables dans les différents fichiers.
 */
if(btn1){
    btn1.style.backgroundColor = "orange";
}
