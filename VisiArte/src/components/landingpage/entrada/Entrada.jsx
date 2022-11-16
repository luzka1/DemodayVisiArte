import styles from "./Entrada.module.css";
import Moldura from "../../../img/Moldura.png";

function Entrada() {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.container2}>
                    <div className={styles.textBox}>
                        <h1>VisiArte</h1>
                        <h3>Aqui vai ficar nosso magnífico slogan! </h3>
                    </div>
                    <div className={styles.linhaExterna}></div>
                </div>
            </section>
        </>
    );
}

export default Entrada;
