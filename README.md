# pimpmyride
Working on some JavaScript exercises to understand Object Oriented Programming

## Pimp My Ride - PART I

### Introduction

La crise du Covid est terminée, la demande en déplacement aérien repart à la hausse, mais toutes les companies ont été laminées et plus personne ne fait tourner d'avion.

Vous décidez de vous lancer dans le business avec le Tupolev-114 de votre grand-mère.

Vos clients vous communiquent, en plus de leur nom, des heures de départs, des durées de trajet; le montant payé pour faire ce trajet.

Ces informations sont stockées sous forme d'une chaîne de caractères, par lignes composées de mots représentant, dans l'ordre :

1. le nom du client

2. l'heure de départ du vol

3. la durée du vol

4. le prix

Par exemple, pour un voyage, cette chaîne de caractère sera :

```jsx
let trip = "Perdita 8 10 8"
```

*La ligne signifiant que la cliente Perdita veut partir à 8h pour un vol de 10h (donc arrivée à 18h) et paiera 8.*

### Étape 1 - Parsing

Créez une fonction `parseTrip(trip)` qui prend une ligne du même format que les lignes de l'exemple, la décompose en mot (séparés par un espace) puis range ces mots dans une structure de donnée que vous déterminerez.

```jsx
let tripToParse = "Perdita 8 10 8"

func parseTrips(trip) {
	// TODO
}

parseTrip(tripToParse)

```

Par exemple - et ce n'est qu'un exemple -, vous pouvez décider de représenter une ligne par un objet de la forme :

```jsx
{ 'client': <value>, 'start': <value>, 'duration': <value>, 'price': <value> }
```

### Étape 2 - Loop Parsing

Mais vous n'avez pas qu'un seul voyageur par jour, il nous faut donc passer à la vitesse supérieure.

Utilisez la fonction `parseTrip(trip)` dans une autre fonction `parseTrips(trips)` prenant en entrée une journée complète (donc plusieurs lignes) et retournant une liste de structures `trips` définies précédemment  (`[]`).

```jsx
let tripsToParse = [
	"Roger 0 5 10",
	"Pongo 3 7 14",
	"Perdita 8 10 8",
	"Anita 16 3 7"
]

func parseTrips(trips) {
	// TODO
}

parseTrips(tripsToParse)
```

Pour reprendre le texte d'exemple, et la structure proposée précédemment, le résultat de cette fonction serait :

```jsx
[
	{'client': 'Roger', 'start': 0, 'duration': 5, 'price': 10},
	{'client': 'Pongo', 'start': 3, 'duration': 7, 'price': 14},
	{'client': 'Perdita', 'start': 8, 'duration': 10, 'price': 8},
	{'client': 'Anita', 'start': 16, 'duration': 3, 'price': 7} 
]
```

Vous aurez donc à ce niveau ce qu'on appelle un **parser**, une fonction recevant en entrée une chaîne de caractères représentant une journée de vols, et donnant en sortie une représentation structurée de ces données, vous permettant de travailler plus simplement avec.

### Étape 3 - Prices

Pour optimiser vos journées, vous décidez d'écrire un code calculant l'enchaînement de clients le plus intéressant financièrement.

Créez une fonction `getTripsPrice` qui accepte en argument une liste de `voyages` et retourne la somme des prix de cet ensemble de `voyages`.

Par exemple:

```jsx
 getTripsPrice([ {'client': 'Roger', 'start': 0, 'duration': 5, 'price: 10}, {'client': 'Pongo', 'start': 3, 'duration': 7, 'price: 14} ]) 
```

Retourne *10 + 14 = 24*.

### Étape 4 - Compatibility

Il ne faut évidemment pas que l'heure d'arrivée d'un trajet chevauche l'heure de départ d'un autre ! Votre client en retard ne vous paiera pas.

Créez une fonction `checkCompatibility(tripA, tripB)` qui comparent deux structures `voyages` et retourne un booléen déterminant si les structures sont compatibles ou non.

Il s'agit de déterminer si un vol (représenté par une structure `trips`) n'empiète pas sur les horaires d'un autre.

Par exemple:

```jsx
checkCompatibility({'client': 'Roger', 'start': 0, 'duration': 5, 'price: 10}, {'client': 'Pongo', 'start': 3, 'duration': 7, 'price: 14}) 
```

Doit retourner **faux** : en effet, le premier vol n'atterrit qu'à 5h, ce qui est incompatible avec le départ du second à 3h.

En revanche:

```jsx
checkCompatibility({'client': 'Roger', 'start': 0, 'duration': 5, 'price: 10}, {'client': 'Perdita', 'start': 8, 'duration': 10, 'price: 8}) 
```

Doit retourner **vrai**.

### Étape 5 - Possibilities

Développez une fonction `findCompatibilities(trips)` qui retourne, à partir d'une liste de **voyages**, tous les ensembles de voyages compatibles les uns avec les autres.

En partant de l'exemple original, cette fonction retournerait alors :

```jsx
[

	[ {'client': 'Roger', 'start': 0, 'duration': 5, 'price': 10} ], 

	[ {'client': 'Pongo', 'start': 3, 'duration': 7, 'price': 14} ],

	[ {'client': 'Perdita', 'start': 8, 'duration': 10, 'price': 8} ],

	[ {'client': 'Anita', 'start': 16, 'duration': 3, 'price': 7} ],
	
	[ {'client': 'Roger', 'start': 0, 'duration': 5, 'price': 10}, {'client': 'Perdita', 'start': 8, 'duration': 10, 'price: 8} ],
	
	[ {'client': 'Roger', 'start': 0, 'duration': 5, 'price': 10}, {'client': 'Anita', 'start': 16, 'duration': 3, 'price: 7} ],
	
	[ {'client': 'Pongo', 'start': 3, 'duration': 7, 'price': 14}, {'client': 'Anita', 'start': 16, 'duration': 3, 'price: 7} ],

]
```

⚠️ **Chaque voyage est compatible avec lui-même**

PS: La fonction  `checkCompatibility(tripA, tripB)`  vous sera bien utile !

### Étape 6 - Final choice

Développez une dernière fonction `findBestPrice(trips)`, qui renverra le combo ou le voyage seul qui rapportera le plus à votre entreprise.

Vous avez alors tous les outils pour déterminer, à partir d'une chaîne de caractères des vols d'une journée, la liste optimale des clients à transporter, les horaires de leurs vols, ainsi que votre gain !

PS: 

Avec l'exemple précédent, la meilleur combinaison est Pongo (3h -> 10h) et Anita (16h -> 19h) car 14 + 7 = 21.
