import styles from "./ComoFunc.module.css";
import Moldura from "../../../img/Moldura.png";

function ComoFunc() {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.comoFunc}>
                    <div className={styles.linhaExterna}>
                        <img src={Moldura} />
                    </div>
                    <div className={styles.imgCF}></div>
                    <div className={styles.textoCF}>
                        <div className={styles.titCF}>
                            <h1>Como Funcionamos:</h1>
                        </div>
                        <div className={styles.contCF}>
                            <text>
                                Somos uma plataforma voltada a adjuar os{" "}
                                <text className={styles.laranja}>artistas</text>{" "}
                                de todas as áreas a criarem{" "}
                                <text className={styles.laranja}>conexões</text>{" "}
                                com outros artistas, e{" "}
                                <text className={styles.laranja}>divulgar</text>{" "}
                                os seus projetos, além de ter uma{" "}
                                <text className={styles.laranja}>
                                    área exclusia
                                </text>{" "}
                                para cursos.
                            </text>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ComoFunc;
