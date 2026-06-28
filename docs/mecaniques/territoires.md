---
layout: default
title: Territoires capturables
parent: Mécaniques de jeu
nav_order: 4
permalink: /mecaniques/territoires/
---

# Territoires capturables

Les territoires capturables représentent des points stratégiques des Îles Brisées. Ils permettent aux factions de se disputer une occupation militaire locale.

## Territoires MVP

| Territoire | Type | Rôle |
|---|---|---|
| Fort-Orsombre | militaire | position fortifiée |
| Rochebrune | ville | territoire lié à une localité |
| Sanctuaire Effondré | sauvage | site isolé et hostile |

## Point de contrôle

Chaque territoire possède un point de contrôle. Un membre de faction peut l'activer pour lancer une contestation si le territoire n'est pas protégé.

Le point de contrôle affiche :

- le territoire;
- la faction propriétaire;
- la faction contestataire;
- la progression;
- l'état de la capture;
- le délai estimé de fin ou d'annulation.

## Capture

La capture progresse tant que des attaquants actifs restent dans le rayon du point de contrôle.

Durées par défaut :

| Présence attaquante | Durée approximative |
|---|---:|
| 1 attaquant | 15 minutes |
| 2 attaquants | 8 minutes |
| 3 attaquants ou plus | 6 minutes |

Ces durées peuvent être modifiées par le staff pour les tests ou l'équilibrage.

## Défense

Si une faction ennemie entre dans le rayon du point de contrôle, la progression est suspendue.

Les deux camps reçoivent des messages en jeu quand :

- les défenseurs suspendent une capture;
- les attaquants quittent la zone;
- les attaquants reviennent;
- les défenseurs quittent la zone;
- la contestation reprend;
- la capture échoue par abandon.

## Abandon

Si tous les attaquants quittent le rayon, la progression régresse et une grâce d'abandon commence.

Par défaut, les attaquants ont 2 minutes pour revenir avant que la contestation échoue.

## Après capture

Une capture réussie :

- attribue le territoire à la faction gagnante;
- donne des points et des marques aux participants éligibles;
- applique une protection temporaire empêchant une recapture immédiate.

Une capture abandonnée applique un cooldown d'échec avant une nouvelle tentative.

## PvP localisé

Les membres de factions différentes deviennent ennemis dans le rayon d'un point de contrôle activement contesté.

Cette règle est volontairement locale afin de conserver un PvP modéré.
