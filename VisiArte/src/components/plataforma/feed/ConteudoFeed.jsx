import React from "react";
import styles from "./ConteudoFeed.module.css";

import SobreMim from "./sobreMim/SobreMim";
import Postagens from "./postagens/Postagens";
import Sugestoes from "./sugestoes/Sugestoes";

function ConteudoFeed({ data }) {
    return (
        <div className={styles.conteudo_feed}>
            <SobreMim data={data.sobre_mim} />
            <Postagens data={data.postagens} />
            <Sugestoes data={data.descubra_perfis} />
        </div>
    );
}

export default ConteudoFeed;
