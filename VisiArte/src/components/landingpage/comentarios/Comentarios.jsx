import styles from './Comentarios.module.css';
import motion from 'framer-motion';


function Comentarios() {

    return (
        <>
            <section className={styles.container}>
                <div className={styles.titulo}><h1>Comentários da Comunidade: </h1></div>

            <div className={styles.comentarios}>

                <div className={styles.box}>
                    <div className={styles.top}>
                        <div className={styles.foto1} />
                        <div className={styles.nome}><text>Kae Lucas</text></div>
                        <div className={styles.titComentario}><text>Achei Ótimo!</text></div>
                    </div>
                    <div className={styles.corpo}>
                        <div className={styles.depoimento}><text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</text></div>
                    </div>
                </div>

                <div className={styles.box}>
                    <div className={styles.top}>
                        <div className={styles.foto2} />
                        <div className={styles.nome}><text>Beatriz Menezes</text></div>
                        <div className={styles.titComentario}><text>Achei Ótimo!</text></div>
                    </div>
                    <div className={styles.corpo}>
                        <div className={styles.depoimento}><text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</text></div>
                    </div>
                </div>

                <div className={styles.box}>
                    <div className={styles.top}>
                        <div className={styles.foto3} />
                        <div className={styles.nome}><text>Felipe Domingos</text></div>
                        <div className={styles.titComentario}><text>Achei Ótimo!</text></div>
                    </div>
                    <div className={styles.corpo}>
                        <div className={styles.depoimento}><text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</text></div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )

}

export default Comentarios;

