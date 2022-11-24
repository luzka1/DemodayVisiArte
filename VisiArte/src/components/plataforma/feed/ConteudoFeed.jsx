import React from "react";
import styles from "./ConteudoFeed.module.css";

import SobreMim from "./sobreMim/SobreMim";
import Postagens from "./postagens/Postagens";
import Sugestoes from "../reutilizavel/sugestoes/Sugestoes";

function ConteudoFeed({ sugestoes, postagens, sobreMim }) {
    return (
        <div className={styles.conteudo_feed}>
            <SobreMim data={sobreMim.sobre_mim} />
            <Postagens
                data={postagens.postagens}
                minhaFoto={sobreMim.sobre_mim.foto_perfil_usuario}
            />
            <Sugestoes data={sugestoes.descubra_perfis} />
        </div>
    );
}

export default ConteudoFeed;
