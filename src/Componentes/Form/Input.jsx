import styles from "../Form/Input.module.css";
import iconeLupa from "../../assets/lupa.svg";
import { useState } from "react";

const Input = ({ setDados, isDarkMode }) => {
  const [user, setUser] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    if (user === "") return null;
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      const json = await response.json();
      setDados(json);
    } catch (error) {
      console.error("Erro durante a solicitação:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <img src={iconeLupa} alt="icone-lupa" />
      <input
        type="text"
        placeholder="Search GitHub username..."
        onChange={({ target }) => setUser(target.value)}
      />
      <button>Search</button>
    </form>
  );
};

import PropTypes from "prop-types";

Input.propTypes = {
  setDados: PropTypes.func.isRequired,
};
export default Input;
