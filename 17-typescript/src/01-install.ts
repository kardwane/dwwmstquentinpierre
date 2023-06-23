"use strict";
/**
 * Typescript est une surcouche à Javascript, c'est à dire que tout ce que vous êtes capable 
 * de faire en JS est faisable en Typescript. 
 * Mais au contraire d'une simple librairie, on se trouve dans des fichiers .ts
 * Le défaut à cela c'est que ces fichiers sont ilisible pour nos navigateurs.
 * Il va falloir compiler notre code en Javascript avant de pouvoir le lire.
 * ------------------ Avantage -----------------------
 * TS apporte le typage, cela nous force à coder avec rigueur en indiquant le type de chaque
 * variable, argument... 
 * Cela peut nous permettre d'éviter plus facilement certaines erreurs et nous faire gagner du
 * temps
 * Il peut nous permettre de faire un code moderne et l'adapter à des vieux navigateurs.
 * à la différence d'une bibliothèque, une fois compilé, il n'y a rien à ajouté à votre site.
 * Votre code ne sera pas plus lourd.
 * ------------------ Désaventage ---------------------
 * On est forcé de compiler nos codes.
 * Cela rajoute un outil en plus qu'on doit paramétrer sur nos projets.
 * ------------------ Installation ---------------------
 * Nous avons besoin de NPM.
 * https://www.youtube.com/watch?v=uOuulpBs8dQ&list=PLjwdMgw5TTLX1tQ1qDNHTsy_lrkCt4VW3&index=2
 * check npm init -y
 * npm install typescript --save-dev (check for --save-dev) (ou -g pour du global)
 * Compiler dans le même dossier :
 * En local:
 * npx tsc script.ts
 * En global :
 * tsc script.ts
 * Compiler dans un dossier différent :
 * tsc src/script.ts --outDir dist
 * Pour éviter de ce répéter, il est possible de créer un fichier de configuration tsconfig.json
 * (ajout compilerOptions>outDir et files)
 * Une fois cela fait, il suffit de lancer la commande "tsc" seule
 * Mais là encore relancer la fonction est ennuyant, alors on peut la lancer avec l'option watch
 * tsc --watch
 */
// const btn = document.querySelector("#compte")
// let i = 0;
// btn.addEventListener("pointerdown", ()=>{
//     i++;
//     // Ici on a une erreur de détecté :
//     // btn.textContent = i;
//     // ici tout va bien.
//     btn.textContent = i.toString();
// })
/**
 * Par défaut, typescript compile pour des navigateurs un peu agé, donc on verra par exemple
 * nos let et const remplacé par des var et ma fonction fléché supprimé.
 * On peut ajouter l'option target à compilerOptions pour changer ça.
 * 
 * Si je fais des erreurs, elles me seront indiqué dans le terminal, parfois avec de plus grosses aides
 * que JS comme en indiquant une possible correction.
 * Mais le code sera quand même compilé.
 */
// btns.style.backgroundColor = "orange";
// btn.style.backgroundColor = "orange";
/**
 * Ajouter "noEmitOnError": true à compilerOptions bloquera la compilation en cas d'erreur
 * Si on veut s'ajouter plus de difficulté mais avoir un code beaucoup plus professionnel,
 * on peut aussi activer l'option "strict": true qui nous ajoutera de nombreuses erreurs
 * qui pourraient se produire.
 * Nous allons voir ça dans le prochain fichier.
 */
