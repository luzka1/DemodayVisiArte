
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./PriConteudo.module.css"

function PriConteudo() {

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    return (
        <div className={styles.container}>
            
            <div className={styles.titulo}><text>Nós somos pessoas que amam amar a arte</text></div>

            <div className={styles.texto}>
                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                </p>
                <br />
                <p>
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <br />
                <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                </div>

        </div>
    );
}

export default PriConteudo;
