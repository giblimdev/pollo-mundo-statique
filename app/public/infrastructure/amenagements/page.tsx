import React from "react";

export default function page() {
  return <div>amenagements</div>;
}
/*Système Solaire Autonome Complet
Guide d'installation et de fonctionnement

Introduction
Ce document présente une solution énergétique autonome basée sur l'énergie solaire avec stockage par batteries lithium et secours automatique par groupe électrogène. Ce système est dimensionné pour une consommation domestique de 15 à 20 kWh par jour avec une puissance crête simultanée de ~10 kW.
Objectif : Assurer l'autonomie énergétique de votre habitation avec un fonctionnement automatisé et une fiabilité maximale.

1. Vue d'ensemble du système
1.1 Schéma fonctionnel global
[PANNEAUX SOLAIRES]
↓
→ [ONDULEUR HYBRIDE] → [MAISON]
↓
[BATTERIES LITHIUM]
↓
[GROUPE ÉLECTROGÈNE ATS]
1.2 Principes de fonctionnement
Pendant le jour (production solaire)
•	Les panneaux solaires produisent du courant continu (DC)
•	L'onduleur hybride convertit ce courant en 230 V AC pour la maison
•	L'excédent d'énergie recharge les batteries
Pendant la nuit (sans production)
•	Les batteries fournissent l'énergie à la maison via l'onduleur
•	Lorsque les batteries atteignent un seuil critique (ex. 30%), le groupe électrogène démarre automatiquement
•	Le groupe recharge les batteries et alimente la maison
Avantage : Autonomie totale, zéro coupure de courant, réduction drastique des frais d'électricité

2. Les cinq éléments clés du système
2.1 Panneaux solaires photovoltaïques
Rôle
Captent l'énergie solaire et la convertissent en courant continu (DC). C'est la source d'énergie primaire du système.
Caractéristiques techniques
Paramètre	Valeur
Puissance unitaire	330 Wc
Type	Monocristallin haut rendement
Rendement	18–21 %
Tension	~40 V (DC)
Dimensions	~1,7 m × 1,0 m
Poids	~18 kg
Durée de vie	>25 ans
Garantie	25 ans

Quantité requise
•	Nombre de panneaux : 15 à 20 panneaux
•	Puissance totale installée : 5 kWc (kilowatts-crête)
•	Production journalière moyenne : 20 kWh (en climat tempéré avec 4 h de soleil utile)
Choix recommandé
Marque / Modèle : JA Solar JAM60S20 330 Wc
•	Rendement : ~20 %
•	Résistance aux conditions météorologiques extrêmes
•	Excellente qualité/prix
Budget
•	Prix unitaire : ~150 € / panneau
•	Total pour 18 panneaux : 2 700 € HT
Installation
•	Structure orientée plein sud
•	Inclinaison : 30–35° pour latitude française (ajuster selon région)
•	Espacement respecté pour éviter les ombrages
•	Câbles DC (6 mm²) vers l'onduleur avec protection par disjoncteur DC

2.2 Onduleur hybride
Rôle
C'est le cœur du système. L'onduleur hybride :
1.	Convertit le courant continu (DC) des panneaux/batteries en courant alternatif (AC) 230 V pour la maison
2.	Gère la charge des batteries en fonction de la production solaire
3.	Bascule automatiquement entre les différentes sources d'énergie (solaire → batteries → groupe électrogène)
4.	Intègre un régulateur MPPT pour optimiser la captation de l'énergie solaire
5.	Gère le groupe électrogène via une sortie de contrôle (ATS automatique)
Caractéristiques techniques
Paramètre	Valeur
Puissance nominale	10 kVA (10 000 W)
Tension de sortie	230 V AC ± 5 %
Fréquence	50 Hz
Tension batteries	48 V DC
Plage de charge	-5 000 W à +10 000 W
MPPT intégré	Oui (pour panneaux solaires)
Rendement	~95 %
Modes de fonctionnement	AC, batteries, solaire, hybride
Contrôle du groupe	Sortie ATS intégrée ou compatible

Fonctionnement détaillé
Mode 1 : Production solaire (jour, batteries pleines)
•	Panneaux → Onduleur → Maison
•	Excédent : dirigé vers batteries (charge contrôlée)
Mode 2 : Consommation nocturne (nuit, pas de solaire)
•	Batteries → Onduleur → Maison
•	Tension batteries surveillée en temps réel
Mode 3 : Secours électrogène (batteries faibles)
•	Déclenchement automatique quand batteries < 30 %
•	Groupe électrogène → Onduleur → Recharge batteries + Maison
•	Arrêt automatique quand batteries ≥ 60 %
Choix recommandé
Marque / Modèle : Victron Multiplus II 48/10000
•	Fiabilité industrielle reconnue
•	Fonction ATS intégrée
•	Monitoring via application mobile
•	Support technique excellent
•	Compatible avec batteries lithium LiFePO4
Alternative : Huawei Sun2000 Hybrid 10 kW
•	Technologie plus récente
•	Interface tactile
•	Meilleure esthétique pour installation intérieure
Budget
•	Prix : 1 500–2 500 € (selon marque)
•	Victron Multiplus II : ~2 200 € HT
Installation
•	Installation en intérieur (sous abri, ventilé)
•	Connexion DC aux batteries (câbles 35 mm²)
•	Connexion AC à la maison (câbles 6 mm²)
•	Mise à la terre conforme normes électriques

2.3 Batteries lithium LiFePO4
Rôle
Stockent l'énergie électrique pour les périodes sans production solaire (nuit, mauvais temps). Permettent l'autonomie du système.
Caractéristiques techniques
Paramètre	Valeur
Technologie	LiFePO4 (lithium fer phosphate)
Capacité par module	4,8–6 kWh
Tension nominale	48 V DC
Profondeur de décharge (DoD)	90–95 %
Cycles de charge	>6 000 cycles
Durée de vie	15–20 ans
Rendement charge/décharge	~98 %
Température fonctionnement	-20°C à +55°C

Avantages du lithium vs plomb
•	✅ Durée de vie 3× plus longue
•	✅ Pas d'entretien
•	✅ Meilleure efficacité énergétique
•	✅ Profondeur de décharge supérieure
•	✅ Dimensions compactes
Dimensionnement
Consommation estimée : 20 kWh/jour
Autonomie souhaitée : 1 jour complet (nuit + jour nuageux)
Capacité requise :
•	Consommation nuit : ~10 kWh
•	Marge de sécurité (30 %) : ~3 kWh
•	Total : 24 kWh utiles
Configuration batterie :
•	4 modules de 6 kWh chacun = 24 kWh brut
•	Ou 5 modules de 4,8 kWh chacun = 24 kWh brut
•	Tension système : 48 V DC
Choix recommandé
Marque / Modèle : Pylontech US5000 (4,8 kWh)
•	Fiabilité certifiée
•	Gestion thermique optimale
•	Compatible onduleur Victron/Huawei
•	Warranty 10 ans
Alternative : BYD Battery Box Premium HVM (6 kWh)
•	Légèrement moins chère
•	Performances similaires
Budget
•	Prix par module : 2 000–3 000 € / module
•	Total pour 4 modules : 8 000–12 000 € HT
•	Pylontech US5000 × 4 : ~8 800 € HT (à 2 200 €/module)
Installation
•	Installation en intérieur (proche onduleur)
•	Système de câblage 48 V DC (câbles 35 mm²)
•	Protections thermiques et électriques intégrées
•	Monitoring via BMS (Battery Management System) intégré

2.4 Groupe électrogène avec ATS
Rôle
Fournit une source d'énergie AC de secours quand les batteries sont déchargées. Redémarrage automatique du système lors de consommation importante inattendue.
Fonctionnement du système ATS (Automatic Transfer Switch)
L'onduleur hybride surveille la tension des batteries en temps réel.
•	Quand batterie > 60 % : groupe arrêté
•	Quand batterie entre 30–60 % : groupe en attente
•	Quand batterie < 30 % : groupe démarre AUTOMATIQUEMENT
Détail du processus :
1.	Onduleur envoie signal de démarrage au groupe
2.	Groupe démarre (5–10 secondes)
3.	ATS bascule sur sortie groupe (0 coupure de courant)
4.	Groupe recharge batteries + alimente maison
5.	Quand batteries ≥ 60 % : ATS rebascule sur onduleur, groupe s'arrête
Caractéristiques techniques du groupe
Paramètre	Valeur
Puissance nominale	10 kVA (10 000 W)
Type de carburant	Diesel (recommandé)
Autonomie réservoir	15–25 heures (dépend conso)
Démarrage	Électrique + automatique
Tension sortie	230 V AC, 50 Hz
Régulation voltage	±5 %
Niveau sonore	~70 dB à 1 mètre (standard industriel)
Durée de vie moteur	>3 000 heures

Marque / Modèle recommandé
SDMO Diesel 10 kVA (ou équivalent)
•	Moteur diesel fiable (Volvo, Perkins)
•	Démarrage automatique compatible ATS
•	Alternateur AVR (régulation voltage automatique)
•	Protection encrassement longue inactivité
Caractéristiques ATS (Automatic Transfer Switch)
Paramètre	Valeur
Type	Commutateur statique ou électromécanique
Entrées	Onduleur (AC) + Groupe (AC)
Sortie	Maison (AC)
Temps de bascule	< 100 ms (aucune coupure perceptible)
Courant nominal	16–63 A (selon puissance)
Contrôle	Signal 230 V AC ou 24 V DC de l'onduleur

Budget
•	Groupe électrogène SDMO 10 kVA : 2 500–4 000 € HT
•	ATS (Commutateur automatique) : 300–500 € HT
•	Total groupe + ATS : ~3 900 € HT
Installation
•	Installation en extérieur, bien ventilé, à l'abri pluie
•	Suppression vibrations (silent block)
•	Tuyauterie d'échappement éloignée
•	Raccordement électrique AC (câbles 10 mm²) vers ATS
•	Démarrage électrique relié à onduleur

2.5 Accessoires et protections
Rôle
Assurent la sécurité, la durabilité et la fiabilité du système complet.
Éléments indispensables
1. Disjoncteurs DC (protection panneaux et batteries)
•	Disjoncteur panneaux : 80 A, 1 000 V DC
•	Disjoncteur batteries : 125 A, 48 V DC
•	Fonction : Protection court-circuit, surcharge
2. Parafoudres AC/DC
•	Parafoudres panneaux : Type I+II, jusqu'à 1 000 V DC
•	Parafoudres AC maison : Type II, 230 V
•	Fonction : Protection foudre et surtensions
3. Sectionneurs
•	Sectionneur DC panneaux (isolant)
•	Sectionneur AC maison (isolant)
•	Fonction : Isolation de sécurité pour maintenance
4. Câblage
•	Câbles panneaux : 6 mm² (solaire DC)
•	Câbles batteries : 35 mm² (fort courant)
•	Câbles AC maison : 6 mm² (230 V AC)
•	Tous câbles : gaine UV-résistante, normes C13-100
5. Boîtier AC/DC
•	Coffret mural abritant : disjoncteurs, sectionneurs, parafoudres
•	Facilite organisation et sécurité du câblage
Budget accessoires
•	Disjoncteurs + sectionneurs : 200–300 €
•	Parafoudres : 150–250 €
•	Câbles et connecteurs : 200–300 €
•	Boîtier AC/DC + montage : 150–200 €
•	Total accessoires : 700–1 050 € HT

3. Tableau récapitulatif complet
Équipement	Quantité	Caractéristique	Budget (€ HT)
Panneaux solaires JA Solar 330 Wc	18	5 kWc total	2 700
Onduleur Victron Multiplus II 48/10	1	10 kVA, MPPT, ATS	2 200
Batteries Pylontech US5000 × 4	4	24 kWh, 48 V, LiFePO4	8 800
Groupe électrogène SDMO Diesel	1	10 kVA, démarrage auto	3 500
ATS (Commutateur automatique)	1	Compatible 230 V, 63 A	400
Accessoires (câbles, protections, boîtier)	-	Complet et sécurisé	850
TOTAL ESTIMÉ			18 450 € HT

Note : Budget TTC (Taxe comprise) : ~22 000 € selon TVA régionale (20 %)

4. Schéma électrique simplifié
┌─────────────────────────────────────────────────────────────┐
│ SYSTÈME SOLAIRE HYBRIDE │
└─────────────────────────────────────────────────────────────┘
[PANNEAUX SOLAIRES 5 kWc]
            │ DC ~40 V
            │
┌──────────▼──────────┐
│   ONDULEUR HYBRIDE   │
│   Victron MP II      │
│   10 kVA, 48 V       │
│                      │
│  • MPPT intégré      │
│  • Chargeur batteries │
│  • Contrôle ATS      │
└─────┬──────┬────┬────┘
      │      │    │
AC 230V  48V DC  Signal ATS
      │      │    │
┌─────▼──┐   │    │
│ MAISON  │   │    │
│ (15-20  │   │    │
│ kWh/jour)   │    │
└────────┘    │    │
              │    │
        ┌─────▼────┐
        │ BATTERIES │
        │ 4 × 6 kWh │
        │ Pylontech │
        │ 48 V DC   │
        │ 24 kWh    │
        └──────┬────┘
               │ Signal batterie faible
               │
        ┌──────▼────────────────┐
        │ GROUPE ÉLECTROGÈNE    │
        │ SDMO 10 kVA Diesel    │
        │ + ATS automatique     │
        │ Démarrage auto <30%   │
        └───────────────────────┘



5. Calendrier d'installation recommandé
Phase 1 : Préparation (1-2 semaines)
•	[ ] Commander tous les équipements
•	[ ] Vérifier infrastructure toiture (résistance structure)
•	[ ] Définir emplacements : onduleur (intérieur), groupe (extérieur), batteries (climatisé)
Phase 2 : Installation électrique (2-3 semaines)
•	[ ] Installation structure + panneaux solaires
•	[ ] Câblage DC (panneaux → onduleur) avec protections
•	[ ] Installation onduleur hybride
•	[ ] Installation batteries + BMS
•	[ ] Câblage batteries → onduleur
•	[ ] Installation groupe électrogène + ATS
Phase 3 : Tests et mise en service (1 semaine)
•	[ ] Tests isolement DC et AC
•	[ ] Démarrage onduleur sans panneaux
•	[ ] Vérification modes de fonctionnement
•	[ ] Test démarrage automatique groupe
•	[ ] Formation utilisateur
Durée totale estimée : 4–6 semaines

6. Conseils de maintenance
Maintenance panneaux solaires
•	Nettoyage : 2×/an (pluie suffit généralement)
•	Vérification : Pas d'ombrage, pas de salissure excessive
•	Inspection câblage : Annuel
Maintenance batteries
•	Monitoring : Vérifier voltage/température via BMS
•	Mise à jour BMS : Annuel si mises à jour disponibles
•	Remplacement : Prévu après >6 000 cycles (15–20 ans)
Maintenance groupe électrogène
•	Révision moteur : Tous les 500 heures (ex. annuel si 50 h utilisation/an)
•	Vidange huile : Tous les 250 heures
•	Test démarrage : Mensuel (5–10 min sans charge)
•	Nettoyage filtre air : Selon conditions
Maintenance onduleur
•	Monitoring : Vérifier logs d'erreurs mensuels
•	Ventilation : S'assurer pas d'encrassement des grilles
•	Mises à jour firmware : Annuel si disponibles

7. Questions/réponses clés
Q : Que se passe-t-il en cas de panne groupe électrogène ?
R : L'onduleur fournit l'énergie via les batteries tant qu'elles ne sont pas vides. En cas de panne groupe + batteries déchargées, il y a coupure. Conseil : test groupe mensuel et révision régulière.
Q : Puis-je agrandir le système à l'avenir ?
R : Oui. Vous pouvez ajouter des panneaux et des batteries par paquets. L'onduleur 10 kVA supporterait jusqu'à ~8 kWc en panneaux.
Q : Combien coûte à l'année en carburant groupe ?
R : Si groupe fonctionne 50 h/an : ~0,5 €/h diesel = ~25 €/an. Très économique car utilisé seulement de secours.
Q : Quelle est la rentabilité ?
R : Investissement initial : ~18 500 €. Économies électricité : ~2 000–3 000 €/an (selon tarifs régionaux). ROI : 6–9 ans + autonomie énergétique garantie.

8. Ressources et liens utiles
Fournisseurs panneaux/équipements (France/Europe)
•	https://www.solaire-shop.com (spécialiste solaire)
•	https://www.victronenergy.com (onduleurs Victron)
•	https://www.pylontech.com.cn (batteries Pylontech)
Normes et guides
•	Norme NF C 15-100 (installations électriques France)
•	IEC 61724 (performance panneaux solaires)
•	EN 62619 (sécurité batteries lithium)
Support technique
•	Victron : support@victronenergy.com
•	Pylontech : contact@pylontech.eu

Conclusion
Ce système solaire hybride autonome représente une solution complète, fiable et économique pour l'autosuffisance énergétique.
Avantages majeurs :
•	✅ Autonomie totale (jour + nuit + secours)
•	✅ Zero coupure de courant (bascule automatique)
•	✅ Économies drastiques électricité (~80 % réduction)
•	✅ Durée de vie équipements : 15–25 ans
•	✅ Environnement : énergie 100 % renouvelable
•	✅ Flexible : extensible à l'avenir
Investissement initial : ~18 500 € HT (22 000 € TTC)
Économies annuelles : 2 000–3 000 €
Retour sur investissement : 6–9 ans
Pour toute question technique ou devis détaillé, consulter un installateur agréé RGE Solaire.

Document version 1.0 - Janvier 2026
 */
