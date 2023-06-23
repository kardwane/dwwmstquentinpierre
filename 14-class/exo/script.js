"use strict";
/**
 * ----------------------- EXO 1 -------------------------------------
 * Créer une classe facilitant l'usage du DOM.
 */
import S from "./EasyDom.js";
const s = new S(); 

const div = s.tag("div", {class: "truc bidule machin", id: "chaussette", src: "img.jpg", html: "test"});
console.log(div);
const span = s.select("span");
console.log(span);
s.event(span, "click", (e)=>{console.log(e);});
s.event(div, "click", (e)=>{console.log(e);});
div.click();

/**
 * ----------------------- EXO 2 -------------------------------------
 * Adapter le code du carousel en class.
 */
/**
 * ----------------------- EXO 3 -----------------------------------
 * Faire une version du carousel qui hérite de EasyDom et l'utilise.
 */
/**
 * ----------------------- EXO 4 -----------------------------------
 * Créer une calculatrice sous la forme d'une classe.
 */