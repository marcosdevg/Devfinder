import styles from "../Estatisticas/Estatisticas.module.css";

const Estatísticas = ({dados}) => {
  return (
    <div className={styles.estatisticas}>
      <div className={styles.info}>
        <p>Repos</p>
        <div>{dados.public_repos}</div>
      </div>
      <div className={styles.info}>
        <p>Followers</p>
        <div>{dados.followers}</div>
      </div>
      <div className={styles.info}>
        <p>Following</p>
        <div>{dados.following}</div>
      </div>
    </div>
  );
};

export default Estatísticas;
