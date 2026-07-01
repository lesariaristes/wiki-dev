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

**Les Ariaristes / Shattered Isles Rising** est un shard Ultima Online RP francophone centré sur l'exploration, la reconstruction et les conséquences des actions joueurs dans un monde brisé.

Le serveur ne doit pas être uniquement un monde statique à parcourir, ni un serveur de guerre de factions, ni un simple shard de farming PvE. Il doit proposer une expérience où les joueurs :

- découvrent progressivement des îles et des secrets ;
- ouvrent des expéditions temporaires vers des zones instables ;
- rencontrent des situations dynamiques qui donnent vie au monde entre deux expéditions ;
- ramènent ressources, reliques, connaissances et récits ;
- reconstruisent des lieux, des routes, des avant-postes et des colonies ;
- développent des métiers utiles : artisanat, collecte, taming, commerce, exploration, érudition ;
- interagissent avec des PNJ plus vivants grâce à des systèmes automatisés et, à terme, à des dialogues assistés par LLM ;
- participent à une progression collective même lorsqu'ils ne jouent pas tous aux mêmes horaires ;
- peuvent jouer seuls, en petit groupe ou en communauté sans dépendre en permanence d'un GM.

### 2.2 Phrase d'identité

> Un monde brisé. Des îles à redécouvrir. Des expéditions qui changent. Des rencontres qui émergent. Une histoire écrite par les joueurs.

### 2.3 Positionnement par rapport aux autres shards

| Référence | Positionnement perçu | Ce qu'il faut éviter | Ce qu'on peut retenir |
|---|---|---|---|
| UO Midlands FR | Monde dynamique, factions, PNJ, conquête, politique, guerres de territoires | Copier la guerre de factions, les armées NPC, la conquête de villes | Inspiration sur le monde vivant et les interactions systémiques |
| Shards of Minax / Maxxia | UO très systémique, progression, loot, boss, pets, craft, builds, économie | Devenir un clone hack'n slash avec trop de caps, trop de loot et trop de systèmes empilés | Expéditions, contrats, compagnons, boss mécaniques, outils admin, progression longue, taming avancé |
| UO Alive | Monde vivant, QoL, pets, économie, confort de jeu | Copier des systèmes sans les relier à l'identité RP | S'inspirer du confort, de la boucle tamer et de la vie quotidienne |
| Les Ariaristes | Exploration RP, survie douce, reconstruction, reliques, rumeurs, encounters dynamiques, zones temporaires, progression asynchrone | Diluer l'identité en voulant tout faire | Assumer une direction cohérente et jouable avec peu de staff |

---

## 3. Principes de design

### 3.1 Jouable sans GM permanent

Le serveur doit fonctionner même si aucun GM n'est connecté. Les GM doivent enrichir l'expérience, pas la rendre indispensable.

Implications :

- rumeurs générées ou renouvelées automatiquement ;
- contrats récurrents ;
- expéditions temporaires ;
- encounters dynamiques temporaires ;
- événements déclenchés par l'état du monde ;
- PNJ capables de fournir un minimum de contexte ;
- progression collective visible sans intervention manuelle.

### 3.2 Compatible avec une petite communauté

Le shard doit rester vivant même avec peu de joueurs connectés simultanément.

Implications :

- contenu solo viable ;
- contenu petit groupe viable ;
- contribution asynchrone ;
- objectifs collectifs non bloqués par l'absence d'un joueur ;
- compagnons de route et pets utilitaires limités pour aider les joueurs seuls ;
- encounters ouverts assez longtemps pour ne pas pénaliser les joueurs hors horaires de pointe ;
- systèmes sociaux incitant à coopérer sans forcer une présence quotidienne.

### 3.3 Progression asynchrone équitable

Les joueurs ne jouent pas tous aux mêmes horaires. Les systèmes ne doivent pas favoriser uniquement les joueurs connectés au bon moment.

Règles :

- les contributions collectives doivent rester ouvertes plusieurs jours ;
- les événements majeurs ne doivent pas disparaître en quelques heures ;
- les récompenses doivent distinguer participation et monopole ;
- les expéditions temporaires doivent avoir une durée suffisante ;
- les encounters dynamiques importants doivent rester visibles assez longtemps pour permettre une participation différée ;
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
- faune rare régionale ;
- états régionaux ;
- avant-postes et colonies évolutifs.

### 3.5 RP utile, pas seulement décoratif

Le RP doit avoir des conséquences concrètes, mais sans nécessiter une animation GM permanente.

Exemples :

- une rumeur peut mener à une expédition ;
- un encounter peut sauver ou condamner un PNJ ;
- une relique identifiée peut débloquer une recette ;
- une colonie aidée peut proposer un nouveau service ;
- une région négligée peut devenir plus dangereuse ;
- un animal rare peut signaler une découverte régionale ;
- un joueur reconnu peut accéder à des outils sociaux limités.

### 3.6 Progression horizontale avant inflation verticale

Le serveur doit éviter une escalade excessive des statistiques, caps, dégâts, pets et équipements.

Priorité à :

- spécialisations ;
- avantages contextuels ;
- utilité sociale ;
- accès à de nouveaux outils ;
- craft avancé ;
- exploration plus sûre ;
- réputation ;
- lore et découvertes ;
- prestige visuel ou RP non destructeur d'équilibrage.

À éviter en première intention :

- caps à 200 partout ;
- progression infinie ;
- pets surpuissants ;
- farm obligatoire ;
- endgame uniquement basé sur le DPS.

### 3.7 Confort de jeu au service du gameplay

Certaines fonctionnalités de confort doivent être assumées comme prioritaires lorsqu'elles évitent de transformer le serveur en corvée.

Exemples :

- Storage Boxes pour les artisans et guildes ;
- outils de tri pour BODs si le craft BOD devient important ;
- registres de commandes pour éviter les échanges Discord permanents ;
- locations urbaines pour donner un ancrage RP sans forcer le housing complet.

Le confort est acceptable lorsqu'il soutient le RP, le craft, la reconstruction ou l'économie sociale. Il doit être limité lorsqu'il supprime toute friction utile, toute interaction ou toute immersion.

---

## 4. Boucles de gameplay principales

### 4.1 Boucle courte : session de 30 à 60 minutes

Objectif : permettre à un joueur de se connecter, faire quelque chose d'utile, puis repartir avec une impression de progression.

Déroulé type :

1. Le joueur consulte le tableau de rumeurs, de contrats ou de commandes.
2. Il choisit une activité adaptée à son temps disponible.
3. Il prépare son équipement, son compagnon, son pet utilitaire ou ses outils.
4. Il part explorer, récolter, escorter, enquêter, combattre ou livrer.
5. Il peut tomber sur un encounter dynamique : voyageur en danger, ressource rare, faille mineure, épave, campement, menace locale.
6. Il ramène une preuve, des ressources, une relique, une commande ou une information.
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
7. Une expédition temporaire peut être ouverte.
8. Les joueurs ramènent des objets ou informations.
9. La région évolue : menace réduite, avant-poste amélioré, nouvelle route ouverte, nouveau PNJ installé.

### 4.3 Boucle longue : progression sur plusieurs semaines

Objectif : donner un sens durable au serveur.

Déroulé type :

1. Une île principale est découverte ou rendue accessible.
2. Les joueurs explorent ses lieux fixes.
3. Des rumeurs et encounters liés à l'île apparaissent.
4. Des expéditions liées à l'île apparaissent.
5. Une colonie ou un avant-poste s'y développe.
6. Des métiers deviennent utiles localement.
7. Une faune rare ou des créatures régionales sont découvertes.
8. Des locations, ateliers ou échoppes donnent vie aux villes.
9. Des secrets sont révélés progressivement.
10. L'île devient un nouveau hub partiel, sans rendre les anciennes zones obsolètes.

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

### 5.3 Instabilité régionale

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
- campement hostile ;
- variation de faune rare ;
- mini-boss régional ;
- coût plus élevé des services locaux ;
- PNJ qui quittent temporairement une zone.

#### Priorité

**P1 - Très important, mais après les fondations.**

---

### 5.4 Rumeurs, contrats et tableaux locaux

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
- signalements d'encounters dynamiques.

#### Types de missions

- exploration ;
- livraison ;
- escorte ;
- collecte ;
- chasse ;
- enquête ;
- cartographie ;
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

### 5.5 Reliques, objets inconnus et identification

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
- objet rituel.

#### Métiers utiles

- érudit : révèle le lore ;
- cartographe : révèle une destination ;
- artisan : révèle un usage craft ;
- mage : révèle une propriété magique ;
- alchimiste : révèle un effet instable ;
- forgeron : restaure ou stabilise l'objet.

#### Priorité

**P1 - Très fort pour l'identité.**

---

### 5.6 Reconstruction, colonies et avant-postes

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
- amélioration des prix ou services ;
- réduction ou transformation de certains encounters hostiles.

#### Priorité

**P1 - Important pour la boucle longue.**

---

### 5.7 Housing, agriculture et vie civile

#### Intention

Créer une boucle non-combat durable pour les joueurs RP et sociaux.

#### Fonctionnalités possibles

- maison personnelle ;
- jardin ou petite parcelle ;
- cultures simples ;
- élevage léger ;
- décoration utile ;
- ateliers domestiques ;
- stockage spécialisé ;
- commandes d'artisanat ;
- contrats entre joueurs ;
- auberges ou maisons de guilde.

#### Priorité

**P2 - Important, mais après exploration et contrats.**

#### Notes

Le housing ne doit pas devenir uniquement décoratif. Il doit soutenir :

- craft ;
- économie ;
- RP ;
- agriculture ;
- préparation d'expédition ;
- stockage raisonnable ;
- socialisation.

---

### 5.8 Craft d'expédition, de reconstruction et logistique

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

##### Craft de reliques

- purification ;
- réparation ;
- stabilisation ;
- sertissage ;
- transformation ;
- extraction d'empreinte.

#### Logistique et confort nécessaires

Les systèmes de craft, reconstruction, agriculture, expéditions et reliques produisent beaucoup d'objets. Sans outils de stockage, les artisans passent trop de temps à trier au lieu de jouer.

Fonctionnalités à retenir :

- **Storage Boxes** : **P0 QoL**, stockage par type de ressource ou objet ;
- **BOD Deed Box** : **P1/P2**, utile si le système BOD devient important ;
- coffres d'atelier ;
- stockage de ressources de reconstruction ;
- outils de tri limités et compréhensibles.

#### Catégories de Storage Boxes recommandées

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

#### Priorité

**P1/P2 pour le craft avancé. P0 QoL pour les Storage Boxes de base.**

---

### 5.9 Compagnons de route

#### Intention

Permettre le jeu solo sans remplacer la coopération entre joueurs.

#### Concept

Chaque joueur peut recruter un compagnon principal limité.

#### Rôles possibles

- garde ;
- éclaireur ;
- pisteur ;
- soigneur faible ;
- porteur ;
- érudit ;
- apprenti artisan ;
- archer ;
- marin.

#### Règles

- un seul compagnon actif ;
- inférieur à un joueur réel ;
- progression lente ;
- coût d'entretien ;
- possibilité de l'équiper ;
- possibilité de le loger ou le mettre en pension ;
- personnalité simple ;
- interactions RP limitées.

#### Priorité

**P1/P2 - Très utile pour petite population.**

---

### 5.10 Faune rare, taming et pets évolutifs

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

#### Ce qu'il faut éviter

- pets surpuissants ;
- tiers infinis ;
- caps absurdes ;
- pet obligatoire pour faire le contenu ;
- tamer capable de tout faire mieux qu'un groupe ;
- pets qui remplacent les joueurs ;
- élevage ou reproduction qui casse la rareté ;
- stockage de pets trop permissif dès le lancement.

#### Rôles de pets intéressants

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

#### Exemples adaptés au serveur

##### Cerf de Brume

Créature rare liée aux zones forestières instables.

Utilité :

- détecte certains passages cachés ;
- réduit légèrement le risque d'embuscade dans les expéditions forestières ;
- faible intérêt en combat direct.

##### Chien des Ruines

Compagnon de piste lié aux anciennes cités détruites.

Utilité :

- suit des traces lors d'un encounter ;
- aide à retrouver un PNJ disparu ;
- peut signaler une cache ou une relique proche.

##### Lézard de Cendre

Créature de biome volcanique ou brûlé.

Utilité :

- meilleure résistance aux zones chaudes ;
- aide à transporter de petites charges ;
- peut détecter des minerais instables.

##### Corbeau du Cartographe

Familier rare associé aux explorateurs.

Utilité :

- peut revenir avec un indice mineur ;
- facilite la lecture de certaines cartes ;
- donne du prestige visuel et RP.

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

### 5.11 PNJ dynamiques et LLM encadré

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
- aider les animateurs joueurs avec des textes.

#### Usages interdits ou strictement encadrés

- donner directement une récompense ;
- créer un objet librement ;
- spawn un boss sans règle ;
- modifier une réputation sans validation serveur ;
- accepter une action joueur non prévue ;
- écrire du contenu hors lore ;
- générer une quête impossible à résoudre.

#### Architecture logique recommandée

1. Le serveur choisit un template autorisé.
2. Le serveur fournit au LLM un contexte limité.
3. Le LLM génère uniquement texte, ambiance ou variation narrative.
4. Le serveur valide ou filtre la réponse.
5. Les récompenses, objectifs et effets restent codés.

#### Priorité

**P2 - Important, mais après les templates de base.**

---

### 5.12 Chroniques et mémoire du monde

#### Intention

Donner du poids aux actions joueurs et aider les joueurs asynchrones à suivre l'histoire.

#### Fonctionnalités

- journal des découvertes ;
- chroniques hebdomadaires ;
- résumé des événements ;
- registre des expéditions ouvertes/fermées ;
- historique des contributions ;
- livres ou panneaux en jeu ;
- export Discord ou wiki ;
- rumeurs issues d'actions passées ;
- conclusion automatique des encounters significatifs.

#### Priorité

**P1 - Très utile pour RP et asynchrone.**

---

### 5.13 Vie urbaine, locations et marché RP

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
- entrepôt temporaire.

Règles recommandées :

- loyers raisonnables ;
- durée configurable ;
- expiration claire ;
- stockage limité ;
- pas d'avantage économique abusif ;
- lieux visibles et utiles RP.

#### Fulfillment Order System

À intégrer en **P1 haute**.

Concept : un joueur, une guilde, une colonie ou un atelier publie une commande de ressources, objets, nourriture, composants, outils ou matériaux de reconstruction.

Intérêt RP :

- crée des métiers : mineur, bûcheron, pêcheur, chasseur, herboriste, transporteur, fournisseur, artisan, marchand ;
- soutient la reconstruction ;
- facilite les interactions asynchrones ;
- évite que tout passe par Discord.

Règles recommandées :

- commandes visibles localement ou régionalement ;
- possibilité de commandes publiques de colonie ;
- pas d'automatisation totale du marché ;
- frais ou taxe légère ;
- historique des commandes ;
- limites anti-spam.

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

### 5.15 Outils d'animation joueur limités

#### Intention

Permettre à des joueurs investis d'enrichir le RP sans devenir GM.

#### Prérequis possibles

- ancienneté minimale ;
- personnage établi ;
- maison ou ancrage local ;
- réputation suffisante ;
- participation RP positive ;
- validation staff légère ;
- absence d'abus récent.

#### Outils possibles

- proposer une annonce RP publique ;
- créer un contrat social sans récompense excessive ;
- déclencher une scène prédéfinie ;
- poser temporairement quelques éléments décoratifs ;
- ouvrir une animation publique encadrée ;
- utiliser un PNJ relais prédéfini ;
- générer une rumeur locale ;
- créer une demande d'aide publique.

#### Conditions de déclenchement

- événement public ou semi-public ;
- nombre minimal de participants ou durée d'annonce ;
- pas de récompense farmable ;
- cooldown ;
- journalisation automatique ;
- visibilité staff ;
- impossibilité de cibler uniquement soi-même ou son cercle proche pour optimiser le gain.

#### Priorité

**P2/P3 - À faire après stabilisation du gameplay principal.**

---

### 5.16 Politique légère et gouvernance locale

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

### 5.17 Combat, boss et PvE mémorable

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

#### Priorité

**P1/P2 - Important pour l'aventure.**

---

### 5.18 Économie, marchés et contrats entre joueurs

#### Intention

Favoriser les échanges sociaux sans imposer une économie complexe dès le départ.

#### Fonctionnalités possibles

- contrats de récolte ;
- commandes d'artisanat ;
- panneaux d'achat/vente ;
- prix influencés légèrement par disponibilité ;
- besoins de colonies ;
- ressources locales ;
- caravanes ;
- marchés hebdomadaires ;
- métiers complémentaires.

#### Priorité

**P1/P2 - P1 pour les commandes simples, P2 pour le marché avancé.**

---

### 5.19 Encounters dynamiques

#### Intention

Créer des micro-situations temporaires qui donnent vie au monde entre deux expéditions, sans dépendre d'un GM connecté.

Un encounter dynamique ne doit pas être un simple spawn aléatoire. Il doit être une situation courte ou moyenne, contextualisée, limitée dans le temps, avec une action joueur claire et une conséquence possible.

#### Définition

Un encounter dynamique est une scène émergente dans le monde persistant : caravane attaquée, réfugiés, faille instable, épave, ressource rare, campement hostile, PNJ de passage, chasseur disparu, créature blessée, rituel interrompu.

Il se distingue d'une expédition temporaire :

- l'expédition ouvre un espace d'exploration dédié ;
- l'encounter apparaît dans le monde existant et anime une région déjà connue.

#### Types d'encounters

| Type | Durée indicative | Exemples | Objectif |
|---|---:|---|---|
| Petit encounter | 30 min à 2 h | voyageur attaqué, ressource rare, bête blessée, coffre échoué | Activité courte |
| Encounter régional | 12 à 72 h | caravane bloquée, réfugiés, faille, camp de bandits | Contribution asynchrone |
| Encounter majeur | 3 à 7 jours | épave importante, siège d'avant-poste, colonie en crise | Mini-arc communautaire |

#### Fonctionnalités

- apparition contrôlée par région ;
- durée de vie limitée ;
- contexte RP affiché via rumeur, message, PNJ ou tableau ;
- objectifs simples ;
- contribution solo ou collective ;
- récompense plafonnée ;
- conséquence sur réputation, instabilité, colonie ou chronique ;
- journalisation automatique ;
- cooldown régional ;
- outils admin de création, suppression, diagnostic et reset.

#### Règles anti-abus

- pas de récompense farmable en boucle ;
- récompense importante limitée par compte ou par période ;
- contribution minimale requise ;
- les récompenses principales doivent être réputation, progression collective, ressource spécifique ou information, pas seulement or et loot ;
- les encounters de forte valeur doivent être publics ou visibles ;
- cooldown par région et par type ;
- pas de déclenchement manuel joueur permettant de farmer son propre groupe ;
- journalisation des participations ;
- possibilité de désactiver ou nettoyer les encounters via outil admin.

#### Priorité

**P1 - Système transversal majeur.**

---

### 5.20 Identité visuelle, cosmétique et prestige RP

#### Item Transmogrification

À intégrer en **P2 haute**, avec restrictions.

Intérêt : très bon pour le RP visuel. Les joueurs peuvent conserver une identité cohérente sans sacrifier totalement l'efficacité.

Règles recommandées :

- même catégorie d'objet ;
- pas de transformation trompeuse en PvP ;
- pas de robe qui cache une armure lourde sans règle claire ;
- coût en ressource ou service d'artisan ;
- restrictions de matériaux ;
- journalisation ou outil admin en cas d'abus.

#### Pet Cosmetics

À garder en **P2/P3**.

Les skins de pets sont intéressants s'ils sont liés au monde :

- région ;
- lignée ;
- événement ;
- réputation ;
- saison ;
- expédition rare ;
- succès RP.

Règle : le cosmétique ne doit pas modifier les statistiques.

#### Prestige non-combat

Le serveur doit aussi permettre du prestige hors combat :

- titre d'explorateur ;
- maison ou échoppe reconnue ;
- animal rare ;
- relique exposée ;
- contribution à une colonie ;
- participation à une chronique ;
- maîtrise artisanale.

---

## 6. Matrice de priorisation

| Priorité | Fonctionnalité | Pourquoi | Phase cible |
|---|---|---|---|
| P0 | Île de départ claire | Base d'accueil et identité immédiate | MVP |
| P0 | Tableaux de rumeurs/contrats | Donne une activité dès la connexion | MVP |
| P0 | Storage Boxes de base | Évite que craft et reconstruction deviennent pénibles | MVP |
| P0 | Ouverture progressive des îles | Structure la découverte initiale | MVP / Alpha |
| P0/P1 | Expéditions temporaires simples | Résout le problème de carte fixe | Alpha 1 |
| P1 | Encounters dynamiques | Donne vie au monde entre deux expéditions et sans GM | Alpha 2 |
| P1 | Instabilité régionale | Monde réactif et asynchrone | Alpha 2 |
| P1 | Reliques inconnues | Donne du sens à l'exploration | Alpha 2 |
| P1 | Reconstruction / avant-postes | Progression collective longue | Alpha 2 |
| P1 | Portable Campsite | Exploration, survie douce, campements RP | Alpha 2 / Beta |
| P1 | Fulfillment Orders | Économie sociale et commandes de ressources | Alpha 2 / Beta |
| P1 | City Rentals | Vie RP des villes, auberges, échoppes, ateliers | Beta |
| P1 stratégique | Custom Taming Systems | Boucle longue pour tamers, chasseurs, rôdeurs et explorateurs | Alpha 2 / Beta |
| P1 | Chroniques du monde | Renforce RP et asynchrone | Alpha 2 |
| P1/P2 | Boss mécaniques simples | Aventure mémorable | Alpha 2 / Beta |
| P1/P2 | Craft d'expédition avancé | Profondeur métier | Beta |
| P1/P2 | Pets évolutifs avancés | Intéressant si horizontal, utilitaire et non surpuissant | Beta |
| P1/P2 | BOD Deed Box | QoL craft si BOD important | Beta |
| P2 | Stable Sphere | QoL tamer après équilibrage du rôle des pets | Beta+ |
| P2 | PNJ dynamiques / LLM | RP automatisé | Beta |
| P2 | Housing/agriculture avancée | Vie civile durable | Beta |
| P2 | Vendor Search RP | Commerce lisible sans casser l'immersion | Beta+ |
| P2 haute | Item Transmogrification | Identité visuelle RP encadrée | Beta+ |
| P2/P3 | Pet Cosmetics | Prestige et collection | Release+ |
| P3 | Outils animateurs joueurs | Social avancé | Post-beta |
| P3 | Politique légère | Endgame communautaire | Post-beta |
| P3 | Saisons / arcs longs | Renouvellement long terme | Release+ |

---

## 7. Séquencement recommandé

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

---

### Phase 1 - MVP jouable

#### Objectif

Un joueur doit pouvoir arriver, comprendre le serveur, faire une activité utile et percevoir la promesse du monde.

#### Fonctionnalités

- île de départ ;
- quelques PNJ fixes ;
- tableau de rumeurs/contrats ;
- missions simples ;
- premières ressources utiles ;
- premiers lieux explorables ;
- Storage Boxes de base ;
- une forme minimale de réputation ;
- premières chroniques manuelles ou semi-automatiques.

#### Critère de réussite

Un joueur solo peut jouer 1 à 2 heures sans GM et comprendre :

- où il est ;
- quoi faire ;
- pourquoi le monde est brisé ;
- comment contribuer ;
- ce qui pourrait l'intéresser ensuite.

---

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
- fermeture automatique.

#### Critère de réussite

Un joueur ayant déjà parcouru l'île principale a encore une raison de partir explorer.

---

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

#### Critère de réussite

Les joueurs constatent que leurs actions modifient l'ambiance, les dangers ou les opportunités d'une région. Même sans nouvelle île ou nouvelle expédition, le monde donne l'impression qu'il se passe quelque chose.

---

### Phase 4 - Reconstruction, craft utile et logistique

#### Objectif

Créer une boucle durable autour des ressources.

#### Fonctionnalités

- objectifs collectifs ;
- paliers de construction ;
- avant-postes ;
- craft d'expédition ;
- ressources locales ;
- premiers services débloqués ;
- commandes simples de ressources ;
- stockage spécialisé par atelier ou ressource.

#### Critère de réussite

Les joueurs ont une raison de récolter, fabriquer, transporter et contribuer au-delà du simple enrichissement personnel.

---

### Phase 5 - Exploration avancée, campements et faune rare

#### Objectif

Renforcer l'identité exploration et ajouter une boucle longue pour les tamers/explorateurs.

#### Fonctionnalités

- Portable Campsite ;
- premières créatures rares régionales ;
- premiers indices de pistage ;
- pets utilitaires simples ;
- premiers liens entre faune, biome et instabilité.

#### Critère de réussite

Les joueurs explorateurs et tamers disposent d'objectifs longs sans que les pets deviennent une progression de puissance incontrôlée.

---

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
- premières échoppes/ateliers louables ;
- réputation plus visible.

#### Critère de réussite

Les joueurs ont l'impression que le monde parle de ce qui arrive, même sans GM connecté, et peuvent s'ancrer dans les villes sans devoir posséder une maison complète.

---

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
- BOD Deed Box si nécessaire ;
- Stable Sphere si le taming est stabilisé.

#### Critère de réussite

Un joueur solo se sent accompagné, mais un groupe de joueurs reste clairement supérieur. Le commerce devient lisible sans casser l'immersion.

---

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
- conséquences durables.

#### Critère de réussite

Après plusieurs mois, les joueurs ont toujours des objectifs collectifs, personnels, sociaux et de prestige.

---

## 8. Backlog initial en Epics

### EPIC-1 - Identité et socle d'accueil

Objectif : créer l'expérience de départ et poser le ton du serveur.

User Stories possibles :

- créer l'île de départ ;
- définir les PNJ initiaux ;
- rédiger l'introduction lore ;
- créer les premiers contrats ;
- créer le premier tableau de rumeurs ;
- définir les premières récompenses.

### EPIC-2 - Système de rumeurs et contrats

Objectif : offrir une boucle d'activité autonome.

User Stories possibles :

- créer les types de contrats ;
- gérer rotation et expiration ;
- empêcher le farm abusif ;
- lier contrats à réputation ;
- afficher contrats par région ;
- journaliser les accomplissements.

### EPIC-3 - Expéditions temporaires

Objectif : renouveler l'exploration malgré la carte fixe.

User Stories possibles :

- créer les cartes/fragments ;
- générer une entrée ;
- instancier ou sélectionner une zone ;
- gérer durée de vie ;
- gérer récompenses ;
- fermer proprement la zone ;
- produire une chronique de découverte.

### EPIC-4 - Instabilité régionale

Objectif : faire évoluer le monde automatiquement.

User Stories possibles :

- créer une jauge par région ;
- définir les sources de variation ;
- créer les seuils ;
- déclencher rumeurs/spawns/encounters ;
- afficher l'état local ;
- décrue automatique ;
- outils admin de reset/ajustement.

### EPIC-5 - Reliques et identification

Objectif : donner de la profondeur au loot d'exploration.

User Stories possibles :

- créer les objets inconnus ;
- définir les types de reliques ;
- identifier par compétence ;
- révéler lore, destination, usage ou propriété ;
- transformer en recette ou ressource ;
- journaliser découverte majeure.

### EPIC-6 - Reconstruction et avant-postes

Objectif : créer une progression collective.

User Stories possibles :

- créer les projets de colonie ;
- définir les ressources requises ;
- gérer contributions ;
- débloquer services par palier ;
- afficher progression ;
- lier reconstruction à instabilité ;
- créer les premiers avant-postes.

### EPIC-7 - Craft d'expédition et de reconstruction

Objectif : rendre les métiers utiles à l'exploration et à la reconstruction.

User Stories possibles :

- définir recettes prioritaires ;
- créer outils d'expédition ;
- créer consommables utiles ;
- créer équipements anti-biome ;
- lier recettes aux reliques ;
- équilibrer coûts et durabilité.

### EPIC-8 - Chroniques et mémoire du monde

Objectif : rendre visible l'histoire en cours.

User Stories possibles :

- journal des événements ;
- chronique hebdomadaire ;
- affichage en jeu ;
- export Discord/wiki ;
- résumé des contributions ;
- historique des expéditions ;
- conclusion des encounters significatifs.

### EPIC-9 - PNJ dynamiques et LLM encadré

Objectif : améliorer le RP automatisé.

User Stories possibles :

- définir prompts système ;
- créer garde-fous ;
- limiter contexte ;
- générer dialogues ;
- générer rumeurs ;
- générer descriptions d'encounters ;
- valider réponses ;
- journaliser outputs sensibles ;
- fallback sans LLM.

### EPIC-10 - Compagnons de route

Objectif : soutenir le jeu solo.

User Stories possibles :

- recruter un compagnon ;
- choisir rôle ;
- gérer équipement ;
- gérer pension ;
- gérer progression ;
- limiter puissance ;
- empêcher exploitation AFK.

### EPIC-11 - Housing, agriculture et vie civile

Objectif : donner une boucle sociale et non-combat.

User Stories possibles :

- parcelles de culture ;
- cycles de croissance ;
- usages des récoltes ;
- mobilier utile ;
- stockage spécialisé ;
- commandes entre joueurs ;
- intégration avec reconstruction.

### EPIC-12 - Outils d'animation joueur

Objectif : permettre l'animation communautaire encadrée.

User Stories possibles :

- statut d'animateur joueur ;
- conditions d'accès ;
- outils autorisés ;
- cooldown ;
- préavis public ;
- nombre minimal de participants ;
- feedback ;
- modération.

### EPIC-13 - Gouvernance légère

Objectif : créer un endgame social.

User Stories possibles :

- conseils de colonie ;
- votes de priorité ;
- budgets de ressources ;
- titres locaux ;
- décisions temporaires ;
- conséquences visibles.

### EPIC-14 - Encounters dynamiques

Objectif : faire apparaître dans le monde des micro-situations temporaires, contextualisées et limitées, liées aux rumeurs, à l'instabilité régionale et aux actions joueurs.

User Stories possibles :

- définir les types d'encounters ;
- créer une structure de données commune ;
- créer les règles d'apparition par région ;
- gérer durée de vie et expiration ;
- lier encounters aux rumeurs ;
- lier encounters à l'instabilité ;
- gérer contribution solo et collective ;
- plafonner les récompenses ;
- générer une conclusion ou chronique ;
- créer les outils admin de spawn, preview, suppression et diagnostic.

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

## 9. Règles anti-dérive

### 9.1 Ne pas devenir un serveur de guerre de factions

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

### 9.2 Ne pas devenir un shard orienté progression excessive

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
- exploration ;
- pets utilitaires ou RP ;
- boss mécaniques ;
- qualité de vie ciblée.

### 9.3 Ne pas dépendre d'une présence GM

À éviter :

- quêtes uniquement manuelles ;
- PNJ qui nécessitent possession GM pour être intéressants ;
- événements rares réservés à une soirée précise ;
- progression bloquée par validation staff.

À privilégier :

- templates ;
- automatisation ;
- encounters dynamiques ;
- expiration longue ;
- LLM encadré ;
- chroniques ;
- systèmes autonomes.

### 9.4 Ne pas transformer les encounters en farm déguisé

À éviter :

- spawn aléatoire sans contexte ;
- coffres répétables en boucle ;
- mini-boss sans conséquence ;
- récompense uniquement en or ou loot ;
- apparition déclenchable par un joueur pour son propre groupe.

À privilégier :

- contexte RP ;
- visibilité publique ;
- durée limitée ;
- récompense plafonnée ;
- conséquence sur le monde ;
- journalisation ;
- lien avec rumeurs, instabilité ou reconstruction.

### 9.5 Ne pas rendre les pets obligatoires

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

### 9.6 Ne pas casser l'immersion par le confort

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

## 10. Critères d'acceptation globaux

Une fonctionnalité est cohérente avec la direction du serveur si elle répond à au moins trois de ces critères :

- elle encourage l'exploration ;
- elle soutient le RP ;
- elle fonctionne sans GM connecté ;
- elle reste utile en petite population ;
- elle favorise l'asynchrone ;
- elle crée des interactions entre joueurs ;
- elle donne du sens au craft ;
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

### Critères spécifiques aux encounters dynamiques

Un encounter dynamique est acceptable s'il respecte les critères suivants :

- il possède un contexte RP compréhensible ;
- il a une durée limitée ;
- il indique clairement ce que le joueur peut faire ;
- il a une conséquence ou une trace ;
- il n'est pas farmable indéfiniment ;
- il peut être résolu ou ignoré sans bloquer tout le serveur ;
- il est compatible avec le jeu asynchrone.

### Critères spécifiques aux pets évolutifs

Un système de pets évolutifs est acceptable s'il respecte les critères suivants :

- il renforce l'exploration, le RP ou la spécialisation ;
- il ne rend pas le tamer obligatoire ;
- il ne remplace pas la coopération entre joueurs ;
- il ne repose pas uniquement sur la hausse de stats ;
- il garde une rareté et une progression maîtrisées ;
- il possède des limites de stockage, de contrôle et de puissance ;
- il donne des usages contextuels plutôt qu'une domination générale.

---

## 11. Première cible réaliste

La première version réellement jouable devrait viser peu de systèmes, mais bien reliés entre eux.

### Contenu recommandé pour première alpha

- une île de départ forte ;
- un tableau de rumeurs ;
- quelques contrats ;
- Storage Boxes de base ;
- une première expédition temporaire ;
- un premier encounter dynamique simple ;
- quelques reliques simples ;
- une première contribution de reconstruction ;
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
- systèmes de progression avancés.

---

## 12. Exemple de cycle complet cible

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
- indice sur une route maritime oubliée ;
- trace d'une créature rare maritime.

### Étape 7 - Retour

Les joueurs ramènent les ressources à la colonie.

### Étape 8 - Reconstruction

Le bois salé permet d'améliorer un phare.

### Étape 9 - Conséquence

Le phare réduit les risques maritimes et débloque de nouvelles rumeurs liées à la mer.

### Étape 10 - Chronique

Une entrée est ajoutée à la chronique du serveur :

> Les premières lanternes du vieux phare ont été rallumées grâce aux ressources ramenées de l'îlot disparu.

Ce cycle illustre la direction souhaitée : rumeur, encounter, préparation, exploration, ressource, RP, reconstruction, conséquence, renouvellement.

---

## 13. Questions ouvertes pour le staff

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

---

## 14. Décision de direction

La ligne directrice proposée est la suivante :

> Construire un shard UO RP d'exploration et de reconstruction, jouable seul ou en petit groupe, où une carte fixe est enrichie par des expéditions temporaires, des encounters dynamiques, des rumeurs, des reliques, une faune rare, des colonies évolutives, une économie sociale, une progression asynchrone et des outils RP automatisés.

Décision spécifique sur les systèmes complémentaires :

> Retenir les systèmes qui renforcent l'exploration, le RP, la vie sociale, le craft et la reconstruction ; repousser ou encadrer les systèmes qui poussent trop fortement vers la puissance brute, le farm ou l'automatisation excessive.

Décision spécifique sur les pets :

> Le serveur doit proposer une boucle de taming rare et de compagnonnage animal, liée aux régions, aux expéditions et à l'instabilité du monde. Les créatures rares doivent renforcer l'exploration, le RP et l'identité des personnages, sans devenir une progression verticale incontrôlée ni remplacer la coopération entre joueurs.

Cette direction doit guider tous les futurs choix de gameplay et de développement.
