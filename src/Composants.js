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
      {children + " "}
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
  // Petite fonction pour faire des phrases sans queue ni tête en faux latin :)
  function LatinRandom() {
    const latinMots = [
      "tu",
      "autem",
      "fanni",
      "quod",
      "tantum",
      "tribui",
      "dicis",
      "quantum",
      "ego",
      "nec",
      "adgnosco",
      "pilatorum",
      "caesorumque",
      "funeribus",
      "nemo",
      "deinde",
      "ad",
      "has",
      ",",
    ];

    let latinRetour = "";

    for (let i = 0; i < Math.random() * 100 + 50; i++) {
      let mot = latinMots[Math.floor(Math.random() * latinMots.length)];
      latinRetour =
        latinRetour === "" && mot === "," ? latinRetour : latinRetour + mot + " ";
    }

    return <p>{latinRetour[0].toUpperCase() + latinRetour.substr(1)}</p>;
  }

  return (
    <main id="main">
      <h1>{children.toUpperCase()}</h1>
      <LatinRandom />
      <LatinRandom />
      <LatinRandom />
      <LatinRandom />
      <LatinRandom />
      <LatinRandom />
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
