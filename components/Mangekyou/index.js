import styles from "./styles.module.scss";

const Mangekyou = () => {

  return (
    <div className={styles.mangekyou}>
        {
          Array.from({length: 3}).map((_, index) => {
            return (<div key={index} className={styles.point}/>);
          })
        }
        <div className={styles.circle}/>
    </div>
  );
};

export default Mangekyou;