import { ScrollAreaViewport } from "@radix-ui/react-scroll-area";
import React from "react";
import Solaire from "./solaire";
import EauUsee from "./eauUsee";
import Recupeau from "./recupeau";

export default function page() {
  return (
    <div>
      Installation
      <Solaire />
      <Recupeau />
      <EauUsee />
    </div>
  );
}
