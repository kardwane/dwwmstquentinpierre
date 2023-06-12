# les formulaires

## Exo 1
le but ici est de créer un formulaire de création de commentaire (que le front), 
le formulaire demandera les informations suivantes : 
- pseudo (*input*)
- visibilité (public, privé) (*select*)
- adresse email (*input*)
- demande si il faut notifier les réactions au commentaire par email (radio coché sur oui par défaut) (*radio*)
- l'acceptation des conditions (*checkbox*)
- le commentaire (*textearea*)

Une fois le formulaire rempli, il faut en ajavascript venir vérifier les informations saisie avant d'envoyer le formulaire.

l'utilisation de l'objet JS *FormData* est conseillé

### bonus
- Vous changer la mise en page des champs (entouré en vert si saisie ok et en rouge si la saisie est mauvaise.)
- Vous pouvez inclure un recaptcha google  