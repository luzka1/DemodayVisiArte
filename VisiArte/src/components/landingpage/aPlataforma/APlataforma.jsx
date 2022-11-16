import styles from "./APlataforma.module.css";

function APlataforma() {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.titulo}>
                    <h1>A Plataforma</h1>
                </div>

                <div className={styles.conteudo}>
                    <div className={styles.texto}>
                        <text>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but{" "}
                        </text>
                    </div>
                    <div className={styles.images}>
                        <div className={styles.img1}></div>
                        <div className={styles.img2}></div>
                        <div className={styles.img3}></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default APlataforma;
