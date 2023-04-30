import styles from "./Perfil.module.css";

const Perfil = ({ dados }) => {
  const dataFormat = new Date(dados.created_at).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).split(' ').filter(str => str !== 'de').join(' ').replace('.', '');

  return (
    <>
      <div className={styles.perfil}>
        <h1>{dados.name}</h1>
        <p className={styles.usuario}>{`@${dados.login}`}</p>
      </div>
      <p className={styles.data}>{`Joined ${dataFormat}`}</p>
      <p className={styles.bio}>{dados.bio}</p>
    </>
  );
};

export default Perfil;
