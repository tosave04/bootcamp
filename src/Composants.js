let prompteur = "";

export function Mrbot({ children, cible, suite }) {
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

  // Retourne le nouveau prompteur
  return (
    <div id="mr-bot">
      {children}
      <input onChange={handleChange} onKeyDown={handlePress} />
    </div>
  );
}

export function MonHeader({ children }) {
  return (
    <header id="header">
      <img alt="Logo du créateur app react" src="logo192.png" />
      {children}
    </header>
  );
}

export function MaNavbar({ children }) {
  return (
    <nav id="navbar">
      <h2>{children}</h2>
      <ul>
        {["Alpha", "Beta", "Gamma", "Delta", "Epsilon"].map((element, id) => (
          <li key={id}>{element}</li>
        ))}
      </ul>
    </nav>
  );
}

export function MonMain({ children }) {
  return (
    <main id="main">
      <h1>{children}</h1>
      <p>
        Tu autem, Fanni, quod mihi tantum tribui dicis quantum ego nec adgnosco
        nec postulo, facis amice; sed, ut mihi videris, non recte iudicas de
        Catone; aut enim nemo, quod quidem magis credo, aut si quisquam, ille
        sapiens fuit. Quo modo, ut alia omittam, mortem filii tulit! memineram
        Paulum, videram Galum, sed hi in pueris, Cato in perfecto et spectato
        viro.
      </p>
      <p>
        Cognitis enim pilatorum caesorumque funeribus nemo deinde ad has
        stationes appulit navem, sed ut Scironis praerupta letalia declinantes
        litoribus Cypriis contigui navigabant, quae Isauriae scopulis sunt
        controversa.
      </p>
      <p>
        Quanta autem vis amicitiae sit, ex hoc intellegi maxime potest, quod ex
        infinita societate generis humani, quam conciliavit ipsa natura, ita
        contracta res est et adducta in angustum ut omnis caritas aut inter duos
        aut inter paucos iungeretur.
      </p>
    </main>
  );
}

export function MonAside({ children }) {
  return (
    <aside id="aside">
      <h2>{children}</h2>
      {[1, 2, 3].map((info, id) => (
        <p key={id}>Info {info}</p>
      ))}
    </aside>
  );
}

export function MonFooter({ children }) {
  return (
    <footer id="footer">
      <div id="copyright">Copyright : {children}</div>
    </footer>
  );
}
