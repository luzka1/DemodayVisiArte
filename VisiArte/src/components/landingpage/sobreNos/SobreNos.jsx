import styles from "./SobreNos.module.css";
import Moldura from "../../../img/Moldura.png";

function SobreNos() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.SBtit}>
                    <h1>
                        Sobre <p className={styles.Nos}>Nós</p>
                    </h1>
                    <text className={styles.subtit}>
                        Saiba mais sobre a equipe{" "}
                        <p className={styles.laranja}>VisiArte</p>
                    </text>
                </div>

                <div className={styles.SBcont}>
                    <div className={styles.SBimg} />

                    <div>
                        <div className={styles.titulo}>
                            <h1>Lorem ipsum</h1>
                            <p>ispum muspi</p>
                        </div>

                        <div className={styles.conteudo}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed vel accumsan justo, a dapibus tortor. Sed
                            convallis nisi nulla, in congue arcu egestas sit
                            amet. Quisque quis mi varius quam convallis rhoncus.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SobreNos;
