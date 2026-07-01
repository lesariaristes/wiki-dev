---
layout: default
title: Game Design - Ligne directrice
nav_order: 10
has_children: false
permalink: /docs/game-design-ligne-directrice/
---

# Game Design - Ligne directrice
{: .no_toc }

Document de cadrage pour définir l'identité gameplay du shard **Les Ariaristes / Shattered Isles Rising**, prioriser les fonctionnalités, séquencer les travaux et fournir une base commune au staff pour créer les futurs projets d'implémentation et les tâches techniques associées.

<details open markdown="block">
  <summary>Sommaire</summary>
  {: .text-delta }

- TOC
{:toc}
</details>

---

## 1. Objectif du document

Ce document sert de référence commune pour :

- définir l'identité propre du serveur ;
- éviter de copier directement d'autres shards francophones ou anglophones ;
- sélectionner les boucles de gameplay pertinentes ;
- prioriser les systèmes à développer ;
- séquencer les phases de mise en œuvre ;
- permettre au staff de relire, commenter et corriger la direction ;
- fournir une base exploitable pour créer les Epics, User Stories et tâches de développement.

Le document ne décrit pas encore l'implémentation technique détaillée. Il définit le **quoi**, le **pourquoi** et le **quand**. Les documents techniques détailleront ensuite le **comment**.

---

## 2. Vision du serveur

### 2.1 Promesse principale

**Les Ariaristes / Shattered Isles Rising** est un shard Ultima Online RP francophone centré sur l'exploration, la reconstruction, les métiers utiles, la vie civile et les conséquences des actions joueurs dans un monde brisé.

Le serveur ne doit pas être uniquement un monde statique à parcourir, ni un serveur de guerre de factions, ni un simple shard de farming PvE. Il doit proposer une expérience où les joueurs :

- découvrent progressivement des îles et des secrets ;
- ouvrent des expéditions temporaires vers des zones instables ;
- rencontrent des situations dynamiques qui donnent vie au monde entre deux expéditions ;
- ramènent ressources, reliques, connaissances et récits ;
- reconstruisent des lieux, des routes, des avant-postes et des colonies ;
- cultivent, récoltent, pêchent, fouillent, cartographient, commercent et fabriquent ;
- développent des métiers utiles : artisanat, agriculture, apiculture, pêche, collecte, taming, commerce, exploration, érudition ;
- interagissent avec des PNJ plus vivants grâce à des systèmes automatisés et, à terme, à des dialogues assistés par LLM ;
- participent à une progression collective même lorsqu'ils ne jouent pas tous aux mêmes horaires ;
- peuvent jouer seuls, en petit groupe ou en communauté sans dépendre en permanence d'un GM.

### 2.2 Phrase d'identité

> Un monde brisé. Des îles à redécouvrir. Des terres à cultiver. Des expéditions qui changent. Des rencontres qui émergent. Une histoire écrite par les joueurs.

### 2.3 Positionnement par rapport aux autres shards et jeux

| Référence | Positionnement perçu | Ce qu'il faut éviter | Ce qu'on peut retenir |
|---|---|---|---|
| UO Midlands FR | Monde dynamique, factions, PNJ, conquête, politique, guerres de territoires | Copier la guerre de factions, les armées NPC, la conquête de villes | Inspiration sur le monde vivant et les interactions systémiques |
| Shards of Minax / Maxxia | UO très systémique, progression, loot, boss, pets, craft, builds, économie | Devenir un clone hack'n slash avec trop de caps, trop de loot et trop de systèmes empilés | Expéditions, contrats, compagnons, boss mécaniques, outils admin, progression longue, taming avancé |
| UO Alive | Monde vivant, QoL, pets, économie, confort de jeu | Copier des systèmes sans les relier à l'identité RP | S'inspirer du confort, de la boucle tamer et de la vie quotidienne |
| UO Eventine | Nombreux systèmes custom : archéologie, orpaillage, pêche avancée, custom tamables, apiculture, book publishing, invasions, etc. | Empiler tous les systèmes sans cohérence | Reprendre les métiers d'exploration douce, la pêche, l'apiculture, les systèmes de fouille et les événements régionaux |
| Albion Online | Économie de production, parcelles, transformation, agriculture, élevage, spécialisation | Transformer le serveur en économie industrielle ou en farm obligatoire | Parcelles, cycles de production, transformation de ressources, spécialisation et économie entre joueurs |
| Les Ariaristes | Exploration RP, survie douce, reconstruction, agriculture utile, reliques, rumeurs, encounters dynamiques, zones temporaires, progression asynchrone | Diluer l'identité en voulant tout faire | Assumer une direction cohérente et jouable avec peu de staff |

---

## 3. Principes de design

### 3.1 Jouable sans GM permanent

Le serveur doit fonctionner même si aucun GM n'est connecté. Les GM doivent enrichir l'expérience, pas la rendre indispensable.

Implications :

- rumeurs générées ou renouvelées automatiquement ;
- contrats récurrents ;
- expéditions temporaires ;
- encounters dynamiques temporaires ;
- commandes de colonie ;
- cycles de culture et de production ;
- événements déclenchés par l'état du monde ;
- PNJ capables de fournir un minimum de contexte ;
- progression collective visible sans intervention manuelle.

### 3.2 Compatible avec une petite communauté

Le shard doit rester vivant même avec peu de joueurs connectés simultanément.

Implications :

- contenu solo viable ;
- contenu petit groupe viable ;
- métiers non-combat viables ;
- contribution asynchrone ;
- objectifs collectifs non bloqués par l'absence d'un joueur ;
- compagnons de route et pets utilitaires limités pour aider les joueurs seuls ;
- encounters ouverts assez longtemps pour ne pas pénaliser les joueurs hors horaires de pointe ;
- agriculture et commandes jouables par petites sessions ;
- systèmes sociaux incitant à coopérer sans forcer une présence quotidienne.

### 3.3 Progression asynchrone équitable

Les joueurs ne jouent pas tous aux mêmes horaires. Les systèmes ne doivent pas favoriser uniquement les joueurs connectés au bon moment.

Règles :

- les contributions collectives doivent rester ouvertes plusieurs jours ;
- les événements majeurs ne doivent pas disparaître en quelques heures ;
- les récompenses doivent distinguer participation et monopole ;
- les expéditions temporaires doivent avoir une durée suffisante ;
- les encounters dynamiques importants doivent rester visibles assez longtemps pour permettre une participation différée ;
- les cultures doivent avoir des cycles compatibles avec une vie adulte ;
- les nouveaux joueurs doivent toujours avoir des choses à découvrir, même si les anciennes îles sont déjà ouvertes.

### 3.4 Découverte renouvelée malgré une carte fixe

La carte principale d'Ultima Online est limitée et rapidement parcourue. Le renouvellement ne doit pas dépendre uniquement de la géographie statique.

Le serveur doit donc ajouter des couches dynamiques :

- expéditions temporaires ;
- encounters dynamiques ;
- zones instables ;
- donjons ou lieux générés côté serveur ;
- rumeurs évolutives ;
- reliques à identifier ;
- ressources rares cycliques ;
- graines rares et plantes régionales ;
- faune rare régionale ;
- trésors enfouis, sites de fouille, bancs de pêche et zones d'orpaillage ;
- états régionaux ;
- avant-postes et colonies évolutifs.

### 3.5 RP utile, pas seulement décoratif

Le RP doit avoir des conséquences concrètes, mais sans nécessiter une animation GM permanente.

Exemples :

- une rumeur peut mener à une expédition ;
- un encounter peut sauver ou condamner un PNJ ;
- une relique identifiée peut débloquer une recette ;
- une plante rare peut devenir un remède ou un composant de reconstruction ;
- une colonie nourrie peut grandir, survivre ou proposer un nouveau service ;
- une région négligée peut devenir plus dangereuse ;
- un animal rare peut signaler une découverte régionale ;
- un livre publié peut enrichir la mémoire du monde ;
- un joueur reconnu peut accéder à des outils sociaux limités.

### 3.6 Progression horizontale avant inflation verticale

Le serveur doit éviter une escalade excessive des statistiques, caps, dégâts, pets et équipements.

Priorité à :

- spécialisations ;
- avantages contextuels ;
- utilité sociale ;
- accès à de nouveaux outils ;
- craft avancé ;
- agriculture utile ;
- exploration plus sûre ;
- réputation ;
- lore et découvertes ;
- prestige visuel ou RP non destructeur d'équilibrage.

À éviter en première intention :

- caps à 200 partout ;
- progression infinie ;
- pets surpuissants ;
- agriculture obligatoire et chronophage ;
- farm obligatoire ;
- endgame uniquement basé sur le DPS.

### 3.7 Confort de jeu au service du gameplay

Certaines fonctionnalités de confort doivent être assumées comme prioritaires lorsqu'elles évitent de transformer le serveur en corvée.

Exemples :

- Storage Boxes pour les artisans et guildes ;
- outils de tri pour BODs si le craft BOD devient important ;
- registres de commandes pour éviter les échanges Discord permanents ;
- locations urbaines pour donner un ancrage RP sans forcer le housing complet ;
- outils agricoles simples pour éviter une microgestion pénible.

Le confort est acceptable lorsqu'il soutient le RP, le craft, la reconstruction ou l'économie sociale. Il doit être limité lorsqu'il supprime toute friction utile, toute interaction ou toute immersion.

---

## 4. Boucles de gameplay principales

### 4.1 Boucle courte : session de 30 à 60 minutes

Objectif : permettre à un joueur de se connecter, faire quelque chose d'utile, puis repartir avec une impression de progression.

Déroulé type :

1. Le joueur consulte le tableau de rumeurs, de contrats ou de commandes.
2. Il choisit une activité adaptée à son temps disponible.
3. Il prépare son équipement, son compagnon, son pet utilitaire ou ses outils.
4. Il part explorer, récolter, escorter, enquêter, pêcher, cultiver, combattre ou livrer.
5. Il peut tomber sur un encounter dynamique : voyageur en danger, ressource rare, faille mineure, épave, campement, menace locale.
6. Il ramène une preuve, des ressources, une relique, une commande, une graine, un poisson rare ou une information.
7. Il reçoit une récompense ou contribue à un objectif collectif.
8. Une trace est ajoutée au monde : réputation, chronique, progression de colonie, nouvelle rumeur.

### 4.2 Boucle moyenne : progression sur quelques jours

Objectif : créer une dynamique même lorsque les joueurs ne se croisent pas.

Déroulé type :

1. Une région gagne en instabilité.
2. Des rumeurs apparaissent.
3. Un ou plusieurs encounters dynamiques sont générés.
4. Des joueurs enquêtent à différents moments.
5. Des ressources spécifiques sont demandées.
6. Des commandes joueurs ou de colonie apparaissent.
7. Des cultures ou productions agricoles arrivent à maturité.
8. Une expédition temporaire peut être ouverte.
9. Les joueurs ramènent des objets ou informations.
10. La région évolue : menace réduite, avant-poste amélioré, nouvelle route ouverte, nouveau PNJ installé.

### 4.3 Boucle longue : progression sur plusieurs semaines

Objectif : donner un sens durable au serveur.

Déroulé type :

1. Une île principale est découverte ou rendue accessible.
2. Les joueurs explorent ses lieux fixes.
3. Des rumeurs et encounters liés à l'île apparaissent.
4. Des expéditions liées à l'île apparaissent.
5. Une colonie ou un avant-poste s'y développe.
6. Des métiers deviennent utiles localement.
7. Des ressources agricoles ou naturelles régionales sont domestiquées.
8. Une faune rare ou des créatures régionales sont découvertes.
9. Des locations, ateliers, champs ou échoppes donnent vie aux villes.
10. Des secrets sont révélés progressivement.
11. L'île devient un nouveau hub partiel, sans rendre les anciennes zones obsolètes.

---

## 5. Piliers fonctionnels

### 5.1 Exploration des îles principales

#### Intention

Les îles principales constituent le squelette du monde. Elles doivent donner une impression de progression initiale, de mystère et de découverte.

#### Fonctionnalités

- ouverture progressive des îles ;
- points d'intérêt fixes ;
- ruines, grottes, villages, ports, sanctuaires ;
- accès vers expéditions temporaires ;
- rumeurs propres à chaque île ;
- encounters dynamiques locaux ;
- ressources locales ;
- plantes et cultures régionales ;
- faune régionale ;
- dangers ou biomes distincts.

#### Priorité

**P0 - Fondamental.**

#### Notes de design

L'ouverture des îles ne doit pas être le seul moteur d'exploration. Une fois les îles ouvertes, elles doivent rester utiles comme lieux sociaux, économiques, RP et comme points d'accès vers du contenu renouvelable.

---

### 5.2 Expéditions temporaires

#### Intention

Créer une couche de contenu renouvelable par-dessus une carte fixe.

#### Concept

Des cartes, fragments, rumeurs, grottes ou portails permettent d'accéder à des zones temporaires générées ou assemblées côté serveur.

Ces zones peuvent être :

- îlots perdus ;
- cavernes ;
- ruines ;
- forêts altérées ;
- cryptes ;
- villages abandonnés ;
- épaves ;
- sanctuaires instables ;
- zones oniriques ou brisées.

#### Fonctionnalités

- génération d'une zone à partir d'un thème ;
- durée de persistance limitée ;
- accès solo ou groupe ;
- objectifs simples ;
- ressources spécifiques ;
- graines rares ou plantes instables ;
- faune ou créature rare possible ;
- boss ou rencontre finale optionnelle ;
- journalisation des découvertes ;
- disparition ou effondrement à expiration.

#### Exemples

- **L'Îlot aux Lanternes Mortes** : îlot brumeux, épaves, morts faibles, bois salé, lanterne ancienne.
- **La Crypte des Voix Basses** : souterrain court, murmures, pièges, relique sonore.
- **La Grève Rouge** : plage temporaire, crustacés agressifs, minerai oxydé, carte secondaire.
- **Le Hameau sans Ombre** : village vide, PNJ fantomatiques, enquête RP automatisée.

#### Priorité

**P0/P1 - Système identitaire majeur.**

#### MVP possible

- zones préfabriquées sélectionnées aléatoirement ;
- durée fixe de 7 jours ;
- portail ou entrée depuis une île ;
- quelques objectifs simples ;
- loot spécifique ;
- pas encore de génération LLM directe.

---

### 5.3 Encounters dynamiques

#### Intention

Créer des micro-situations temporaires qui donnent vie au monde entre deux expéditions, sans dépendre d'un GM connecté.

Un encounter dynamique ne doit pas être un simple spawn aléatoire. Il doit être une situation courte ou moyenne, contextualisée, limitée dans le temps, avec une action joueur claire et une conséquence possible.

#### Définition

Un encounter dynamique est une scène émergente dans le monde persistant : caravane attaquée, réfugiés, faille instable, épave, ressource rare, campement hostile, PNJ de passage, chasseur disparu, créature blessée, rituel interrompu, champ contaminé, ruche sauvage, banc de poissons rare.

Il se distingue d'une expédition temporaire :

- l'expédition ouvre un espace d'exploration dédié ;
- l'encounter apparaît dans le monde existant et anime une région déjà connue.

#### Types d'encounters

| Type | Durée indicative | Exemples | Objectif |
|---|---:|---|---|
| Petit encounter | 30 min à 2 h | voyageur attaqué, ressource rare, bête blessée, coffre échoué | Activité courte |
| Encounter régional | 12 à 72 h | caravane bloquée, réfugiés, faille, camp de bandits, champ malade | Contribution asynchrone |
| Encounter majeur | 3 à 7 jours | épave importante, siège d'avant-poste, colonie en crise | Mini-arc communautaire |

#### Priorité

**P1 - Système transversal majeur.**

---

### 5.4 Instabilité régionale

#### Intention

Créer un monde qui réagit aux actions joueurs sans nécessiter de GM.

#### Concept

Chaque île ou région possède un niveau d'instabilité. Ce niveau monte ou descend selon les actions réalisées.

#### Sources d'instabilité

- trop de monstres tués ;
- trop de ressources extraites ;
- expéditions ouvertes ;
- encounters échoués ou ignorés ;
- reliques ramenées sans purification ;
- cultures instables mal contrôlées ;
- échecs de contrats ;
- zones ignorées trop longtemps ;
- événements automatiques ;
- choix collectifs.

#### Effets possibles

- nouveaux monstres ;
- météo ou ambiance altérée ;
- ressources corrompues ;
- apparition de portails ;
- rumeurs inquiétantes ;
- attaque de caravane ;
- maladie de cultures ;
- essaims ou ruches agressives ;
- campement hostile ;
- variation de faune rare ;
- mini-boss régional ;
- coût plus élevé des services locaux ;
- PNJ qui quittent temporairement une zone.

#### Priorité

**P1 - Très important, mais après les fondations.**

---

### 5.5 Rumeurs, contrats et tableaux locaux

#### Intention

Fournir au joueur une raison claire de se connecter et d'agir.

#### Types de tableaux

- tableau des rumeurs ;
- registre de colonie ;
- avis de recherche ;
- contrats d'expédition ;
- demandes d'artisans ;
- appels à escorte ;
- demandes de ressources ;
- commandes agricoles ;
- commandes d'alchimie ou de cuisine ;
- signalements d'encounters dynamiques.

#### Types de missions

- exploration ;
- livraison ;
- escorte ;
- collecte ;
- chasse ;
- pêche ;
- fouille ;
- cartographie ;
- agriculture ;
- enquête ;
- contribution à une construction ;
- récupération de relique ;
- assistance à un PNJ ;
- résolution d'un encounter local.

#### Règles anti-abus

- une mission unique ne doit pas être farmable indéfiniment ;
- les contrats à forte récompense doivent être limités ;
- les contrats publics doivent favoriser l'ouverture à d'autres joueurs ;
- les récompenses doivent être plafonnées ;
- les objectifs doivent éviter les boucles AFK.

#### Priorité

**P0 - Fondamental.**

---

### 5.6 Reliques, objets inconnus et identification

#### Intention

Faire de l'exploration autre chose qu'une simple collecte de loot.

#### Concept

Les joueurs trouvent des objets partiellement inconnus. Leur valeur réelle dépend d'une phase d'identification ou d'analyse.

#### Types de reliques

- fragment de carte ;
- outil ancien ;
- bijou altéré ;
- arme rouillée mais étrange ;
- graine fossilisée ;
- pierre chantante ;
- manuscrit abîmé ;
- mécanisme incomplet ;
- objet rituel ;
- graine impossible ;
- cire ancienne ;
- tablette agricole ou alchimique.

#### Métiers utiles

- érudit : révèle le lore ;
- cartographe : révèle une destination ;
- artisan : révèle un usage craft ;
- mage : révèle une propriété magique ;
- alchimiste : révèle un effet instable ;
- herboriste : révèle une propriété végétale ;
- cultivateur : tente une germination contrôlée ;
- forgeron : restaure ou stabilise l'objet.

#### Priorité

**P1 - Très fort pour l'identité.**

---

### 5.7 Métiers d'exploration douce

#### Intention

Créer des activités utiles qui ne reposent pas uniquement sur le combat. Ces métiers doivent donner aux joueurs calmes, artisans, récolteurs ou RP une vraie place dans la reconstruction du monde.

#### Métiers concernés

| Métier / activité | Rôle gameplay | Lien avec l'identité du serveur |
|---|---|---|
| Agriculture | Nourrir, produire, reconstruire | Colonies, survie douce, commandes locales |
| Apiculture | Miel, cire, bougies, remèdes, cuisine | Vie civile, artisanat, rituels, lumière |
| Herboristerie | Plantes, remèdes, poisons, alchimie | Biomes, îles, expéditions, soins |
| Archéologie | Fouilles, reliques, fragments de lore | Monde brisé, ruines, découverte |
| Metal detecting | Caches, objets enfouis, pièces anciennes | Exploration de terrain, secrets locaux |
| Orpaillage | Ressources de rivière, poussières rares | Activité douce, économie locale |
| Pêche avancée | Filets, bancs rares, créatures maritimes | Îles, mer, ports, boss côtiers |
| Cartographie | Cartes, routes, expéditions | Exploration et progression du monde |
| Cuisine | Rations, buffs légers, nourriture de colonie | Expéditions, agriculture, social |

#### Priorité

**P1 - Très cohérent avec l'identité du serveur.**

Ces métiers doivent arriver avant ou en même temps que certains systèmes de progression avancée. Ils donnent du contenu durable et non-combat à une petite communauté.

---

### 5.8 Agriculture, apiculture et ressources vivantes

#### Intention

L'agriculture ne doit pas être un simple décor ou un mini-jeu isolé. Elle doit servir la reconstruction, les colonies, la cuisine, l'alchimie, l'économie locale et les expéditions.

> L'agriculture est un outil de reconstruction, de vie civile et d'économie locale.

#### Boucle cible

```text
Graine trouvée en exploration ou achetée localement
→ culture dans une parcelle ou un jardin
→ récolte utile
→ transformation par cuisine, alchimie, artisanat ou apiculture
→ commande de joueur ou de colonie
→ effet sur reconstruction, réputation, expédition ou économie locale
```

#### Fonctionnalités P1

- cultures simples ;
- parcelles de village ou de ville ;
- jardins liés aux maisons ou locations ;
- graines régionales ;
- graines rares trouvées en expédition ;
- plantes médicinales ;
- plantes culinaires ;
- commandes agricoles de colonie ;
- apiculture simple ;
- miel, cire, bougies, onguents, remèdes ;
- stockage agricole de base ;
- liens avec cuisine et rations d'expédition.

#### Fonctionnalités P2

- sols ou biomes influençant les cultures ;
- irrigation simple ;
- maladies ou parasites sous forme d'encounters ;
- plantes instables liées à l'instabilité régionale ;
- transformations avancées ;
- élevage léger ;
- spécialisation de cultivateur, herboriste ou apiculteur.

#### Fonctionnalités P3

- saisons ;
- concours agricoles ;
- fêtes de récolte ;
- marchés agricoles saisonniers ;
- plantes décoratives rares ;
- cosmétiques liés aux jardins.

#### Exemples adaptés au serveur

##### Saule pâle

Graine trouvée dans une expédition brumeuse.

Utilité :

- produit des fibres résistantes à l'humidité ;
- sert aux cordages d'expédition ;
- peut être demandé pour améliorer un ponton ou un embarcadère.

##### Ortie de cendre

Plante des zones brûlées ou volcaniques.

Utilité :

- ingrédient de remède contre les brûlures ;
- composant d'alchimie ;
- pousse mieux en région instable, mais peut contaminer les cultures voisines.

##### Ruche des lanternes

Ruche rare liée aux zones côtières ou aux anciens phares.

Utilité :

- miel utilisé en cuisine ;
- cire utilisée pour bougies, lanternes, rituels ou craft RP ;
- peut déclencher un encounter d'essaim si mal exploitée.

#### Règles anti-corvée

- cycles de culture compatibles avec un rythme adulte ;
- pas d'arrosage obligatoire toutes les heures ;
- échec possible mais non punitif ;
- stockage adapté ;
- parcelles limitées mais non frustrantes ;
- bénéfices utiles mais pas obligatoires pour tout le serveur.

#### Priorité

**P1 pour agriculture simple, graines régionales, apiculture et commandes agricoles.**  
**P2 pour mutations, sols, irrigation, maladies et élevage.**  
**P3 pour saisons, fêtes et cosmétique.**

---

### 5.9 Craft d'expédition, de reconstruction et logistique

#### Intention

Faire du craft un moteur de progression, pas seulement une usine à équipement.

#### Familles de craft

##### Craft d'expédition

- rations ;
- torches longues durées ;
- kits de campement ;
- cordages ;
- outils de fouille ;
- balises ;
- pièges ;
- remèdes ;
- cartes améliorées ;
- équipements anti-biome.

##### Craft de reconstruction

- planches traitées ;
- ferrures ;
- pierres taillées ;
- clous ;
- tissus ;
- conduites ;
- semences ;
- meubles utiles ;
- renforts.

##### Craft de reliques et ressources vivantes

- purification ;
- réparation ;
- stabilisation ;
- sertissage ;
- transformation ;
- extraction d'empreinte ;
- séchage d'herbes ;
- extraction de cire ;
- préparation de graines ;
- fabrication de rations.

#### Logistique et confort nécessaires

Les systèmes de craft, reconstruction, agriculture, expéditions et reliques produisent beaucoup d'objets. Sans outils de stockage, les artisans passent trop de temps à trier au lieu de jouer.

Fonctionnalités à retenir :

- **Storage Boxes** : **P0 QoL**, stockage par type de ressource ou objet ;
- **BOD Deed Box** : **P1/P2**, utile si le système BOD devient important ;
- coffres d'atelier ;
- stockage de ressources de reconstruction ;
- coffres agricoles ;
- outils de tri limités et compréhensibles.

#### Priorité

**P1/P2 pour le craft avancé. P0 QoL pour les Storage Boxes de base.**

---

### 5.10 Reconstruction, colonies et avant-postes

#### Intention

Donner une finalité aux ressources et créer une progression collective.

#### Concept

Les joueurs contribuent à améliorer des lieux du monde : campements, villages, ports, routes, tours, phares, ateliers, fermes.

#### Types de constructions

- feu de camp ;
- camp temporaire ;
- refuge ;
- avant-poste ;
- phare ;
- ponton ;
- palissade ;
- atelier ;
- champ cultivable ;
- ruche communautaire ;
- entrepôt ;
- route sécurisée ;
- relais de caravanes.

#### Effets possibles

- nouveau PNJ ;
- nouveau marchand ;
- accès à un tableau local ;
- réduction de l'instabilité ;
- accès à de nouvelles expéditions ;
- bonus de repos ;
- stockage limité ;
- accès à du craft local ;
- nouvelles parcelles cultivables ;
- amélioration des prix ou services ;
- réduction ou transformation de certains encounters hostiles.

#### Priorité

**P1 - Important pour la boucle longue.**

---

### 5.11 Vie urbaine, locations et marché RP

#### Intention

Peupler les villes et structurer le commerce sans casser l'immersion.

#### City Rentals

À intégrer en **P1 haute**.

Usages RP :

- chambre d'auberge ;
- échoppe ;
- atelier ;
- bureau de guilde ;
- cabinet d'érudit ;
- comptoir marchand ;
- salle commune ;
- ambassade locale ;
- entrepôt temporaire ;
- petite parcelle urbaine ;
- jardin ou serre de ville.

#### Fulfillment Order System

À intégrer en **P1 haute**.

Concept : un joueur, une guilde, une colonie ou un atelier publie une commande de ressources, objets, nourriture, plantes, composants, outils ou matériaux de reconstruction.

Intérêt RP :

- crée des métiers : mineur, bûcheron, pêcheur, chasseur, herboriste, cultivateur, apiculteur, transporteur, fournisseur, artisan, marchand ;
- soutient la reconstruction ;
- facilite les interactions asynchrones ;
- évite que tout passe par Discord.

#### Vendor Search / marché global

À adapter en **P2**.

Risque : un marché global avec achat distant instantané peut casser l'immersion et vider les villes de leur intérêt.

Version recommandée :

- registre marchand régional ;
- courtier de marché ;
- recherche par ville ;
- frais de courtage ;
- délai de livraison ;
- achat distant limité ou réservé aux objets simples ;
- consultation depuis les villes, pas depuis n'importe où.

---

### 5.12 Faune rare, taming et pets évolutifs

#### Intention

Créer une boucle longue pour les tamers, chasseurs, druides, rôdeurs et explorateurs, sans transformer les pets en source principale de puissance.

Les pets doivent être des **compagnons liés au monde**, pas seulement des armes plus efficaces.

#### Positionnement

Le serveur peut s'inspirer de systèmes avancés comme UO Alive ou Maxxia, mais ne doit pas copier leur logique de progression verticale massive.

La direction recommandée :

> Une faune rare, régionale et évolutive, liée aux îles, aux biomes, aux expéditions, à l'instabilité et aux découvertes.

#### Ce qu'il faut privilégier

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

#### Priorité

| Sous-système | Priorité | Phase cible |
|---|---:|---|
| Créatures rares régionales | **P1 stratégique** | Alpha 2 / Beta |
| Pistage et indices | **P1** | Alpha 2 / Beta |
| Progression légère des pets | **P1/P2** | Beta |
| Stable Sphere ou stockage avancé de pets | **P2** | Beta+ |
| Pet cosmetics | **P2/P3** | Release+ |
| Évolution verticale avancée | **À repousser / encadrer** | Pas avant équilibre global |

---

### 5.13 Housing, agriculture domestique et vie civile

#### Intention

Créer une boucle non-combat durable pour les joueurs RP et sociaux.

#### Fonctionnalités possibles

- maison personnelle ;
- jardin ou petite parcelle ;
- cultures simples ;
- ruche domestique limitée ;
- élevage léger ;
- décoration utile ;
- ateliers domestiques ;
- stockage spécialisé ;
- commandes d'artisanat ;
- contrats entre joueurs ;
- auberges ou maisons de guilde.

#### Priorité

**P2 pour les systèmes avancés, mais P1 pour les parcelles utiles liées aux villes et colonies.**

---

### 5.14 Campements d'expédition

#### Intention

Donner aux explorateurs une base temporaire adaptée aux expéditions, aux régions dangereuses et à la survie douce.

#### Portable Campsite

À intégrer en **P1**.

Fonctionnalités possibles :

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

À éviter :

- coffre permanent gratuit ;
- recall abusif dès le lancement ;
- campement impossible à attaquer ou contester ;
- remplacement du housing ;
- multiplication infinie de camps.

#### Priorité

**P1 - Très cohérent avec exploration, survie douce et expéditions.**

---

### 5.15 Pêche avancée, archéologie, orpaillage et fouilles

#### Intention

Ajouter des activités d'exploration douce qui donnent de la valeur aux mers, rivières, ruines, plages, routes anciennes et zones oubliées.

#### Pêche avancée

Inspirations possibles : filets, bancs rares, créatures maritimes, mini-boss côtiers.

Adaptation :

- filets de pêche utilisables en mer ou depuis certains pontons ;
- poissons rares par région ;
- ressources de cuisine ou alchimie ;
- créatures marines rares ;
- épaves ou caisses remontées ;
- mini-boss côtier occasionnel, lié à une rumeur.

Priorité : **P1**.

#### Archéologie

Adaptation :

- sites de fouille dans les ruines ;
- outils de fouille craftables ;
- fragments de reliques ;
- morceaux de cartes ;
- tablettes de lore ;
- risques mineurs : pièges, poussières, gardiens, instabilité.

Priorité : **P1**.

#### Metal detecting

Adaptation :

- recherche d'objets enfouis ;
- caches anciennes ;
- monnaies oubliées ;
- composants de reliques ;
- traces liées à des encounters passés.

Priorité : **P1**.

#### Orpaillage

Adaptation :

- rivières ou plages aurifères ;
- poussières métalliques ;
- gemmes ou minéraux rares ;
- activité calme, utile aux artisans ;
- lien possible avec instabilité ou exploitation excessive.

Priorité : **P1/P2**.

---

### 5.16 PNJ dynamiques et LLM encadré

#### Intention

Créer une impression de monde vivant sans dépendre de GM connectés.

#### Usage souhaité du LLM

Le LLM doit enrichir le texte, le contexte et le RP. Il ne doit pas décider librement de l'économie, du spawn, du loot ou des récompenses.

#### Usages autorisés

- générer des rumeurs ;
- reformuler des contrats ;
- produire des dialogues de PNJ ;
- contextualiser l'état d'une région ;
- générer des descriptions d'expédition ;
- produire des chroniques ;
- créer des variantes de quêtes à partir de templates ;
- habiller narrativement des encounters dynamiques ;
- générer des descriptions de plantes, reliques ou sites de fouille ;
- aider les animateurs joueurs avec des textes.

#### Usages interdits ou strictement encadrés

- donner directement une récompense ;
- créer un objet librement ;
- spawn un boss sans règle ;
- modifier une réputation sans validation serveur ;
- accepter une action joueur non prévue ;
- écrire du contenu hors lore ;
- générer une quête impossible à résoudre.

#### Priorité

**P2 - Important, mais après les templates de base.**

---

### 5.17 Chroniques, mémoire du monde et book publishing

#### Intention

Donner du poids aux actions joueurs et aider les joueurs asynchrones à suivre l'histoire.

#### Fonctionnalités

- journal des découvertes ;
- chroniques hebdomadaires ;
- résumé des événements ;
- registre des expéditions ouvertes/fermées ;
- historique des contributions ;
- livres ou panneaux en jeu ;
- publication de livres RP ;
- journaux d'expédition ;
- export Discord ou wiki ;
- rumeurs issues d'actions passées ;
- conclusion automatique des encounters significatifs.

#### Priorité

**P1 pour les chroniques simples. P1/P2 pour book publishing.**

---

### 5.18 Combat, boss et PvE mémorable

#### Intention

Le combat doit soutenir l'exploration et l'aventure, sans devenir uniquement une course au DPS.

#### Design recommandé

Chaque boss ou mini-boss important doit avoir une mécanique lisible :

- sortir d'une zone dangereuse ;
- casser un cristal ;
- protéger un PNJ ;
- empêcher un rituel ;
- alterner distance et mêlée ;
- interrompre une canalisation ;
- gérer des adds ;
- éviter une accumulation de malus ;
- fuir temporairement pour récupérer.

#### Invasions et champions

Les systèmes de type invasion ou champion spawn peuvent être intéressants, mais seulement s'ils sont transformés en **menaces régionales liées à l'instabilité**.

À éviter :

- boucle de farm champion classique ;
- spawn répétable sans conséquence ;
- récompenses uniquement orientées optimisation.

À privilégier :

- menace contextualisée ;
- durée limitée ;
- chronique ;
- conséquence sur route, colonie ou région ;
- récompenses plafonnées.

#### Priorité

**P1/P2 - Important pour l'aventure, mais pas le cœur unique du serveur.**

---

### 5.19 Outils d'animation joueur limités

#### Intention

Permettre à des joueurs investis d'enrichir le RP sans devenir GM.

#### Priorité

**P2/P3 - À faire après stabilisation du gameplay principal.**

---

### 5.20 Identité visuelle, cosmétique et prestige RP

#### Item Transmogrification

À intégrer en **P2 haute**, avec restrictions.

Règles recommandées :

- même catégorie d'objet ;
- pas de transformation trompeuse en PvP ;
- coût en ressource ou service d'artisan ;
- restrictions de matériaux ;
- journalisation ou outil admin en cas d'abus.

#### Pet Cosmetics

À garder en **P2/P3**.

Les skins de pets sont intéressants s'ils sont liés au monde : région, lignée, événement, réputation, saison, expédition rare ou succès RP.

#### Prestige non-combat

Le serveur doit aussi permettre du prestige hors combat :

- titre d'explorateur ;
- maison ou échoppe reconnue ;
- animal rare ;
- jardin remarquable ;
- ruche ou production reconnue ;
- livre publié ;
- relique exposée ;
- contribution à une colonie ;
- participation à une chronique ;
- maîtrise artisanale.

---

### 5.21 Politique légère et gouvernance locale

#### Intention

Permettre aux joueurs d'influencer le monde sans créer une usine à conflits ou un clone de conquête de factions.

#### Formes possibles

- conseils de colonie ;
- votes sur projets collectifs ;
- choix de priorités de reconstruction ;
- titres honorifiques ;
- responsabilités RP ;
- budgets de ressources ;
- chartes de village ;
- décisions temporaires.

#### Priorité

**P3 - Endgame social, pas MVP.**

---

## 6. Inspirations externes à retenir ou adapter

### 6.1 UO Eventine

UO Eventine liste plusieurs systèmes custom intéressants pour nourrir la réflexion : archéologie, orpaillage/farming, filets de pêche avec boss, récompenses de treasure hunting propres aux facets, monster-hunting maps, claim system, seasonal quests, new player quests, champion spawns, metal detecting, custom tamables, craftable systems, artifact exchange, town center vendors, invasions, apiculture/wax crafting, book publishing, auction system, shrink system, taming BODs, etc.

#### À retenir fortement

| Feature Eventine | Adaptation Les Ariaristes | Priorité |
|---|---|---:|
| Archaeology System | Fouilles, ruines, reliques, fragments de lore | **P1** |
| Metal Detecting | Recherche de reliques enfouies, caches, objets anciens | **P1** |
| Gold panning / farming | Orpaillage, ressources de rivières, récolte douce | **P1/P2** |
| Custom fishing nets with bosses | Filets maritimes, créatures de mer, mini-boss côtiers | **P1** |
| Custom facet-specific treasure rewards | Récompenses propres aux îles/régions | **P1** |
| Custom tamables | Faune rare régionale, pets utilitaires | **P1 stratégique** |
| Custom craftable systems | Craft d'expédition, reconstruction, reliques | **P1** |
| Apiculture and wax crafting | Miel, cire, bougies, cuisine, alchimie, rituels | **P1** |
| Invasion System | Encounters majeurs / instabilité régionale | **P1/P2** |
| Book Publishing | Livres RP, chroniques, journaux d'expédition | **P1/P2** |
| Town Center player vendors | Marché central / vendeurs de ville | **P1/P2** |
| Custom new player quests | Onboarding narratif | **P0** |

#### À adapter avec prudence

| Feature | Risque | Adaptation recommandée |
|---|---|---|
| Artifact exchange system | Peut devenir une machine à recycler du farm | Réserver aux reliques inutilisées ou doublons, avec limites |
| Champion spawns | Peut devenir du PvE farm classique | Transformer en menaces régionales liées à l'instabilité |
| Powerscroll exchange | Très orienté optimisation | Repousser ou limiter fortement |
| Auction system | Peut centraliser toute l'économie | Version RP via commissaire-priseur / marché de ville |
| House-to-house gates | Casse la géographie | Limiter à cas RP, coût élevé ou usage guildes validées |
| World omniporters | Casse exploration et routes | À éviter ou limiter très fortement |
| Training Room | Utile mais peut casser progression | Onboarding/test, pas macro gratuite |
| Shrink / Stable Sphere | Trop pratique si pets rares | P2, après équilibrage des pets |

### 6.2 Albion Online

Inspiration utile : économie de production, parcelles, cultures, élevage, transformation et spécialisation.

À reprendre :

- parcelles limitées ;
- production cyclique ;
- transformation de matières premières ;
- économie entre récolteurs, artisans et consommateurs ;
- spécialisation de joueurs ;
- lien avec housing, villes et guildes.

À éviter :

- agriculture obligatoire pour optimiser le personnage ;
- économie industrielle trop lourde ;
- farm quotidien pénible ;
- dépendance excessive aux timers.

---

## 7. Matrice de priorisation

| Priorité | Fonctionnalité | Pourquoi | Phase cible |
|---|---|---|---|
| P0 | Île de départ claire | Base d'accueil et identité immédiate | MVP |
| P0 | Tableaux de rumeurs/contrats | Donne une activité dès la connexion | MVP |
| P0 | New player quests / onboarding narratif | Faire comprendre le monde et les mécaniques | MVP |
| P0 | Storage Boxes de base | Évite que craft et reconstruction deviennent pénibles | MVP |
| P0 | Ouverture progressive des îles | Structure la découverte initiale | MVP / Alpha |
| P0/P1 | Expéditions temporaires simples | Résout le problème de carte fixe | Alpha 1 |
| P1 | Encounters dynamiques | Donne vie au monde entre deux expéditions et sans GM | Alpha 2 |
| P1 | Instabilité régionale | Monde réactif et asynchrone | Alpha 2 |
| P1 | Agriculture simple | Vie civile, reconstruction, économie locale | Alpha 2 / Beta |
| P1 | Apiculture / cire / miel | Craft, cuisine, alchimie, rituels, vie civile | Alpha 2 / Beta |
| P1 | Métiers d'exploration douce | Contenu non-combat durable | Alpha 2 / Beta |
| P1 | Archéologie | Ruines, reliques, lore, exploration | Alpha 2 / Beta |
| P1 | Metal detecting | Caches, secrets, exploration de terrain | Alpha 2 / Beta |
| P1 | Pêche avancée / filets | Contenu maritime, ports, ressources, boss côtiers | Alpha 2 / Beta |
| P1/P2 | Orpaillage | Activité douce, ressources de rivières | Beta |
| P1 | Reliques inconnues | Donne du sens à l'exploration | Alpha 2 |
| P1 | Reconstruction / avant-postes | Progression collective longue | Alpha 2 |
| P1 | Portable Campsite | Exploration, survie douce, campements RP | Alpha 2 / Beta |
| P1 | Fulfillment Orders | Économie sociale et commandes de ressources | Alpha 2 / Beta |
| P1 | City Rentals | Vie RP des villes, auberges, échoppes, ateliers | Beta |
| P1 stratégique | Custom Taming Systems | Boucle longue pour tamers, chasseurs, rôdeurs et explorateurs | Alpha 2 / Beta |
| P1 | Chroniques du monde | Renforce RP et asynchrone | Alpha 2 |
| P1/P2 | Book Publishing | Mémoire du monde, RP, journaux d'expédition | Beta |
| P1/P2 | Boss mécaniques simples | Aventure mémorable | Alpha 2 / Beta |
| P1/P2 | Invasions régionales | Menaces liées à l'instabilité | Beta |
| P1/P2 | Craft d'expédition avancé | Profondeur métier | Beta |
| P1/P2 | Pets évolutifs avancés | Intéressant si horizontal, utilitaire et non surpuissant | Beta |
| P1/P2 | BOD Deed Box | QoL craft si BOD important | Beta |
| P2 | Stable Sphere / shrink encadré | QoL tamer après équilibrage du rôle des pets | Beta+ |
| P2 | PNJ dynamiques / LLM | RP automatisé | Beta |
| P2 | Housing/agriculture avancée | Vie civile durable | Beta |
| P2 | Vendor Search RP / auction RP | Commerce lisible sans casser l'immersion | Beta+ |
| P2 | Artifact exchange encadré | Recyclage limité des reliques/doublons | Beta+ |
| P2 haute | Item Transmogrification | Identité visuelle RP encadrée | Beta+ |
| P2/P3 | Seasonal exchanges | Saisonnier intéressant, attention au farm | Release+ |
| P2/P3 | Pet Cosmetics | Prestige et collection | Release+ |
| P3 | Outils animateurs joueurs | Social avancé | Post-beta |
| P3 | Politique légère | Endgame communautaire | Post-beta |
| P3 | Raffle / toys / fun cosmetics | Fun social, non central | Release+ |
| P3 | Saisons / arcs longs | Renouvellement long terme | Release+ |

---

## 8. Séquencement recommandé

### Phase 0 - Cadrage et socle

#### Objectifs

- valider la vision ;
- choisir les noms définitifs des systèmes ;
- définir le vocabulaire lore ;
- créer les premiers documents techniques ;
- préparer le backlog YouTrack/GitHub Projects ;
- confirmer les systèmes exclus de la V1.

#### Livrables

- présent document validé ;
- glossaire gameplay ;
- liste des Epics ;
- charte de design ;
- structure de données cible ;
- liste des systèmes exclus de la V1.

### Phase 1 - MVP jouable

#### Objectif

Un joueur doit pouvoir arriver, comprendre le serveur, faire une activité utile et percevoir la promesse du monde.

#### Fonctionnalités

- île de départ ;
- onboarding narratif ;
- quelques PNJ fixes ;
- tableau de rumeurs/contrats ;
- missions simples ;
- premières ressources utiles ;
- premiers lieux explorables ;
- Storage Boxes de base ;
- une forme minimale de réputation ;
- premières chroniques manuelles ou semi-automatiques.

### Phase 2 - Expéditions temporaires

#### Objectif

Introduire le système différenciant qui renouvelle l'exploration.

#### Fonctionnalités

- cartes ou fragments d'expédition ;
- accès par portail, grotte ou embarcadère ;
- zones temporaires préfabriquées ;
- durée de persistance ;
- objectifs simples ;
- reliques ou ressources spécifiques ;
- premières graines ou ressources rares ;
- fermeture automatique.

### Phase 3 - Encounters, instabilité et conséquences

#### Objectif

Faire réagir le monde aux actions joueurs et créer des situations vivantes dans les régions déjà connues.

#### Fonctionnalités

- premiers encounters dynamiques ;
- jauge d'instabilité régionale ;
- seuils ;
- rumeurs liées aux seuils ;
- spawns ou événements associés ;
- décrue automatique ;
- premiers effets sur colonies ;
- chronique automatique de conclusion pour les encounters significatifs.

### Phase 4 - Reconstruction, craft utile, agriculture et logistique

#### Objectif

Créer une boucle durable autour des ressources, des cultures et des métiers utiles.

#### Fonctionnalités

- objectifs collectifs ;
- paliers de construction ;
- avant-postes ;
- craft d'expédition ;
- ressources locales ;
- agriculture simple ;
- apiculture simple ;
- cuisine/rations simples ;
- premières commandes agricoles ;
- premiers services débloqués ;
- commandes simples de ressources ;
- stockage spécialisé par atelier ou ressource.

### Phase 5 - Exploration douce, campements et faune rare

#### Objectif

Renforcer l'identité exploration et ajouter des boucles longues non-combat.

#### Fonctionnalités

- Portable Campsite ;
- archéologie ;
- metal detecting ;
- pêche avancée ;
- orpaillage ;
- premières créatures rares régionales ;
- premiers indices de pistage ;
- pets utilitaires simples ;
- premiers liens entre faune, flore, biome et instabilité.

### Phase 6 - Vie sociale, villes et RP automatisé

#### Objectif

Renforcer l'impression de monde vivant.

#### Fonctionnalités

- PNJ avec dialogues améliorés ;
- rumeurs contextualisées ;
- chroniques automatiques ;
- premiers usages LLM encadrés ;
- contrats plus narratifs ;
- City Rentals ;
- premières échoppes/ateliers/parcelles louables ;
- book publishing ;
- réputation plus visible.

### Phase 7 - Solo renforcé, marché RP et confort avancé

#### Objectif

Rendre le serveur plus confortable pour petite population sans tuer le multijoueur.

#### Fonctionnalités

- compagnon unique ;
- pension/auberge ;
- équipement limité ;
- rôles simples ;
- progression lente ;
- restrictions anti-farm ;
- Vendor Search RP ;
- auction RP si nécessaire ;
- BOD Deed Box si nécessaire ;
- Stable Sphere si le taming est stabilisé.

### Phase 8 - Social avancé, prestige et endgame communautaire

#### Objectif

Donner une profondeur long terme.

#### Fonctionnalités

- statut de joueur-animateur limité ;
- gouvernance légère ;
- décisions de colonie ;
- saisons ;
- grands arcs narratifs automatisés ;
- menaces régionales ;
- expéditions rares ;
- reliques majeures ;
- Item Transmogrification ;
- Pet Cosmetics ;
- fêtes agricoles ;
- concours ou marchés saisonniers ;
- conséquences durables.

---

## 9. Backlog initial en Epics

### EPIC-1 - Identité et socle d'accueil

Objectif : créer l'expérience de départ et poser le ton du serveur.

### EPIC-2 - Système de rumeurs et contrats

Objectif : offrir une boucle d'activité autonome.

### EPIC-3 - Expéditions temporaires

Objectif : renouveler l'exploration malgré la carte fixe.

### EPIC-4 - Instabilité régionale

Objectif : faire évoluer le monde automatiquement.

### EPIC-5 - Reliques et identification

Objectif : donner de la profondeur au loot d'exploration.

### EPIC-6 - Reconstruction et avant-postes

Objectif : créer une progression collective.

### EPIC-7 - Craft d'expédition et de reconstruction

Objectif : rendre les métiers utiles à l'exploration et à la reconstruction.

### EPIC-8 - Chroniques et mémoire du monde

Objectif : rendre visible l'histoire en cours.

### EPIC-9 - PNJ dynamiques et LLM encadré

Objectif : améliorer le RP automatisé.

### EPIC-10 - Compagnons de route

Objectif : soutenir le jeu solo.

### EPIC-11 - Housing, agriculture domestique et vie civile

Objectif : donner une boucle sociale et non-combat.

### EPIC-12 - Outils d'animation joueur

Objectif : permettre l'animation communautaire encadrée.

### EPIC-13 - Gouvernance légère

Objectif : créer un endgame social.

### EPIC-14 - Encounters dynamiques

Objectif : faire apparaître dans le monde des micro-situations temporaires, contextualisées et limitées, liées aux rumeurs, à l'instabilité régionale et aux actions joueurs.

### EPIC-15 - Faune rare, taming et pets évolutifs

Objectif : créer une boucle de taming longue durée, liée aux régions, aux biomes, à l'exploration et à l'instabilité du monde.

### EPIC-16 - Logistique artisanale et stockage

Objectif : réduire la friction de stockage et soutenir les métiers, la reconstruction et l'économie artisanale.

### EPIC-17 - Commandes joueurs et économie sociale

Objectif : permettre aux joueurs, ateliers et colonies de publier des commandes de ressources ou d'objets.

### EPIC-18 - Vie urbaine, locations et marché RP

Objectif : peupler les villes et structurer le commerce sans casser l'immersion.

### EPIC-19 - Campements d'expédition

Objectif : permettre aux explorateurs de créer des bases temporaires limitées et utiles.

### EPIC-20 - Identité visuelle et prestige RP

Objectif : permettre aux joueurs d'affirmer leur identité visuelle sans casser l'équilibrage.

### EPIC-21 - Agriculture, apiculture et ressources vivantes

Objectif : créer une boucle de production civile utile à la reconstruction, aux commandes, à la cuisine, à l'alchimie et aux expéditions.

User Stories possibles :

- définir les cultures simples ;
- créer les premières graines régionales ;
- créer les parcelles de ville ou de colonie ;
- créer les premières commandes agricoles ;
- créer la récolte et transformation de base ;
- créer les ruches simples ;
- produire miel, cire, bougies ou remèdes ;
- lier certaines plantes aux expéditions ;
- lier certaines cultures à la reconstruction ;
- créer les règles anti-corvée et anti-farm.

### EPIC-22 - Métiers d'exploration douce

Objectif : créer des activités utiles non-combat liées aux ruines, rivières, mers, sols et secrets du monde.

User Stories possibles :

- créer le système d'archéologie ;
- créer les outils de fouille ;
- créer le metal detecting ;
- créer l'orpaillage ;
- créer la pêche avancée ;
- créer les filets de pêche ;
- définir les récompenses régionales ;
- lier ces métiers aux reliques et à la reconstruction ;
- créer les règles anti-farm ;
- produire des chroniques pour les découvertes majeures.

### EPIC-23 - Onboarding narratif et premières quêtes

Objectif : permettre à un nouveau joueur de comprendre le monde, les métiers et les boucles de base sans dépendre d'un GM.

User Stories possibles :

- créer une quête d'arrivée ;
- présenter les rumeurs ;
- présenter une contribution de reconstruction ;
- présenter un métier non-combat ;
- présenter une mini-expédition ou un lieu de découverte ;
- donner une première récompense utile mais non déséquilibrante.

---

## 10. Règles anti-dérive

### 10.1 Ne pas devenir un serveur de guerre de factions

À éviter :

- guerre permanente de factions ;
- conquête de villes comme gameplay central ;
- armées NPC contrôlées par joueurs comme pilier principal ;
- politique trop lourde dès le départ.

À privilégier :

- reconstruction ;
- exploration ;
- colonies ;
- tensions locales ;
- conséquences RP ;
- décisions communautaires limitées.

### 10.2 Ne pas devenir un shard orienté progression excessive

À éviter :

- inflation massive de stats ;
- milliers d'affixes ;
- pets endgame incontrôlables ;
- progression verticale infinie ;
- loot comme unique moteur ;
- surcomplexité immédiate.

À privilégier :

- progression horizontale ;
- objets à histoire ;
- craft utile ;
- agriculture utile ;
- exploration ;
- pets utilitaires ou RP ;
- boss mécaniques ;
- qualité de vie ciblée.

### 10.3 Ne pas dépendre d'une présence GM

À éviter :

- quêtes uniquement manuelles ;
- PNJ qui nécessitent possession GM pour être intéressants ;
- événements rares réservés à une soirée précise ;
- progression bloquée par validation staff.

À privilégier :

- templates ;
- automatisation ;
- encounters dynamiques ;
- cycles de production ;
- expiration longue ;
- LLM encadré ;
- chroniques ;
- systèmes autonomes.

### 10.4 Ne pas transformer les métiers doux en farm déguisé

À éviter :

- récolte répétable sans contexte ;
- timer court obligeant à revenir trop souvent ;
- récompenses uniquement en or ;
- ressources rares qui deviennent obligatoires pour tout ;
- économie cassée par production infinie.

À privilégier :

- contexte régional ;
- cycles longs raisonnables ;
- commandes locales ;
- limites de parcelles ;
- transformation par métiers ;
- valeur RP et collective ;
- liens avec rumeurs, instabilité ou reconstruction.

### 10.5 Ne pas rendre les pets obligatoires

À éviter :

- pet obligatoire pour l'exploration ;
- pet obligatoire pour le PvE ;
- pet plus utile qu'un joueur réel ;
- progression de pet plus importante que celle du personnage ;
- stockage massif de pets rares.

À privilégier :

- rôle utilitaire ;
- prestige RP ;
- spécialisation régionale ;
- aide contextuelle ;
- progression plafonnée ;
- rareté maîtrisée.

### 10.6 Ne pas casser l'immersion par le confort

À éviter :

- achat distant global instantané ;
- téléportation magique de tous les biens ;
- stockage illimité sans coût ;
- campements permanents gratuits ;
- transmog trompeuse.

À privilégier :

- courtiers ;
- frais ;
- délais ;
- restrictions ;
- ancrage en ville ;
- confort au service du RP.

---

## 11. Critères d'acceptation globaux

Une fonctionnalité est cohérente avec la direction du serveur si elle répond à au moins trois de ces critères :

- elle encourage l'exploration ;
- elle soutient le RP ;
- elle fonctionne sans GM connecté ;
- elle reste utile en petite population ;
- elle favorise l'asynchrone ;
- elle crée des interactions entre joueurs ;
- elle donne du sens au craft ;
- elle donne du sens à la vie civile ;
- elle évite l'inflation pure de puissance ;
- elle ajoute des conséquences visibles ;
- elle s'intègre au thème du monde brisé/reconstruction.

Une fonctionnalité doit être re-questionnée si elle :

- n'ajoute que du farm ;
- exige trop de maintenance manuelle ;
- crée un déséquilibre solo/groupe ;
- favorise les joueurs très disponibles ;
- complexifie fortement sans renforcer l'identité ;
- copie trop directement un autre shard.

### Critères spécifiques à l'agriculture

Un système agricole est acceptable s'il respecte les critères suivants :

- il soutient la reconstruction, les commandes, la cuisine, l'alchimie ou le RP ;
- il n'oblige pas à se connecter plusieurs fois par jour ;
- il n'est pas seulement décoratif ;
- il produit des ressources utiles mais non obligatoires pour tout ;
- il possède des limites de parcelles ou de production ;
- il peut être lié aux régions, expéditions ou colonies ;
- il évite la corvée et le farm industriel.

### Critères spécifiques aux métiers d'exploration douce

Un métier d'exploration douce est acceptable s'il respecte les critères suivants :

- il donne une activité hors combat ;
- il produit une ressource, une découverte, un indice ou une contribution ;
- il s'intègre au monde et aux régions ;
- il peut alimenter rumeurs, chroniques ou reconstruction ;
- il ne produit pas une richesse infinie ;
- il reste compréhensible et peu lourd à maintenir.

---

## 12. Première cible réaliste

La première version réellement jouable devrait viser peu de systèmes, mais bien reliés entre eux.

### Contenu recommandé pour première alpha

- une île de départ forte ;
- un onboarding narratif ;
- un tableau de rumeurs ;
- quelques contrats ;
- Storage Boxes de base ;
- une première expédition temporaire ;
- un premier encounter dynamique simple ;
- quelques reliques simples ;
- une première contribution de reconstruction ;
- une première culture utile simple ;
- une première commande agricole ou de ressource ;
- une chronique minimale ;
- un premier mini-boss mécanique ;
- outils admin pour reset et contrôle.

### Ce qui peut attendre

- LLM complet ;
- compagnons complexes ;
- politique ;
- animation joueur ;
- agriculture avancée ;
- économie régionale complète ;
- génération procédurale complète ;
- pets évolutifs avancés ;
- marché global ;
- systèmes de progression avancés ;
- saisons et cosmétiques.

---

## 13. Exemple de cycle complet cible

### Situation initiale

L'île de départ est partiellement reconstruite. Un tableau de rumeurs affiche :

> Des pêcheurs affirment voir des lumières au large, toujours à marée basse.

### Étape 1 - Découverte

Un joueur trouve une carte abîmée lors d'une mission de récupération.

### Étape 2 - Encounter dynamique

Avant même l'expédition, une épave échouée apparaît sur la côte. Les joueurs peuvent sauver un survivant, récupérer une cargaison ou ignorer la scène.

Le survivant mentionne une lumière aperçue au large.

### Étape 3 - Identification

Un cartographe ou un PNJ érudit révèle que la carte pointe vers un îlot temporaire.

### Étape 4 - Préparation

Les joueurs préparent l'expédition : rations, outils, torches, pet pisteur ou compagnon de route, stockage des ressources inutiles en atelier.

### Étape 5 - Expédition

Un portail maritime ou un embarcadère ouvre l'accès à **l'Îlot aux Lanternes Mortes** pendant sept jours.

### Étape 6 - Exploration

Les joueurs y trouvent :

- bois salé ;
- morts faibles ;
- épaves ;
- coffre scellé ;
- lanterne ancienne ;
- graines de saule pâle ;
- indice sur une route maritime oubliée ;
- trace d'une créature rare maritime.

### Étape 7 - Retour

Les joueurs ramènent les ressources à la colonie.

### Étape 8 - Agriculture et transformation

Les graines de saule pâle sont plantées dans une parcelle de colonie. Après un cycle de culture, elles produisent des fibres résistantes à l'humidité.

### Étape 9 - Reconstruction

Le bois salé et les fibres de saule pâle permettent d'améliorer un phare ou un ponton.

### Étape 10 - Conséquence

Le phare réduit les risques maritimes et débloque de nouvelles rumeurs liées à la mer.

### Étape 11 - Chronique

Une entrée est ajoutée à la chronique du serveur :

> Les premières lanternes du vieux phare ont été rallumées grâce aux ressources ramenées de l'îlot disparu et aux fibres cultivées dans la colonie.

Ce cycle illustre la direction souhaitée : rumeur, encounter, préparation, exploration, agriculture, ressource, RP, reconstruction, conséquence, renouvellement.

---

## 14. Questions ouvertes pour le staff

- Quel nom final donner aux expéditions temporaires ?
- Quelle durée de persistance par défaut : 3, 7 ou 14 jours ?
- Quelle durée donner aux encounters : 2h, 24h, 72h selon leur taille ?
- L'ouverture des îles doit-elle être calendaire, communautaire ou mixte ?
- Quelle part de contenu doit être solo, groupe léger, groupe difficile ?
- Quel niveau de survie est acceptable sans rendre le jeu pénible ?
- Quelle place donner au PvP ?
- Les compagnons doivent-ils être accessibles tôt ou plutôt après réputation ?
- Quelle place donner aux pets rares par rapport aux compagnons humanoïdes ?
- Quelle limite stricte donner à l'évolution des pets ?
- Les outils d'animation joueur doivent-ils être accordés manuellement ou automatiquement ?
- Quelle limite stricte donner au LLM ?
- Comment afficher les chroniques : en jeu, Discord, wiki, les trois ?
- Jusqu'où aller dans le confort marchand sans casser le RP ?
- Quel niveau de stockage est acceptable sans supprimer toute logistique ?
- Quelle durée de cycle agricole est acceptable sans créer une corvée ?
- Les parcelles agricoles doivent-elles être liées aux villes, aux maisons, aux colonies ou aux trois ?
- L'apiculture doit-elle être un métier autonome ou une extension de l'agriculture ?
- Jusqu'où pousser archéologie, pêche avancée et orpaillage avant la beta ?

---

## 15. Décision de direction

La ligne directrice proposée est la suivante :

> Construire un shard UO RP d'exploration et de reconstruction, jouable seul ou en petit groupe, où une carte fixe est enrichie par des expéditions temporaires, des encounters dynamiques, des rumeurs, des reliques, une faune rare, des ressources vivantes, une agriculture utile, des colonies évolutives, une économie sociale, une progression asynchrone et des outils RP automatisés.

Décision spécifique sur l'agriculture :

> Le serveur doit proposer une agriculture utile, liée aux colonies, aux expéditions, à la cuisine, à l'alchimie, à l'apiculture et à la reconstruction. Elle doit créer une vraie place pour les joueurs civils sans devenir une corvée quotidienne ni une économie industrielle obligatoire.

Décision spécifique sur les métiers d'exploration douce :

> L'archéologie, la pêche avancée, le metal detecting, l'orpaillage, l'herboristerie et la cartographie doivent donner des alternatives non-combat à l'exploration classique. Ces métiers doivent produire des indices, des ressources, du lore ou des contributions au monde, pas seulement de l'or.

Décision spécifique sur les systèmes complémentaires :

> Retenir les systèmes qui renforcent l'exploration, le RP, la vie sociale, le craft, l'agriculture et la reconstruction ; repousser ou encadrer les systèmes qui poussent trop fortement vers la puissance brute, le farm ou l'automatisation excessive.

Décision spécifique sur les pets :

> Le serveur doit proposer une boucle de taming rare et de compagnonnage animal, liée aux régions, aux expéditions et à l'instabilité du monde. Les créatures rares doivent renforcer l'exploration, le RP et l'identité des personnages, sans devenir une progression verticale incontrôlée ni remplacer la coopération entre joueurs.

Cette direction doit guider tous les futurs choix de gameplay et de développement.
