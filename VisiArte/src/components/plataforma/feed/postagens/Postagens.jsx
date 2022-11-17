import React from "react";
import Postagem from "./postagem/Postagem";
import styles from "./Postagens.module.css";

import perfil from "../../../../img/foto-perfil.png";
import fundo_perfil from "../../../../img/fundo_postagem.png";

function Postagens() {
    return (
        <div className={styles.postagens}>
            <Postagem
                img_perfil={perfil}
                nome="#username"
                img_postagem={fundo_perfil}
            />
            <Postagem
                img_perfil={perfil}
                nome="#username"
                img_postagem={fundo_perfil}
            />
            <Postagem
                img_perfil={perfil}
                nome="#username"
                img_postagem={fundo_perfil}
            />
        </div>
    );
}

export default Postagens;
