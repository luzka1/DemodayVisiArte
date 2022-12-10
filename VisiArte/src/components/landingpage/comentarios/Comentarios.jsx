import styles from './Comentarios.module.css';
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Comentarios() {

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    return (
        <>
            <section className={styles.container}>
                <motion.div 
                animate={{y:-100}}
                ref={ref}
                className={styles.titulo}
                style={{
                    transform: isInView ? "none" : "translateY (10vh)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                    
                <h1>Comentários da Comunidade: </h1>
                
                </motion.div>

                <div className={styles.comentarios}>

                    <motion.div className={styles.box}
                        whileHover={{ scale: [null, 1, 1.1] }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 400, damping: 50 }}
                    >
                        <div className={styles.top}>
                            <div className={styles.foto1} />
                            <div className={styles.nome}><text>Nicole Azevedo</text></div>
                            <div className={styles.titComentario}><text>Achei Ótimo!</text></div>
                        </div>
                        <div className={styles.corpo}>
                            <div className={styles.depoimento}><text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</text></div>
                        </div>
                    </motion.div>

                    <motion.div className={styles.box}
                        whileHover={{ scale: [null, 1, 1.1] }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 400, damping: 50 }}
                    >
                        <div className={styles.top}>
                            <div className={styles.foto2} />
                            <div className={styles.nome}><text>Evelyn Sousa</text></div>
                            <div className={styles.titComentario}><text>Achei Ótimo!</text></div>
                        </div>
                        <div className={styles.corpo}>
                            <div className={styles.depoimento}><text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</text></div>
                        </div>
                    </motion.div>

                    <motion.div className={styles.box}
                        whileHover={{ scale: [null, 1 ,1.1] }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 400, damping: 50 }}
                    >
                        <div className={styles.top}>
                            <div className={styles.foto3} />
                            <div className={styles.nome}><text>Isabella Oliveira</text></div>
                            <div className={styles.titComentario}><text>Achei Ótimo!</text></div>
                        </div>
                        <div className={styles.corpo}>
                            <div className={styles.depoimento}><text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</text></div>
                        </div>
                    </motion.div>
                    
                </div>
            </section>
        </>
    )

}

export default Comentarios;

