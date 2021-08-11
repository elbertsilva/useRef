import React from "react";

const App = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notification, setNotification] = React.useState(null);

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotification("Item adicionado ao carrinho");
    setTimeout(() => {
      setNotification(null);
    }, 2000);
  }
  return (
    <div>
      <p>{notification}</p>
      <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
    </div>
  );
};

export default App;
