import styles from "./Contatos.module.css";
import { FaMapMarkerAlt, FaTwitter, FaGithub} from "react-icons/fa";

const Contatos = ({ dados }) => {
  return (
    <div className={styles.contatos}>
      <p className={styles.contatosItem}>
        <FaMapMarkerAlt />
        {dados.location === null ? "Sem Localização" : dados.location}
      </p>
      <p className={styles.contatosItem}>
        < FaTwitter />
        {dados.twitter_username === null
          ? "Not Available"
          : dados.twitter_username}
      </p >
      <a href={dados.html_url} className={styles.contatosItem}>
        <FaGithub /> {dados.html_url}
      </a>
      
    </div>
  );
};

export default Contatos;
