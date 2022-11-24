import React from "react";
import styles from "./Sugestao.module.css";

function Sugestao({ img, nome }) {
    return (
        <div className={styles.sugest}>
            <img src={img} alt="" />
            <span>{nome}</span>
        </div>
    );
}

export default Sugestao;
