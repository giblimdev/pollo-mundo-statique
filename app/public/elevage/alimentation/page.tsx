import React from "react";
import AlimentationGuide from "./Alimentation";

export default function page() {
  return (
    <div>
      <div>
        <AlimentationGuide />
      </div>

      <div>
        <h1>🎯 RECOMMANDATIONS</h1>
        <ul>
          <li>
            1. Transition alimentaire : Toujours progressive sur 7-10 jours{" "}
          </li>
          <li>2. Calcium : Passer à 3-4% à 2 semaines avant la ponte </li>
          <li>
            3. Éclairage : Stabiliser avant le pic de ponte, jamais de
            diminution
          </li>
          <li>
            4. Température : Maintenir stable, éviter les variations
            &gt;3°C/jour{" "}
          </li>
          <li>5. Eau : Toujours propre et fraîche (2x plus que nourriture)</li>
          <li>
            6. Ventilation : Essentielle pour évacuer humidité et ammoniac
          </li>
          <li>
            7. Stress : Éviter tout changement brutal (lumière, température,
            aliment)
          </li>
        </ul>
      </div>
      <div>
        <h1> 💰 IMPACT ÉCONOMIQUE</h1>
        <div>
          {" "}
          L'alimentation représente 70% des coûts de production. Un suivi
          rigoureux des paramètres permet : • 72 semaines : Rentabilité
          optimale, viande de reforme de qualité • 80 semaines : Production
          maximale mais risque accru de problèmes de coquilles et de santé
          Source des données : ITAVI, Lohmann France, H&N International, ONCE,
          UFA
        </div>
      </div>
    </div>
  );
}
