# Ponts

Un casse-tête logique : relie toutes les îles d'un archipel par des ponts droits. Le chiffre de chaque île dit combien de ponts en partent. Chaque archipel est créé au hasard et a toujours une solution.

*English version: [README.en.md](README.en.md)*

## Les règles

- Un pont relie deux îles voisines en ligne droite, à l'horizontale ou à la verticale.
- Entre deux îles, il peut y avoir **un ou deux ponts**, pas plus.
- Les ponts ne se croisent jamais et ne passent pas par-dessus une île.
- Chaque île doit avoir exactement son nombre de ponts.
- À la fin, toutes les îles doivent former **un seul archipel** : on doit pouvoir aller de n'importe quelle île à n'importe quelle autre.

Toute solution qui respecte ces règles est acceptée, même si elle diffère de celle prévue.

## Commandes

- **Glisse** d'une île vers sa voisine : un pont. Recommence : deux ponts. Encore une fois : plus aucun.
- **Retour arrière** : annuler le dernier geste.
- Une île devient **verte** quand elle a juste son nombre de ponts, **rouge** quand elle en a trop.
- Une fois l'archipel relié, un clic en lance un nouveau.

## Tailles

**Archipel** 7 × 7 ou 9 × 9. Le nombre d'îles et le chronomètre sont affichés en haut.

## Statistiques

Meilleur temps pour chaque taille et nombre d'archipels reliés.

## Données et synchronisation

Tes records de temps, le nombre d'archipels reliés et la taille choisie sont enregistrés par NeoDex, sauvegardés et synchronisés entre tes PC si la synchro est activée.

## Installer

Dans NeoDex : **NeoStore → À découvrir → Ponts → Installer**.

Développer un plugin : voir le [SDK NeoDex](https://github.com/NDesumeur/neodex-sdk).
