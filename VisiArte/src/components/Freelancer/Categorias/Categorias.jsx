import styles from "./Categorias.module.css";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function Categorias() {

    const icon = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1 ,

        }
    }
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    return (
        <>
            <div className={styles.container}>
            
            
            </div>
        </>
    );
}

export default Categorias;
