---
layout: default
title: Game Design - Systèmes complémentaires
nav_order: 11
has_children: false
permalink: /docs/game-design-systemes-complementaires/
---

# Game Design - Systèmes complémentaires
{: .no_toc }

Ce document complète la page [Game Design - Ligne directrice](game-design-ligne-directrice/) avec une réévaluation des systèmes complémentaires issus des premières réflexions : taming avancé, pets évolutifs, stockage, commandes joueurs, locations urbaines, campements, marché, cosmétique et transmogrification.

L'objectif n'est pas d'ajouter des systèmes parce qu'ils existent sur d'autres shards, mais de déterminer lesquels renforcent réellement l'identité du serveur : **exploration RP, survie douce, reconstruction, petite population, asynchrone et monde vivant sans GM permanent**.

<details open markdown="block">
  <summary>Sommaire</summary>
  {: .text-delta }

- TOC
{:toc}
</details>

---

## 1. Règle de décision

Une fonctionnalité complémentaire est retenue si elle renforce au moins un des axes suivants :

- exploration ;
- RP ;
- craft utile ;
- économie sociale ;
- reconstruction ;
- jeu solo viable sans tuer le multijoueur ;
- progression asynchrone ;
- vie urbaine ;
- confort de jeu nécessaire ;
- différenciation du serveur.

Une fonctionnalité doit être repoussée ou encadrée si elle :

- transforme le serveur en shard de farm ;
- pousse trop fortement la progression verticale ;
- rend une classe ou un style de jeu obligatoire ;
- remplace les interactions entre joueurs ;
- crée une économie incontrôlable ;
- demande trop de maintenance pour un gain RP faible.

---

## 2. Repriorisation globale

| Fonctionnalité | Décision | Priorité révisée | Raison principale |
|---|---|---:|---|
| Storage Boxes | Retenir | **P0 QoL** | Indispensable pour craft, reconstruction, stockage de ressources et confort des artisans. |
| Tableaux de rumeurs / contrats | Déjà intégré | **P0** | Cœur de la boucle quotidienne. |
| Expéditions temporaires | Déjà intégré | **P0/P1** | Système identitaire majeur contre la lassitude de la carte fixe. |
| Encounters dynamiques | Déjà intégré | **P1** | Rend le monde vivant entre deux expéditions. |
| Custom Taming Systems | Retenir et adapter | **P1 stratégique** | Boucle longue pour tamers, chasseurs, rôdeurs et explorateurs. |
| Fulfillment Order System | Retenir | **P1 haute** | Crée une économie sociale entre récolteurs, artisans et joueurs RP. |
| City Rentals | Retenir | **P1 haute** | Excellent pour peupler les villes et créer auberges, échoppes, ateliers et lieux RP. |
| Portable Campsite | Retenir | **P1** | Parfait pour exploration, survie douce, expéditions et campements RP. |
| BOD Deed Box | Retenir comme QoL craft | **P1/P2** | Utile si le système BOD devient important, mais moins identitaire. |
| Pets évolutifs avancés | Retenir mais encadrer | **P1/P2** | Pertinent si l'évolution est horizontale et liée à l'exploration, pas à la puissance brute. |
| Stable Sphere | Adapter | **P2** | QoL utile pour tamers, mais seulement après définition claire du rôle des pets. |
| Global Vendor Market / Vendor Search | Adapter en version RP | **P2** | Recherche utile, mais achat distant instantané à éviter pour l'immersion. |
| Item Transmogrification | Retenir et encadrer | **P2 haute** | Très bon pour l'identité visuelle RP, mais nécessite des limites. |
| Pet Cosmetics | Retenir comme prestige | **P2/P3** | Bon pour collection et RP, mais secondaire. |

---

## 3. Faune rare, taming et pets évolutifs

### 3.1 Intention

Créer une boucle longue pour les tamers, chasseurs, druides, rôdeurs et explorateurs, sans transformer les pets en source principale de puissance.

Les pets doivent être des **compagnons liés au monde**, pas seulement des armes plus efficaces.

### 3.2 Positionnement

Le serveur peut s'inspirer de systèmes avancés comme UO Alive ou Maxxia, mais ne doit pas copier leur logique de progression verticale massive.

La direction recommandée :

> Une faune rare, régionale et évolutive, liée aux îles, aux biomes, aux expéditions, à l'instabilité et aux découvertes.

### 3.3 Ce qu'il faut privilégier

- créatures rares par région ;
- variantes de biome ;
- spawns liés à des rumeurs ;
- spawns liés à l'instabilité régionale ;
- créatures trouvables dans certaines expéditions temporaires ;
- indices de pistage ;
- tempérament ou personnalité simple ;
- progression lente et plafonnée ;
- capacités utilitaires ;
- cosmétique régional ;
- prestige RP ;
- lien avec certains métiers : pisteur, dresseur, herboriste, soigneur animalier.

### 3.4 Ce qu'il faut éviter

- pets surpuissants ;
- tiers infinis ;
- caps absurdes ;
- pet obligatoire pour faire le contenu ;
- tamer capable de tout faire mieux qu'un groupe ;
- pets qui remplacent les joueurs ;
- élevage ou reproduction qui casse la rareté ;
- stockage de pets trop permissif dès le lancement.

### 3.5 Rôles de pets intéressants

Un pet évolué doit ouvrir des possibilités de jeu, pas seulement augmenter les dégâts.

Rôles possibles :

- pisteur de reliques ;
- détecteur de passages ;
- protecteur de campement ;
- monture adaptée à un biome ;
- compagnon de chasse ;
- familier lié à une région ;
- soutien léger en combat ;
- aide à l'exploration ;
- aide à certains encounters ;
- marqueur de prestige RP.

### 3.6 Exemples adaptés au serveur

#### Cerf de Brume

Créature rare liée aux zones forestières instables.

Utilité :

- détecte certains passages cachés ;
- réduit légèrement le risque d'embuscade dans les expéditions forestières ;
- faible intérêt en combat direct.

#### Chien des Ruines

Compagnon de piste lié aux anciennes cités détruites.

Utilité :

- suit des traces lors d'un encounter ;
- aide à retrouver un PNJ disparu ;
- peut signaler une cache ou une relique proche.

#### Lézard de Cendre

Créature de biome volcanique ou brûlé.

Utilité :

- meilleure résistance aux zones chaudes ;
- aide à transporter de petites charges ;
- peut détecter des minerais instables.

#### Corbeau du Cartographe

Familier rare associé aux explorateurs.

Utilité :

- peut revenir avec un indice mineur ;
- facilite la lecture de certaines cartes ;
- donne du prestige visuel et RP.

### 3.7 Priorité

| Sous-système | Priorité | Phase cible |
|---|---:|---|
| Créatures rares régionales | **P1 stratégique** | Alpha 2 / Beta |
| Pistage et indices | **P1** | Alpha 2 / Beta |
| Progression légère des pets | **P1/P2** | Beta |
| Stable Sphere ou stockage avancé de pets | **P2** | Beta+ |
| Pet cosmetics | **P2/P3** | Release+ |
| Évolution verticale avancée | **À repousser / encadrer** | Pas avant équilibre global |

---

## 4. Stockage, craft et logistique

### 4.1 Intention

Les systèmes de craft, reconstruction, agriculture, expéditions et reliques produisent beaucoup d'objets. Sans outils de stockage, les artisans passent trop de temps à trier au lieu de jouer.

Le confort de stockage n'est donc pas uniquement une QoL : c'est une condition pour que le craft et la reconstruction restent agréables.

### 4.2 Storage Boxes

#### Décision

À intégrer en **P0 QoL**.

#### Utilité

- stockage par catégorie ;
- ateliers plus lisibles ;
- guildes artisanales plus faciles à gérer ;
- réduction de la friction quotidienne ;
- meilleure expérience pour les joueurs non-combat.

#### Catégories recommandées

- minerais ;
- bois ;
- tissus/cuirs ;
- plantes ;
- ingrédients d'alchimie ;
- composants de reliques ;
- outils ;
- cartes/fragments ;
- ressources de reconstruction ;
- ressources de cuisine/agriculture.

### 4.3 BOD Deed Box

#### Décision

À intégrer en **P1/P2**, surtout si les BODs deviennent un moteur important du craft.

#### Utilité

- réduire la pénibilité ;
- garder les crafters motivés ;
- rendre les ateliers et guildes d'artisans plus viables.

#### Limite

Ce n'est pas un système identitaire. C'est un support de confort.

### 4.4 Fulfillment Order System

#### Décision

À intégrer en **P1 haute**.

#### Concept

Un joueur, une guilde, une colonie ou un atelier publie une commande : ressources, objets, nourriture, composants, outils, matériaux de reconstruction.

Un autre joueur peut accepter ou remplir cette commande contre paiement, réputation ou contribution.

#### Intérêt RP

Ce système crée des métiers :

- mineur ;
- bûcheron ;
- pêcheur ;
- chasseur ;
- herboriste ;
- transporteur ;
- fournisseur ;
- artisan ;
- marchand.

#### Règles recommandées

- commandes visibles localement ou régionalement ;
- possibilité de commandes publiques de colonie ;
- pas d'automatisation totale du marché ;
- frais ou taxe légère ;
- historique des commandes ;
- limites anti-spam.

---

## 5. Vie urbaine, locations et commerce RP

### 5.1 City Rentals

#### Décision

À intégrer en **P1 haute**.

#### Intention

Permettre aux joueurs d'occuper des lieux en ville sans devoir posséder immédiatement une maison complète.

#### Usages RP

- chambre d'auberge ;
- échoppe ;
- atelier ;
- bureau de guilde ;
- cabinet d'érudit ;
- comptoir marchand ;
- salle commune ;
- ambassade locale ;
- entrepôt temporaire.

#### Pourquoi c'est important

Les locations urbaines donnent vie aux villes. Elles permettent aux joueurs peu disponibles de s'ancrer dans le monde sans gérer un housing complet.

#### Règles recommandées

- loyers raisonnables ;
- durée configurable ;
- expiration claire ;
- stockage limité ;
- pas d'avantage économique abusif ;
- lieux visibles et utiles RP.

### 5.2 Global Vendor Market / Vendor Search

#### Décision

À adapter en **P2**.

#### Risque

Un marché global avec achat distant instantané peut casser l'immersion et vider les villes de leur intérêt.

#### Version recommandée

Créer une version RP :

- registre marchand régional ;
- courtier de marché ;
- recherche par ville ;
- frais de courtage ;
- délai de livraison ;
- achat distant limité ou réservé aux objets simples ;
- consultation depuis les villes, pas depuis n'importe où.

### 5.3 Item Transmogrification

#### Décision

À intégrer en **P2 haute**, avec restrictions.

#### Intérêt

Très bon pour le RP visuel. Les joueurs peuvent conserver une identité cohérente sans sacrifier totalement l'efficacité.

#### Règles recommandées

- même catégorie d'objet ;
- pas de transformation trompeuse en PvP ;
- pas de robe qui cache une armure lourde sans règle claire ;
- coût en ressource ou service d'artisan ;
- restrictions de matériaux ;
- journalisation ou outil admin en cas d'abus.

---

## 6. Campements et exploration

### 6.1 Portable Campsite

#### Décision

À intégrer en **P1**.

#### Intention

Donner aux explorateurs une base temporaire adaptée aux expéditions, aux régions dangereuses et à la survie douce.

#### Fonctionnalités possibles

- feu de camp ;
- couchage ;
- petit stockage temporaire ;
- cuisine simple ;
- réparation légère ;
- bonus de repos ;
- point de préparation ;
- protection mineure contre certains dangers ;
- durée limitée ;
- démontage ou expiration.

#### Ce qu'il faut éviter

- coffre permanent gratuit ;
- recall abusif dès le lancement ;
- campement impossible à attaquer ou contester ;
- remplacement du housing ;
- multiplication infinie de camps.

#### Intérêt pour le serveur

Le campement portable relie plusieurs piliers :

- exploration ;
- survie douce ;
- craft ;
- RP ;
- expéditions ;
- petite population ;
- encounters dynamiques.

---

## 7. Cosmétique et prestige

### 7.1 Pet Cosmetics

#### Décision

À garder en **P2/P3**.

#### Intérêt

Les skins de pets sont intéressants s'ils sont liés au monde :

- région ;
- lignée ;
- événement ;
- réputation ;
- saison ;
- expédition rare ;
- succès RP.

#### Règle

Le cosmétique ne doit pas modifier les statistiques.

### 7.2 Prestige non-combat

Le serveur doit aussi permettre du prestige hors combat :

- titre d'explorateur ;
- maison ou échoppe reconnue ;
- animal rare ;
- relique exposée ;
- contribution à une colonie ;
- participation à une chronique ;
- maîtrise artisanale.

---

## 8. Nouvelle priorisation par phase

### P0 - Socle indispensable

| Feature | Raison |
|---|---|
| Île de départ | Accueil et identité. |
| Tableaux de rumeurs/contrats | Boucle de connexion. |
| Storage Boxes | QoL indispensable pour craft et reconstruction. |
| Premières missions simples | Jouable sans GM. |
| Premières expéditions simples | Différenciation forte. |
| Premières chroniques | Asynchrone et RP. |

### P1 - Identité forte du serveur

| Feature | Raison |
|---|---|
| Encounters dynamiques | Monde vivant sans GM. |
| Instabilité régionale | Conséquences automatisées. |
| Reconstruction / avant-postes | Progression collective. |
| Portable Campsite | Exploration et survie douce. |
| Fulfillment Orders | Économie sociale. |
| City Rentals | Vie RP des villes. |
| Reliques / identification | Exploration utile. |
| Custom Taming Systems | Boucle longue tamers/explorateurs. |
| Boss mécaniques simples | Aventure mémorable. |

### P2 - Profondeur et confort avancé

| Feature | Raison |
|---|---|
| Pets évolutifs avancés | Long terme, mais à équilibrer. |
| Stable Sphere | QoL tamer. |
| BOD Deed Box | QoL craft. |
| Vendor Search RP | Commerce lisible sans casser l'immersion. |
| Transmogrification | Identité visuelle RP. |
| Housing/agriculture avancée | Vie civile. |
| PNJ dynamiques / LLM | RP automatisé enrichi. |
| Compagnons de route complexes | Solo renforcé. |

### P3 - Prestige, endgame et cosmétique

| Feature | Raison |
|---|---|
| Pet Cosmetics | Prestige et collection. |
| Politique légère | Endgame social. |
| Outils animateurs joueurs | Communauté mature. |
| Saisons / arcs longs | Renouvellement long terme. |

---

## 9. Epics complémentaires proposés

### EPIC-15 - Faune rare, taming et pets évolutifs

Objectif : créer une boucle de taming longue durée, liée aux régions, aux biomes, à l'exploration et à l'instabilité du monde.

User Stories possibles :

- définir les familles de créatures rares ;
- lier les spawns à des régions ou biomes ;
- créer un système d'indices ou de pistage ;
- définir les capacités utilitaires ;
- définir les règles de progression des pets ;
- limiter la puissance verticale ;
- prévoir une intégration avec les encounters ;
- prévoir une intégration avec les expéditions ;
- définir les règles de stable et de stockage ;
- créer les premiers pets rares de test.

### EPIC-16 - Logistique artisanale et stockage

Objectif : réduire la friction de stockage et soutenir les métiers, la reconstruction et l'économie artisanale.

User Stories possibles :

- créer les Storage Boxes prioritaires ;
- définir les catégories de ressources ;
- créer les coffres d'atelier ;
- intégrer les ressources de reconstruction ;
- étudier la BOD Deed Box ;
- contrôler les limites de stockage ;
- documenter les usages staff/joueurs.

### EPIC-17 - Commandes joueurs et économie sociale

Objectif : permettre aux joueurs, ateliers et colonies de publier des commandes de ressources ou d'objets.

User Stories possibles :

- créer les commandes de ressources ;
- créer les commandes d'artisanat ;
- gérer paiement ou récompense ;
- gérer expiration ;
- gérer annulation ;
- afficher les commandes par ville ou région ;
- lier certaines commandes aux projets de reconstruction ;
- éviter le spam et les abus.

### EPIC-18 - Vie urbaine, locations et marché RP

Objectif : peupler les villes et structurer le commerce sans casser l'immersion.

User Stories possibles :

- créer les locations de chambres ;
- créer les locations d'échoppes ;
- créer les ateliers louables ;
- gérer loyers et expiration ;
- créer un registre marchand régional ;
- créer un courtier de marché ;
- définir les limites de recherche ou d'achat distant ;
- intégrer les locations aux villes et colonies.

### EPIC-19 - Campements d'expédition

Objectif : permettre aux explorateurs de créer des bases temporaires limitées et utiles.

User Stories possibles :

- créer un campement portable de base ;
- définir durée et expiration ;
- ajouter feu, couchage et stockage limité ;
- intégrer cuisine ou réparation légère ;
- définir les règles anti-abus ;
- lier certains campements aux expéditions ;
- tester l'impact sur le solo et le groupe.

### EPIC-20 - Identité visuelle et prestige RP

Objectif : permettre aux joueurs d'affirmer leur identité visuelle sans casser l'équilibrage.

User Stories possibles :

- définir les règles de transmogrification ;
- limiter par catégorie d'objet ;
- créer les coûts ou métiers associés ;
- définir les restrictions PvP ;
- créer les premiers cosmétiques de pets ;
- lier certains cosmétiques aux régions ou événements ;
- prévoir les outils admin de contrôle.

---

## 10. Décision de direction

Toutes les fonctionnalités listées sont intéressantes, mais elles ne doivent pas être intégrées au même niveau.

La direction retenue est :

> Retenir les systèmes qui renforcent l'exploration, le RP, la vie sociale, le craft et la reconstruction ; repousser ou encadrer les systèmes qui poussent trop fortement vers la puissance brute, le farm ou l'automatisation excessive.

Décision spécifique sur les pets :

> Le serveur doit proposer une boucle de taming rare et de compagnonnage animal, liée aux régions, aux expéditions et à l'instabilité du monde. Les créatures rares doivent renforcer l'exploration, le RP et l'identité des personnages, sans devenir une progression verticale incontrôlée ni remplacer la coopération entre joueurs.
