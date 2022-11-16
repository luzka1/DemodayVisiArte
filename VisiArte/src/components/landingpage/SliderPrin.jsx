import styles from '../../css/landingpage/SliderPrin.module.css';
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import imgCarousel from '../../imgCarousel';

function SliderPrin() {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <>
            <section className={styles.container}>

                <motion.div className={styles.titulo}> <h1>Fique por dentro do que tratamos no nosso site</h1></motion.div>
                <motion.div className={styles.conteudoo}>
                    <motion.div ref={carousel} className={styles.carousel}>
                        <motion.div drag="x" dragConstraints={{ right: 0, left: -2800  }} className={styles.innerCarousel}>
                            {imgCarousel.map(image => {
                                return (
                                    <motion.div className={styles.item}>
                                        <img src={image} />
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>
        </>
    )
}

export default SliderPrin;

