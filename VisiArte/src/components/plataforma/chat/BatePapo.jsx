import React from "react";
import styles from "./css/BatePapo.module.css";

function BatePapo() {
    return (
        <>
            <section id={styles.chatBatepapo}>
                <section id={styles.chatArea}>
                    
                </section>
            </section>


            <section id={styles.funcoes}>
                <input type="text" id={styles.textarea} />
                <section id={styles.send} >
                    <img src="https://e7.pngegg.com/pngimages/841/271/png-clipart-computer-icons-send-miscellaneous-angle.png" alt="" />
                </section>
            </section>
        </>
    )

}

export default BatePapo;
