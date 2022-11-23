
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./NossaEquipe.module.css"


function NossaEquipe() {

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    return (
        <div className={styles.container}>

            <div className={styles.titulo}><text>Nossa Equipe</text></div>

            <div className={styles.innerContainer}>

                <div className={styles.box}>
                    <div className={styles.foto} ><div className={styles.foto1}  /></div>
                    <div className={styles.nome}>
                        Beatriz Menezes
                    </div>
                    <div className={styles.redes}>
                    <div className={styles.git}>< a href="#"><div className={styles.link}></div></a></div>
                    <div className={styles.linkedin}>< a href="#"><div className={styles.link}></div></a></div>
                    </div>
                    <div className={styles.email}>contato@contato.com</div>
                </div>

                <div className={styles.box}>
                    <div className={styles.foto} ><div className={styles.foto2}  /></div>
                    <div className={styles.nome}>
                        Beatriz Menezes
                    </div>
                    <div className={styles.redes}>
                    <div className={styles.git}>< a href="#"><div className={styles.link}></div></a></div>
                    <div className={styles.linkedin}>< a href="#"><div className={styles.link}></div></a></div>
                    </div>
                    <div className={styles.email}>contato@contato.com</div>
                </div>
                
                <div className={styles.box}>
                    <div className={styles.foto} ><div className={styles.foto3}  /></div>
                    <div className={styles.nome}>
                        Beatriz Menezes
                    </div>
                    <div className={styles.redes}>
                    <div className={styles.git}>< a href="#"><div className={styles.link}></div></a></div>
                    <div className={styles.linkedin}>< a href="#"><div className={styles.link}></div></a></div>
                    </div>
                    <div className={styles.email}>contato@contato.com</div>
                </div>
                
                <div className={styles.box}>
                    <div className={styles.foto} ><div className={styles.foto4}  /></div>
                    <div className={styles.nome}>
                        Beatriz Menezes
                    </div>
                    <div className={styles.redes}>
                    <div className={styles.git}>< a href="#"><div className={styles.link}></div></a></div>
                    <div className={styles.linkedin}>< a href="#"><div className={styles.link}></div></a></div>
                    </div>
                    <div className={styles.email}>contato@contato.com</div>
                </div>

                <div className={styles.box}>
                    <div className={styles.foto} ><div className={styles.foto5}  /></div>
                    <div className={styles.nome}>
                        Beatriz Menezes
                    </div>
                    <div className={styles.redes}>
                    <div className={styles.git}>< a href="#"><div className={styles.link}></div></a></div>
                    <div className={styles.linkedin}>< a href="#"><div className={styles.link}></div></a></div>
                    </div>
                    <div className={styles.email}>contato@contato.com</div>
                </div>

                <div className={styles.box}>
                    <div className={styles.foto} ><div className={styles.foto6}  /></div>
                    <div className={styles.nome}>
                        Beatriz Menezes
                    </div>
                    <div className={styles.redes}>
                    <div className={styles.git}>< a href="#"><div className={styles.link}></div></a></div>
                    <div className={styles.linkedin}>< a href="#"><div className={styles.link}></div></a></div>
                    </div>
                    <div className={styles.email}>contato@contato.com</div>
                </div>

                <div className={styles.box}>
                    <div className={styles.foto} ><div className={styles.foto7}  /></div>
                    <div className={styles.nome}>
                        Beatriz Menezes
                    </div>
                    <div className={styles.redes}>
                    <div className={styles.git}>< a href="#"><div className={styles.link}></div></a></div>
                    <div className={styles.linkedin}>< a href="#"><div className={styles.link}></div></a></div>
                    </div>
                   <div className={styles.email}>contato@contato.com</div>
                </div>

                <div className={styles.box}>
                    <div className={styles.foto} ><div className={styles.foto8}  /></div>
                    <div className={styles.nome}>
                        Beatriz Menezes
                    </div>
                    <div className={styles.redes}>
                    <div className={styles.git}>< a href="#"><div className={styles.link}></div></a></div>
                    <div className={styles.linkedin}>< a href="#"><div className={styles.link}></div></a></div>
                    </div>
                    <div className={styles.email}>contato@contato.com</div>
                </div>
            </div>
        </div>
    );
}

export default NossaEquipe;
