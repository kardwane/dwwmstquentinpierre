"use strict";
/**
 * JQuery fut créé en 2006 par John Resig
 * Il est représenté par la phrase "Faire plus en écrivant moins."
 * Il permet de faire du JS plus rapidement et plus simplement.
 * 
 * Ici on va voir les bases de jquery mais si vous souhaitez l'approfondir
 * Je vous conseil la documentation officiel qui est très complète.
 * https://jquery.com/
 * Il existe des variantes comme jquery UI qui apporte plus de fonctions adaptés à l'interface Utilisateur.
 * Cela reste du JS, il faut donc ne pas oublier que tous ce que vous faites habituellement en JS
 * fonctionne ici.
 * Seulement certains objets Jquery peuvent différer des objets JS classique.
 */
/* 
$("") sert à la fois pour querySelector et pour createElement.
$("div") selectionnera toute les div.
$("<div>") créera une nouvelle div.
*/
const btnSlide = $("#slide")
/*
    .on() remplace avec jquery le addEventListener().
    il y a aussi des version raccourci comme .click(function) qui remplace un .on("click", function)
*/
btnSlide.on("click", slideTitle);
function slideTitle(){
    /*
        Certains effets classique de css comme fade, slide ou hide sont implémenté de base
        dans jquery, avec des méthodes slideIn, slideOut, slideToggle et de même pour les autres.
        Ici j'ai donné la durée de l'animation et une fonction a executer une fois l'animation terminé. 
     */
    $("h1").slideToggle(1000, function(){
        /* 
            pour accèder aux propriétés css avec jquery on peut tout simplement utiliser la méthode 
            .css() à laquelle si on ne donne qu'un argument, elle nous rend la valeur correspondante.
            avec 2 argument elle change la propriété.
            ici .css("background-color") me retourne la couleur de mon élément (en rgb())
            et .css("background-color", "red") transforme la couleur de fond de mon élélement en rouge.
        */
        let color = btnSlide.css("background-color")=="rgb(255, 0, 0)"? "green":"red";
        btnSlide.css("background-color", color)
    });
}
$("#fade").click(fadeSpan);
function fadeSpan(){
    /* 
        J'ai plusieurs span, mais pas besoin de boucle for ou forEach, jquery s'occupe lui même de faire
        l'effet sur chacun d'entre eux.
    */
    $("h1 span").fadeToggle();
}
/* 
    là aussi j'aurais pu utiliser .on("mouseenter", callback1)
    mais la méthode .hover() me permet au choix de mettre 1 ou 2 callback, 
    le premier étant appelé quand la souris entre sur l'élément.
    le second quand elle sort de l'élément.
    On remarquera aussi que là l'évènement ce met automatiquement sur tout les éléments sans avoir 
    besoin de faire de boucle.
*/
$("h1 span").hover(callback1, callback2);

function callback1(){
    // La façon la plus classique de récupérer la cible d'un évènement en jquery est d'utiliser $(this)
    $(this).css("font-size", "4rem")
}
function callback2(){
    $(this).css("font-size", "")
}
$("document").ready(function(){
    /*
    Un classique en jquery est d'utiliser cet évènement pour coder toute notre logique à l'interieur.
    Il se déclenchera une fois le document entièrement chargé, cela permettais entre autre de 
    remplacer l'attribut defer avant qu'il existe.
    */

    $("h1").dblclick(function(){
        /* 
            je cache mon titre au double click
        */
        $(this).hide()
    })
    $("#load").click(function(){
        $("ol").hide(200);
        // Ajax est le fetch de jquery
        $.ajax("liste.json")
            //.done() est la fonction qui est lancé quand la requête est réussi
            .done(data=>{
                // si ce sont des données text, html, ou json par exemple, elles sont automatique traité.
                data.forEach(d=>{
                    // pour chaque élément de mon tableau, je crée un li, je lui donne mon éléménet et je l'ajoute à ol.
                    $("<li>").text(d).appendTo($("ol"));
                })
                $("ol").show(500)
            })
            // fail est déclenché en cas d'erreur.
            .fail(err=>console.log(err))
            //always a toujours lieu.
            .always(()=>console.log("requête terminé"))
    })
    $("#anime").click(function(){
        $(this).css("position", "absolute");
        // la version jquery de animate se contente de prendre les paramètres que l'on veut modifier et le temps que cela met.
        $(this).animate({
            width: "50vw",
            height: "5rem",
            top: "+=50px",
            left: "-=50px"
        }, 1000)
    })
})