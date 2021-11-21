import React from "react";

import "./App.css";

function App() {
  // Initialise le prompteur (input)
  let prompteur = "";

  // Modification de la balise Header
  const gestionHeader = () => {
    const divHeader = (children) => {
      setHeader(
        <header id="header">
          <img alt="Logo du créateur app react" src="logo192.png" />
          {children}
        </header>
      );
    };

    // Démarre le prompteur pour la section suivante en lui indiquant la section à traiter et celle qui suivra
    setMrbot(
      mrbotDiv(
        "Quel nom de site voudrais-tu créer ? (Enter pour valider)",
        divHeader,
        gestionNavbar
      )
    );
  };

  // Modification de la balise Navbar
  const gestionNavbar = () => {
    const divNavbar = (children) => {
      setNavbar(
        <nav id="navbar">
          <h2>{children}</h2>
          <ul>
            {["Alpha", "Beta", "Gamma", "Delta", "Epsilon"].map(
              (element, id) => (
                <li key={id}>{element}</li>
              )
            )}
          </ul>
        </nav>
      );
    };

    setMrbot(mrbotDiv("Donne un titre à ton menu ?", divNavbar, gestionMain));
  };

  // Modification de la balise Main
  const gestionMain = () => {
    const divMain = (children) => {
      setMain(
        <main id="main">
          <h1>{children}</h1>
          <p>
            Tu autem, Fanni, quod mihi tantum tribui dicis quantum ego nec
            adgnosco nec postulo, facis amice; sed, ut mihi videris, non recte
            iudicas de Catone; aut enim nemo, quod quidem magis credo, aut si
            quisquam, ille sapiens fuit. Quo modo, ut alia omittam, mortem filii
            tulit! memineram Paulum, videram Galum, sed hi in pueris, Cato in
            perfecto et spectato viro.
          </p>
          <p>
            Cognitis enim pilatorum caesorumque funeribus nemo deinde ad has
            stationes appulit navem, sed ut Scironis praerupta letalia
            declinantes litoribus Cypriis contigui navigabant, quae Isauriae
            scopulis sunt controversa.
          </p>
          <p>
            Quanta autem vis amicitiae sit, ex hoc intellegi maxime potest, quod
            ex infinita societate generis humani, quam conciliavit ipsa natura,
            ita contracta res est et adducta in angustum ut omnis caritas aut
            inter duos aut inter paucos iungeretur.
          </p>
        </main>
      );
    };

    setMrbot(
      mrbotDiv(
        "Maintenant la page principale ! On la nomme comment ?",
        divMain,
        gestionAside
      )
    );
  };

  // Modification de la balise Aside
  const gestionAside = () => {
    const divAside = (children) => {
      setAside(
        <aside id="aside">
          <h2>{children}</h2>
          {[1, 2, 3].map((info, id) => (
            <p key={id}>Info {info}</p>
          ))}
        </aside>
      );
    };

    setMrbot(
      mrbotDiv("Allez un petit side pour la forme :", divAside, gestionFooter)
    );
  };

  // Modification de la balise Footer
  const gestionFooter = () => {
    const divFooter = (children) => {
      setFooter(
        <footer id="footer">
          <div id="copyright">Copyright : {children}</div>
        </footer>
      );
    };

    setMrbot(
      mrbotDiv(
        "Presque terminé, ou ! Ton copyright pour le footer ?",
        divFooter,
        finalisation
      )
    );
  };

  // Fin de l'édition
  const finalisation = () => {
    setMrbot();
    alert(`Bravo tu as fini ta super structure grid !!!
  Admire le résultat avec la console :)`);
    console.warn(
      "Le CSS est dégueulasse mais je n'avais pas envie de perdre de temps dessus xD"
    );
  };

  // Gestion du prompteur
  const mrbotDiv = (question, cible, suite) => {
    // Capte la réponse à la question du prompteur
    const handleChange = (event) => {
      prompteur = event.target.value;
      // console.log(prompteur);
      cible(prompteur); // Met à jour le state récupéré par cible
    };

    // Quand on appuie sur la touche 'Enter'
    const handlePress = (event) => {
      // console.log(event.code)
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.target.value = "";
        suite();
      }
    };

    // Met à jour le prompteur
    return (
      <div id="mr-bot">
        {`${question} `}
        <input onChange={handleChange} onKeyDown={handlePress} />
      </div>
    );
  };

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
