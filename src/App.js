import React from "react";

import {
  MonHeader,
  MaNavbar,
  MonMain,
  MonAside,
  MonFooter,
  Mrbot,
} from "./Composants.js";

import "./App.css";

function App() {
  /**
   * Fonction de contrôle des balises gestion()
   * children : La question à poser
   * cible : Une fonction qui modifie la state voulue
   * suite : La prochaine fonction à appeler
   */
  const gestion = (children, cible, suite) => {
    const props = { children, cible, suite };
    setMrbot(<Mrbot {...props}></Mrbot>);
  };

  // Modification de la balise header
  const gestionHeader = () => {
    gestion(
      "Quel nom de site voudrais-tu créer ? (Enter pour valider)",
      (children) => {
        setHeader(<MonHeader>{children}</MonHeader>);
      },
      gestionNavbar
    );
  };

  // Modification de la balise navbar
  const gestionNavbar = () => {
    gestion(
      "Donne un titre à ton menu ?",
      (children) => {
        setNavbar(<MaNavbar>{children}</MaNavbar>);
      },
      gestionMain
    );
  };

  // Modification de la balise main
  const gestionMain = () => {
    gestion(
      "Maintenant la page principale ! On la nomme comment ?",
      (children) => {
        setMain(<MonMain>{children}</MonMain>);
      },
      gestionAside
    );
  };

  // Modification de la balise Aside
  const gestionAside = () => {
    gestion(
      "Allez un petit side pour la forme :",
      (children) => {
        setAside(<MonAside>{children}</MonAside>);
      },
      gestionFooter
    );
  };

  // Modification de la balise Footer
  const gestionFooter = () => {
    gestion(
      "Presque terminé, ou ! Ton copyright pour le footer ?",
      (children) => {
        setFooter(<MonFooter>{children}</MonFooter>);
      },
      finalisation
    );
  };

  /**
   * Fin de l'édition, on arrête le prompteur
   */
  const finalisation = () => {
    setMrbot();
    alert(`Bravo tu as fini ta super structure grid !!!
  Admire le résultat avec la console :)`);
    console.warn(
      "Le CSS est dégueulasse mais je n'avais pas envie de perdre de temps dessus xD"
    );
  };

  /**
   * Déclaration et initialisation des states
   */
  const [mrBot, setMrbot] = React.useState(
    <div id="mr-bot" onClick={gestionHeader}>
      Clic sur moi pour commencer la création d'un super site !
    </div>
  );

  const [header, setHeader] = React.useState();
  const [navbar, setNavbar] = React.useState();
  const [main, setMain] = React.useState();
  const [aside, setAside] = React.useState();
  const [footer, setFooter] = React.useState();

  /**
   * Retour du résultat, j'utilise les states ici plutôt que les composants pour ne pas qu'ils s'affichent par défaut
   */
  return (
    <div id="page">
      {mrBot}
      {header}
      {navbar}
      {main}
      {aside}
      {footer}
    </div>
  );
}

export default App;
