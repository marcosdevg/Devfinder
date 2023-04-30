import { useState, useEffect } from "react";
import Input from "./Componentes/Form/Input";
import Estatísticas from "./Componentes/Estatisticas/Estatisticas";
import Contatos from "./Componentes/Contatos/Contatos";
import Perfil from "./Componentes/Perfil/Perfil";
import "./App.css";
import { FaMoon, FaSun } from "react-icons/fa";

function App() {
  const [dados, setDados] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  function handleToggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div>
      <div className="container">
        <div className="header">
          <h1>Devfinder</h1>
          <div onClick={handleToggleDarkMode}>
            {isDarkMode ? (
              <div className="icone-dark">
                DARK <FaMoon />
              </div>
            ) : (
              <div className="icone-dark">
                LIGHT <FaSun />
              </div>
            )}
          </div>
        </div>
        <Input isDarkMode={isDarkMode} setDados={setDados} />
        {dados && (
          <div className="dadosPerfil">
            <img src={dados.avatar_url} alt="" />
            <Perfil dados={dados} />
            <Estatísticas dados={dados} />
            <Contatos dados={dados} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
