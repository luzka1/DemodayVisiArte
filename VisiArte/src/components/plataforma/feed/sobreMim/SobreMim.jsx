import React from "react";
import styles from "./SobreMim.module.css";

function SobreMim({ data }) {
    return (
        <div className={styles.sobreMim}>
            <img src={data.foto_capa_usuario} alt="" />
            <div>
                <img
                    src={data.foto_perfil_usuario}
                    alt=""
                    className={styles.foto_perfil}
                />
                <h4>{data.username}</h4>
                <p>{data.bio}</p>
            </div>
        </div>
    );
}

export default SobreMim;
