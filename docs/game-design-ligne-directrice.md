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
- ramènent ressources, reliques, connaissances et récits ;
- reconstruisent des lieux, des routes, des avant-postes et des colonies ;
- interagissent avec des PNJ plus vivants grâce à des systèmes automatisés et, à terme, à des dialogues assistés par LLM ;
- participent à une progression collective même lorsqu'ils ne jouent pas tous aux mêmes horaires ;
- peuvent jouer seuls, en petit groupe ou en communauté sans dépendre en permanence d'un GM.

### 2.2 Phrase d'identité

> Un monde brisé. Des îles à redécouvrir. Des expéditions qui changent. Une histoire écrite par les joueurs.

### 2.3 Positionnement par rapport aux autres shards

| Référence | Positionnement perçu | Ce qu'il faut éviter | Ce qu'on peut retenir |
|---|---|---|---|
| UO Midlands FR | Monde dynamique, factions, PNJ, conquête, politique, guerres de territoires | Copier la guerre de factions, les armées NPC, la conquête de villes | Inspiration sur le monde vivant et les interactions systémiques |
| Shards of Minax | UO très systémique, progression, loot, boss, pets, craft, builds, économie | Devenir un clone hack'n slash avec trop de caps, trop de loot et trop de systèmes empilés | Expéditions, contrats, compagnons, boss mécaniques, outils admin, progression longue |
| Les Ariaristes | Exploration RP, survie douce, reconstruction, reliques, rumeurs, zones temporaires, progression asynchrone | Diluer l'identité en voulant tout faire | Assumer une direction cohérente et jouable avec peu de staff |

---

## 3. Principes de design

### 3.1 Jouable sans GM permanent

Le serveur doit fonctionner même si aucun GM n'est connecté. Les GM doivent enrichir l'expérience, pas la rendre indispensable.

Implications :

- rumeurs générées ou renouvelées automatiquement ;
- contrats récurrents ;
- expéditions temporaires ;
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
- compagnons de route limités pour aider les joueurs seuls ;
- systèmes sociaux incitant à coopérer sans forcer une présence quotidienne.

### 3.3 Progression asynchrone équitable

Les joueurs ne jouent pas tous aux mêmes horaires. Les systèmes ne doivent pas favoriser uniquement les joueurs connectés au bon moment.

Règles :

- les contributions collectives doivent rester ouvertes plusieurs jours ;
- les événements majeurs ne doivent pas disparaître en quelques heures ;
- les récompenses doivent distinguer participation et monopole ;
- les expéditions temporaires doivent avoir une durée suffisante ;
- les nouveaux joueurs doivent toujours avoir des choses à découvrir, même si les anciennes îles sont déjà ouvertes.

### 3.4 Découverte renouvelée malgré une carte fixe

La carte principale d'Ultima Online est limitée et rapidement parcourue. Le renouvellement ne doit pas dépendre uniquement de la géographie statique.

Le serveur doit donc ajouter des couches dynamiques :

- expéditions temporaires ;
- zones instables ;
- donjons ou lieux générés côté serveur ;
- rumeurs évolutives ;
- reliques à identifier ;
- ressources rares cycliques ;
- états régionaux ;
- avant-postes et colonies évolutifs.

### 3.5 RP utile, pas seulement décoratif

Le RP doit avoir des conséquences concrètes, mais sans nécessiter une animation GM permanente.

Exemples :

- une rumeur peut mener à une expédition ;
- une relique identifiée peut débloquer une recette ;
- une colonie aidée peut proposer un nouveau service ;
- une région négligée peut devenir plus dangereuse ;
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
- lore et découvertes.

À éviter en première intention :

- caps à 200 partout ;
- progression infinie ;
- pets surpuissants ;
- farm obligatoire ;
- endgame uniquement basé sur le DPS.

---

## 4. Boucles de gameplay principales

### 4.1 Boucle courte : session de 30 à 60 minutes

Objectif : permettre à un joueur de se connecter, faire quelque chose d'utile, puis repartir avec une impression de progression.

Déroulé type :

1. Le joueur consulte le tableau de rumeurs ou de contrats.
2. Il choisit une activité adaptée à son temps disponible.
3. Il prépare son équipement, son compagnon ou ses outils.
4. Il part explorer, récolter, escorter, enquêter ou combattre.
5. Il ramène une preuve, des ressources, une relique ou une information.
6. Il reçoit une récompense ou contribue à un objectif collectif.
7. Une trace est ajoutée au monde : réputation, chronique, progression de colonie, nouvelle rumeur.

### 4.2 Boucle moyenne : progression sur quelques jours

Objectif : créer une dynamique même lorsque les joueurs ne se croisent pas.

Déroulé type :

1. Une région gagne en instabilité.
2. Des rumeurs apparaissent.
3. Des joueurs enquêtent à différents moments.
4. Des ressources spécifiques sont demandées.
5. Une expédition temporaire est ouverte.
6. Les joueurs ramènent des objets ou informations.
7. La région évolue : menace réduite, avant-poste amélioré, nouvelle route ouverte, nouveau PNJ installé.

### 4.3 Boucle longue : progression sur plusieurs semaines

Objectif : donner un sens durable au serveur.

Déroulé type :

1. Une île principale est découverte ou rendue accessible.
2. Les joueurs explorent ses lieux fixes.
3. Des expéditions liées à l'île apparaissent.
4. Une colonie ou un avant-poste s'y développe.
5. Des métiers deviennent utiles localement.
6. Des secrets sont révélés progressivement.
7. L'île devient un nouveau hub partiel, sans rendre les anciennes zones obsolètes.

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
- ressources locales ;
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

#### Version avancée

- génération par templates ;
- sélection de biome ;
- instabilité locale ;
- rumeurs générées ;
- boss mécanique ;
- conséquences sur colonie ou région.

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
- mini-boss régional ;
- coût plus élevé des services locaux ;
- PNJ qui quittent temporairement une zone.

#### Priorité

**P1 - Très important, mais après les fondations.**

#### MVP possible

- jauge simple par région ;
- seuils : stable, troublée, dangereuse, critique ;
- déclenchement de spawns ou rumeurs à chaque seuil ;
- décrue automatique lente.

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
- demandes de ressources.

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
- assistance à un PNJ.

#### Règles anti-abus

- une mission unique ne doit pas être farmable indéfiniment ;
- les contrats à forte récompense doivent être limités ;
- les contrats publics doivent favoriser l'ouverture à d'autres joueurs ;
- les récompenses doivent être plafonnées ;
- les objectifs doivent éviter les boucles AFK.

#### Priorité

**P0 - Fondamental.**

#### MVP possible

- tableau par ville ou île ;
- missions générées par templates ;
- rotation quotidienne ou hebdomadaire ;
- récompense en or, ressources, réputation ou indice.

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

#### MVP possible

- quelques classes d'objets inconnus ;
- identification par compétence ;
- transformation en ressource, indice ou objet utilisable.

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
- amélioration des prix ou services.

#### Priorité

**P1 - Important pour la boucle longue.**

#### MVP possible

- objectifs collectifs à paliers ;
- ressources demandées ;
- état visuel ou service débloqué à chaque palier ;
- contribution individuelle tracée.

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

### 5.8 Craft d'expédition et de reconstruction

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

#### Priorité

**P1/P2 - À introduire progressivement.**

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

#### Risques

- remplacer les joueurs ;
- faciliter le farm solo ;
- créer des bugs de contrôle/pets ;
- surcharger le serveur.

---

### 5.10 PNJ dynamiques et LLM encadré

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

### 5.11 Chroniques et mémoire du monde

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
- rumeurs issues d'actions passées.

#### Priorité

**P1 - Très utile pour RP et asynchrone.**

#### MVP possible

- journal automatique simple ;
- entrée lors d'une expédition terminée ;
- entrée lors d'un palier de reconstruction atteint ;
- résumé manuel ou semi-automatique par staff.

---

### 5.12 Outils d'animation joueur limités

#### Intention

Permettre à des joueurs investis d'enrichir le RP sans devenir GM.

#### Principe

Certains joueurs peuvent débloquer des outils sociaux et événementiels limités, sous conditions.

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

### 5.13 Politique légère et gouvernance locale

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

#### Exemples

- construire un phare ou un atelier ;
- sécuriser une route ou ouvrir un port ;
- investir dans une ferme ou une palissade ;
- accueillir un PNJ réfugié ou le refuser ;
- prioriser l'exploration d'une île ou la défense d'une colonie.

#### Priorité

**P3 - Endgame social, pas MVP.**

---

### 5.14 Combat, boss et PvE mémorable

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

#### Règle

Un boss mémorable vaut mieux que dix sacs de PV.

---

### 5.15 Économie, marchés et contrats entre joueurs

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

**P2 - À développer après les besoins de craft/reconstruction.**

---

## 6. Matrice de priorisation

| Priorité | Fonctionnalité | Pourquoi | Phase cible |
|---|---|---|---|
| P0 | Île de départ claire | Base d'accueil et identité immédiate | MVP |
| P0 | Tableaux de rumeurs/contrats | Donne une activité dès la connexion | MVP |
| P0 | Ouverture progressive des îles | Structure la découverte initiale | MVP / Alpha |
| P0 | Expéditions temporaires simples | Résout le problème de carte fixe | Alpha 1 |
| P1 | Instabilité régionale | Monde réactif et asynchrone | Alpha 2 |
| P1 | Reliques inconnues | Donne du sens à l'exploration | Alpha 2 |
| P1 | Reconstruction / avant-postes | Progression collective longue | Alpha 2 |
| P1 | Chroniques du monde | Renforce RP et asynchrone | Alpha 2 |
| P1 | Boss mécaniques simples | Aventure mémorable | Alpha 2 / Beta |
| P2 | Craft d'expédition avancé | Profondeur métier | Beta |
| P2 | Compagnons de route | Aide solo et petite population | Beta |
| P2 | PNJ dynamiques / LLM | RP automatisé | Beta |
| P2 | Housing/agriculture utile | Vie civile durable | Beta |
| P2 | Économie et contrats joueurs | Social et interdépendance | Beta |
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
- préparer le backlog YouTrack/GitHub Projects.

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

### Phase 3 - Instabilité et conséquences

#### Objectif

Faire réagir le monde aux actions joueurs.

#### Fonctionnalités

- jauge d'instabilité régionale ;
- seuils ;
- rumeurs liées aux seuils ;
- spawns ou événements associés ;
- décrue automatique ;
- premiers effets sur colonies.

#### Critère de réussite

Les joueurs constatent que leurs actions modifient l'ambiance, les dangers ou les opportunités d'une région.

---

### Phase 4 - Reconstruction et craft utile

#### Objectif

Créer une boucle durable autour des ressources.

#### Fonctionnalités

- objectifs collectifs ;
- paliers de construction ;
- avant-postes ;
- craft d'expédition ;
- ressources locales ;
- premiers services débloqués.

#### Critère de réussite

Les joueurs ont une raison de récolter, fabriquer, transporter et contribuer au-delà du simple enrichissement personnel.

---

### Phase 5 - Vie sociale et RP automatisé

#### Objectif

Renforcer l'impression de monde vivant.

#### Fonctionnalités

- PNJ avec dialogues améliorés ;
- rumeurs contextualisées ;
- chroniques automatiques ;
- premiers usages LLM encadrés ;
- contrats plus narratifs ;
- réputation plus visible.

#### Critère de réussite

Les joueurs ont l'impression que le monde parle de ce qui arrive, même sans GM connecté.

---

### Phase 6 - Solo renforcé et compagnons

#### Objectif

Rendre le serveur plus confortable pour petite population sans tuer le multijoueur.

#### Fonctionnalités

- compagnon unique ;
- pension/auberge ;
- équipement limité ;
- rôles simples ;
- progression lente ;
- restrictions anti-farm.

#### Critère de réussite

Un joueur solo se sent accompagné, mais un groupe de joueurs reste clairement supérieur.

---

### Phase 7 - Social avancé et animation joueur

#### Objectif

Permettre aux joueurs investis de créer du lien social.

#### Fonctionnalités

- statut de joueur-animateur limité ;
- outils publics ;
- prérequis ;
- cooldown ;
- journalisation ;
- feedback participants ;
- validation ou supervision staff.

#### Critère de réussite

Des animations émergent sans GM, sans devenir un outil de farm privé.

---

### Phase 8 - Endgame communautaire

#### Objectif

Donner une profondeur long terme.

#### Fonctionnalités

- gouvernance légère ;
- décisions de colonie ;
- saisons ;
- grands arcs narratifs automatisés ;
- menaces régionales ;
- expéditions rares ;
- reliques majeures ;
- conséquences durables.

#### Critère de réussite

Après plusieurs mois, les joueurs ont toujours des objectifs collectifs et personnels.

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
- déclencher rumeurs/spawns ;
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

### EPIC-7 - Craft d'expédition

Objectif : rendre les métiers utiles à l'exploration.

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
- historique des expéditions.

### EPIC-9 - PNJ dynamiques et LLM encadré

Objectif : améliorer le RP automatisé.

User Stories possibles :

- définir prompts système ;
- créer garde-fous ;
- limiter contexte ;
- générer dialogues ;
- générer rumeurs ;
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
- expiration longue ;
- LLM encadré ;
- chroniques ;
- systèmes autonomes.

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

---

## 11. Première cible réaliste

La première version réellement jouable devrait viser peu de systèmes, mais bien reliés entre eux.

### Contenu recommandé pour première alpha

- une île de départ forte ;
- un tableau de rumeurs ;
- quelques contrats ;
- une première expédition temporaire ;
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
- systèmes de progression avancés.

---

## 12. Exemple de cycle complet cible

### Situation initiale

L'île de départ est partiellement reconstruite. Un tableau de rumeurs affiche :

> Des pêcheurs affirment voir des lumières au large, toujours à marée basse.

### Étape 1 - Découverte

Un joueur trouve une carte abîmée lors d'une mission de récupération.

### Étape 2 - Identification

Un cartographe ou un PNJ érudit révèle que la carte pointe vers un îlot temporaire.

### Étape 3 - Expédition

Un portail maritime ou un embarcadère ouvre l'accès à **l'Îlot aux Lanternes Mortes** pendant sept jours.

### Étape 4 - Exploration

Les joueurs y trouvent :

- bois salé ;
- morts faibles ;
- épaves ;
- coffre scellé ;
- lanterne ancienne ;
- indice sur une route maritime oubliée.

### Étape 5 - Retour

Les joueurs ramènent les ressources à la colonie.

### Étape 6 - Reconstruction

Le bois salé permet d'améliorer un phare.

### Étape 7 - Conséquence

Le phare réduit les risques maritimes et débloque de nouvelles rumeurs liées à la mer.

### Étape 8 - Chronique

Une entrée est ajoutée à la chronique du serveur :

> Les premières lanternes du vieux phare ont été rallumées grâce aux ressources ramenées de l'îlot disparu.

Ce cycle illustre la direction souhaitée : exploration, ressource, RP, reconstruction, conséquence, renouvellement.

---

## 13. Questions ouvertes pour le staff

- Quel nom final donner aux expéditions temporaires ?
- Quelle durée de persistance par défaut : 3, 7 ou 14 jours ?
- L'ouverture des îles doit-elle être calendaire, communautaire ou mixte ?
- Quelle part de contenu doit être solo, groupe léger, groupe difficile ?
- Quel niveau de survie est acceptable sans rendre le jeu pénible ?
- Quelle place donner au PvP ?
- Les compagnons doivent-ils être accessibles tôt ou plutôt après réputation ?
- Les outils d'animation joueur doivent-ils être accordés manuellement ou automatiquement ?
- Quelle limite stricte donner au LLM ?
- Comment afficher les chroniques : en jeu, Discord, wiki, les trois ?

---

## 14. Décision de direction

La ligne directrice proposée est la suivante :

> Construire un shard UO RP d'exploration et de reconstruction, jouable seul ou en petit groupe, où une carte fixe est enrichie par des expéditions temporaires, des rumeurs dynamiques, des reliques, des colonies évolutives, une progression asynchrone et des outils RP automatisés.

Cette direction doit guider tous les futurs choix de gameplay et de développement.
