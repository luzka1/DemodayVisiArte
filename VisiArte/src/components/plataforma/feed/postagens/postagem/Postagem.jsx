import React from "react";
import styles from "./Postagem.module.css";

import perfil from "../../../../../img/foto-perfil.png";

function Postagem() {
    return (
        <div className={styles.postagem}>
            <div className={styles.perfil}>
                <img src={perfil} alt="" />
            </div>
            <p></p>
            <img src="" alt="" />
            <div></div>
            <form>
                <input type="text" placeholder="" />
            </form>
        </div>
    );
}

export default Postagem;
