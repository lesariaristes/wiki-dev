---
layout: default
title: Administration et commandes GM
nav_exclude: true
permalink: /admin-gm/
---

# Administration et commandes GM

Cette page est destinée au staff. Elle n'est pas listée dans le menu public du wiki.

## Principe

Les commandes GM servent à tester, corriger et administrer les systèmes de factions, villes, territoires et institutions.

Elles ne doivent pas être présentées comme des mécaniques joueur.

## Administration Ariaristes

Commandes principales :

```text
[AriaristesAdmin
[aadmin
```

Le gump Ariaristes donne accès aux outils de monde et au panneau factions/villes.

## Factions

Commandes joueur utiles au staff pour vérifier le comportement :

```text
[Faction
[FactionInfo
[FactionTerritories
[FactionLeave
```

Commandes GM :

```text
[FactionAdmin
[FactionDebug
[FactionConfig <paramètre> <valeur>
[SetFaction <joueur> <faction>
[ClearFaction <joueur>
[AddFactionPoints <joueur> <montant>
[SetTerritoryOwner <territoire> <faction|none>
[ClearRecruitProtection
[ExpireFactionLeave
[FactionReset CONFIRM
```

Paramètres utiles de `[FactionConfig` :

```text
soloMinutes
twoMinutes
threeMinutes
abandonMinutes
secureHours
failedHours
electionDays
electionHours
referendumHours
treasury
```

Exemple test rapide :

```text
[FactionConfig soloMinutes 2
[FactionConfig twoMinutes 2
[FactionConfig threeMinutes 2
[FactionConfig abandonMinutes 2
```

## Villes

Commandes joueur utiles au staff :

```text
[City
[CityInfo <ville>
[CityLeave
[CityTax <0-5>
[CityAlliance <faction>
[CityReferendum oui|non
```

Commandes GM :

```text
[SetCity <ville>
[ClearCityCooldown
[SetCitizenAge <jours>
[SetMayor <ville>
[CityElection <ville>
[CityElectionClose <ville>
[CityTreasuryLog <ville>
```

## Coffres municipaux

Les coffres municipaux sont désactivés par défaut.

Activation :

```text
[FactionConfig treasury true
```

Désactivation :

```text
[FactionConfig treasury false
```

Le maire et le staff peuvent déposer et retirer. Les actions sont journalisées.

## Territoires

Tests recommandés :

- lancer une capture avec un personnage membre de faction;
- faire entrer un défenseur d'une autre faction;
- vérifier la suspension;
- faire sortir l'attaquant;
- vérifier les messages d'abandon;
- faire revenir l'attaquant avant expiration;
- vérifier les messages de reprise;
- laisser expirer la grâce d'abandon;
- vérifier le cooldown d'échec;
- capturer complètement;
- vérifier la protection post-capture.

## Persistance

Les données runtime sont sauvegardées via `GenericPersistence` sous les saves serveur.

À vérifier après redémarrage :

```text
[FactionInfo
[City
[FactionTerritories
[FactionAdmin
```

## Attention

Les commandes de reset suppriment de l'état gameplay persistant. Elles doivent être utilisées sur une copie de saves ou pendant une fenêtre de test assumée.
