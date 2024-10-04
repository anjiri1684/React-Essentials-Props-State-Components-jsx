const rectImg = "src/assets/react-core-concepts.png";

function Header() {
  const reactDescriptions = ["Fundamental", "Crucial", "Core"];

  function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  const desc = reactDescriptions[genRandomInt(reactDescriptions.length)];

  return (
    <header>
      <img src={rectImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {desc} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}

export default Header;
