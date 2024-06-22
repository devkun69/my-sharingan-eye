import styles from "./styles.module.scss";

const Sharingan = () => {

  return (
    <div className={styles.sharingan}>
        <div className={styles.innerRing}>
          {
            Array.from({length: 3}).map((_, index) => {
              return (<div key={index} className={styles.tomoe}/>);
            })
          }
          <div className={styles.circle}/>
        </div>
    </div>
  );
};

export default Sharingan;