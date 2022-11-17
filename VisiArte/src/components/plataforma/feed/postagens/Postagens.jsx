import React from "react";
import Postagem from "./postagem/Postagem";
import styles from "./Postagens.module.css";

function Postagens() {
    return (
        <div className={styles.postagens}>
            <Postagem />
        </div>
    );
}

export default Postagens;
