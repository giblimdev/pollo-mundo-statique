import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Thermometer,
  Droplets,
  Sun,
  Utensils,
  Stethoscope,
  Activity,
  AlertTriangle,
  Info,
  Egg,
  Clock,
} from "lucide-react";
import LifeCycle from "./lifeCycle";
import AlimentationGuide from "@/app/public/elevage/alimentation/Alimentation";
//import Amenagement from "./Amenagement";

export default function GuideElevagePage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* En-tête */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-slate-900">
            Guide Technique Élevage
          </h1>
        </div>

        <Tabs defaultValue="cycle" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-100">
            <TabsTrigger value="cycle">Cycle de Vie</TabsTrigger>
          </TabsList>

          {/* SECTION : CYCLE DE VIE */}
          <TabsContent value="cycle" className="space-y-6">
            <LifeCycle />
          </TabsContent>

          {/* SECTION 1 : ALIMENTATION */}
          <TabsContent value="alimentation" className="space-y-6">
            {/* Contenu statique ou futur composant alimentation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-orange-500" />
                  Phases Nutritionnelles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AlimentationGuide />
              </CardContent>
            </Card>
          </TabsContent>

          {/* SECTION 2 : ENVIRONNEMENT */}
          <TabsContent value="environnement" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Thermometer className="h-5 w-5 text-red-500" />
                  Température & Environnement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Contenu environnemental à mettre ici.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <div>
        <h1>🥦 Fin de Cycle - Critères de Décision </h1>
        <p>Fin à 72 semaines (≈16.5 mois)</p>
        <ul>
          <li>
            • ✅ Avantages : Meilleure qualité coquille, moins de problèmes
            sanitaires
          </li>
          <li>• ✅ Ponte encore à 70-75%</li>
          <li>
            {" "}
            • ✅ Conversion alimentaire acceptable Fin à 80 semaines (≈18.5
            mois){" "}
          </li>
          <li>• ✅ Avantages : Plus d'œufs totaux, mieux amortie</li>
          <li>
            {" "}
            • ⚠️ Nécessite : Excellente gestion, aliment adapté vieilles
            pondeuses
          </li>
          <li> • ⚠️ Risques : Qualité coquille réduite, mortalité augmentée</li>
        </ul>
        <h1>⚠️ Fin à 80 semaines (≈18.5 mois)</h1>
        <ul>
          <li>• ✅ Avantages : Plus d'œufs totaux, mieux amortie </li>
          <li>
            • ⚠️ Nécessite : Excellente gestion, aliment adapté vieilles
            pondeuses{" "}
          </li>
          <li>• ⚠️ Risques : Qualité coquille réduite, mortalité augmentée</li>
        </ul>
      </div>
    </div>
  );
}
