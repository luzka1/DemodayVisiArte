
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./PriConteudo.module.css"

function PriConteudo() {

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    const icon = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1 ,

        }
    }
    return (

        <motion.div className={styles.container}>
            
            <motion.div className={styles.titulo}
            varitants={icon}
            initial="hidden"
            animate="visible"
            transition={{
                default: { duration:3}
            }}
            ><text>Nós somos pessoas que amam amar a arte</text></motion.div>

            <motion.div className={styles.texto}
            ref={ ref }
            style={{
                transform: isInView ? "none" : "translateX(-10vh)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
            >
                
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
                </motion.div>

        </motion.div>
    );
}

export default PriConteudo;
