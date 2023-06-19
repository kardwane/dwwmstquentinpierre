# les regex

## Exo 1
le but ici est de créer un formulaire (que le front) contenant plusieurs champs, le formulaire demandera les informations suivantes :

- input text (longueur 10 minimum)
- select (verifier qu'une autre valeur que celle par défaut soit renseigné)
- input email (a valider avec une regex)
- un input pour un téléphonne (doit passer au rouge si le ce qui est entré ne correspond pas à un numéro de téléphone). (a checker avec un regex)
- bouton radio oui/non (et verifier que le oui est activé)
- checkbox (verifier qu'elle soit coché)
- textearea (longueur 25 minimum)
- le bouton d'envoi
Une fois le formulaire rempli, il faut en javascript venir vérifier les informations saisie avant d'envoyer le formulaire.

l'utilisation de l'objet JS FormData est conseillé

### complements de ressource pour les regex

https://regexr.com/

https://quickref.me/regex

## Exo 2 (facultatif)
le testeur de mot de passe
  
Le champ nom d'utilisateur doit tourner au rouge si il contient autre chose que des lettres, - ou _

le champ mdp doiti contenir les caractéristiques suivantes : 
  - lettre minuscule.
  - lettre majuscule.
  - chiffre.
  - caractère spécial.
  - au moins 8 caractères

le champ mdp bis doit tourner au rouge si il ne correspond pas au champ mdp.
  (le changement au rouge peut être personalisé autrement, l'important est de montrer à l'utilisateur qu'il se trompe)
  
En bonus, ajouter une barre de progression qui change de couleur et se rempli à chaque fois que l'utilisateur sécurise un peu plus sont mdp :
  - lettre minuscule.
  - lettre majuscule.
  - chiffre.
  - caractère spécial.
  - au moins 8 caractères.
  

