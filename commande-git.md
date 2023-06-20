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