### cloner un dépot

```git clone ssh://adresseDepot.ssh```
ou
```git clone https://adresseDepot.ext```

### consulter l'état des fichier
```git status```

### indexer tout les fichiers en attente pour la futur version (prochain commit)
```git add .```

### indexer un fichier particulier pour la futur version (prochain commit)
```git add chemin/vers/fichier.ext```

### Enregistrer des modifications en local
pour ajouter vos modifications à votre prochaine version, vous pouvez utiliser la commande
```git commit -m "votre message de version"```

### Enregistrer des modifications vers un dépot distant
```git push```

on peut préciser suite à la commande git push le depot source (par exemple *origin*) et le dépot distant (par exmple *main*)
```git push origin main```

### Récupérer des données depuis un dépôt distant
```git pull```

permet de remettre la version local identique a la version sotcké en ligne

### consulter l'historique des versions git
```git log```

### revenir a une ancienne version de notre projet
```git reset --hard numéroDeCommit```

on récupere le n° de commit grace à la commande 
```git log```

Cette commande impact les fichiers locaux uniquement

### la gestion des branche
une branche permets de travailler sur une version personaliser de son code mais sans impacté la branche commune (main ou master en general)

pour créer un branch, on utilise la commande
```git branch nomDeLaBranche```

une fois qu'une branch est crée, il faut demander a git de travailler sur cette nouvelle branche.
Pour ce faire, on utlisera la commande
```git checkout nomDeLaBranche```

pour connaitre les branches disponible sur votre git : 
```git branch```

git indique la branche sur laquelle il travail en prefixant la branche par une *

une fois que vous souhaitez integrer les modifications d'une branche sur la branche principale, on va utiliser la commande
```git merge```

Avant d'utiliser cette commande, assurez-vous d'etre sur la branche qui va récuperer la modification.
Autrement assurez-vous d'etre sur le branche de destination

exemple fusionné une branche *branche1* à la branche principal *main*

```git checkout main```

puis

```git merge branche1```

cette opération se fait en local, il faut encore push vers le depot distant pour assurer la conformité des données entres les deux environments (local et distant) 

Dans le cas ou une fusion concerne deux versions différente d'un même fichier, les outils de fusion vont être proposer par vs code. ces outils permettent de décider comment contruire une version commune du fichier en question.
on aura le choix de : 
- privilégier une version de fichier plûtot qu'une autre
- fusionner les 2 versions concernés en choisissant quel version sera importé avant l'autre
- ignorer le conflit (rarement recommmandé)

### Supprimer une branche
Si on souhaite supprimer une branche, il faut utiliser la commande
```git branch –d nomDeLaBranche```
ou
```git branch –D nomDeLaBranche```
pour forcer la suppression