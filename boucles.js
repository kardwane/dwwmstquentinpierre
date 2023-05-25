//! les boucles sont des instructions permettant de repeter plusieur fois une ou plusieurs opérations

//! en JS il existe plusieurs type de boucles

//?la 1ere, la boucle tant que (while) , structure :
// while(condition de répétition) {
//     bloc d'instruction
//     a repeter
// }

//en application
let count = 11; //j'initialise mon compteur à 0
while (count <= 10) {
	// condition de repetiton (ici je repete tant que mon compteur et inférieur à 10)
	console.log(`répétition while n°${count}`); // l'opération a répéter
	// console.log("répétition n°" + count);
	//je n'oublie pas d'incrémenter mon compteur (pour passer au tour suivant)
	// count++; // similaire a count = count + 1
	count += 2; // similaire a count = count + 2
}

//? la seconde, la boucle pour, la structure
// for (valeur compteur de départ; valeur compteur de fin; condition d'incrémenation) {
//     bloc d'instruction
//     a repeter
// }

// TODO par convention le compteur de boucle ne s'appel "count" mais "i"

console.log("============================================================");

//en application
for (let i = 0; i <= 5; i++) {
    console.log(`répétition for n°${i}`); // l'opération a répéter
}

//  si vous ne savez pas choisir entre la boucle for et la boucle while, utilisez la boucle for si vous connaissez à l'avance le nombre de répétition à faire, ou utilisez la boucle while si vous connaissez à l'avance le nombre de répétition à faire

console.log("============================================================");

//?boucle n°3 la boucle do while, structure
// do{
    //     bloc d'instruction
    //     a repeter    
    // } while(condition de sortie)

// en application
let i = 11;
do{
    console.log(`répétition do while n°${i}`); // l'opération a répéter
    i++
} while(i<=10)