import React from "react";
import { Link } from "react-router-dom";
import styles from "./Pessoa.module.css";
import imgSeguir from "../../../../img/seguir.png";

const Seguir = ({ seguindo }) => {
    const [seg, setSeg] = React.useState(seguindo);

    React.useEffect(() => {
        console.log(seg);
    }, [seg]);

    if (seg) {
        return (
            <div className={styles.direita}>
                <button onClick={() => setSeg(!seg)} className={styles.seguir}>
                    Seguindo
                </button>
                <Link to="/feed" className={styles.enviarMensagem}>
                    <button>Enviar mensagem</button>
                </Link>
            </div>
        );
    } else {
        return (
            <div className={styles.direita}>
                <button onClick={() => setSeg(!seg)} className={styles.seguir}>
                    <img src={imgSeguir} alt="" />
                    Seguir
                </button>
            </div>
        );
    }
};

const Pessoa = () => {
    return (
        <div className={styles.pessoa}>
            <Link to="/feed" className={styles.containerEsquerda}>
                <div className={styles.esquerda}>
                    <img
                        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1"
                        alt=""
                    />
                    <div>
                        <h6>#username</h6>
                        <span>username da silva</span>
                    </div>
                </div>
            </Link>
            <Seguir seguindo={true} />
        </div>
    );
};

export default Pessoa;
