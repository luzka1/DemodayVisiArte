import React from "react";
import styles from "./SobreMim.module.css";

import fundo_perfil from "../../../../img/fundo-perfil.png";
import foto_perfil from "../../../../img/foto-perfil.png";

function SobreMim() {
    return (
        <div className={styles.sobreMim}>
            <img src={fundo_perfil} alt="" />
            <div>
                <img src={foto_perfil} alt="" className={styles.foto_perfil} />
                <h4>#username</h4>
                <p>
                    kjnekjenrhfer ergj oerigj ioewrjgio jeiwrogjo iewriog orig
                    origj ioewrjg ioerjwgj ioergji jeriogj oiergoi jeroigj
                    ioejrgj ioerjgio ejroigj oeirjgio erjgio joerigji erjoigj
                    woeir hwpioergh wpo hgpwieu{" "}
                </p>
            </div>
        </div>
    );
}

export default SobreMim;
