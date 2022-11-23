import React from 'react'

//============================================ Importando CSS como styles ============================================
import styles from "./css/Amigos.module.css" // [1] - mude o diretório do css do component.
//====================================================================================================================

function Amigos() { //[2] - mude o nome do component para ser exportado.
  return (
    <>
      <section id={styles.chatAmigos}>
        {/* ================ User ========================== */}
        <div className={styles.user}>
          {/* ============ PF> profile picture || nome do user ============= */}
          <div className={styles.userPhoto}>
            <div className={styles.userPF}></div>
          </div>
          <div className={styles.userSt}>
            <h3>Kae Lucas</h3>
            <p>online</p>

          </div>

        </div>

        <div className={styles.user}>
          {/* ============ PF> profile picture || nome do user ============= */}
          <div className={styles.userPhoto}>
            <div className={styles.userPF}></div>
          </div>
          <div className={styles.userSt}>
            <h3>Gabriel Almeida</h3>
            <p>online</p>

          </div>

        </div>

        {/* ================ User ========================== */}
        <div className={styles.user}>
          {/* ============ PF> profile picture || nome do user ============= */}
          <div className={styles.userPhoto}>
            <div className={styles.userPF}></div>
          </div>
          <div className={styles.userSt}>
            <h3>Matheus Kikuti</h3>
            <p>online</p>

          </div>

        </div>

        {/* ================ User ========================== */}
        <div className={styles.user}>
          {/* ============ PF> profile picture || nome do user ============= */}
          <div className={styles.userPhoto}>
            <div className={styles.userPF}></div>
          </div>
          <div className={styles.userSt}>
            <h3>Beatriz Menezes</h3>
            <p>online</p>

          </div>

        </div>

        {/* ================ User ========================== */}
        <div className={styles.user}>
          {/* ============ PF> profile picture || nome do user ============= */}
          <div className={styles.userPhoto}>
            <div className={styles.userPF}></div>
          </div>
          <div className={styles.userSt}>
            <h3>Vicencia Vitória</h3>
            <p>online</p>

          </div>

        </div>
 



      </section>

    </>
  )
}

export default Amigos ; //[3] - O nome do export deve ter o mesmo no passo 2!!