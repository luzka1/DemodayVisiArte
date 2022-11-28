import React from 'react'

//============================================ Importando CSS como styles ============================================
import styles from "./css/Amigos.module.css" // [1] - mude o diretório do css do component.
//====================================================================================================================

function Amigos() { //[2] - mude o nome do component para ser exportado.
  return (
    <>
      <section id={styles.chatAmigos}>
        <div id={styles.mainchat}>

          <div className={styles.user}>
            {/* ============ PF> profile picture || nome do user ============= */}
            <div className={styles.userPhoto}>
              <div className={styles.mask}>
                <img src="https://images.pexels.com/photos/3190334/pexels-photo-3190334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              </div>
            </div>
            <div className={styles.userSt}>
              <h3>Gabriel Almeida</h3>
              <p>online</p>

            </div>

          </div>
          <hr />
          {/* ================ User ========================== */}
          <div className={styles.user}>
            {/* ============ PF> profile picture || nome do user ============= */}
            <div className={styles.userPhoto}>
              <div className={styles.mask}>
                <img src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

              </div>
            </div>
            <div className={styles.userSt}>
              <h3>Isabelle P Goncalves</h3>
              <p>online</p>

            </div>

          </div>
          <hr />
          {/* ================ User ========================== */}
          <div className={styles.user}>
            {/* ============ PF> profile picture || nome do user ============= */}
            <div className={styles.userPhoto}>
              <div className={styles.mask}>
                <img src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              </div>
            </div>
            <div className={styles.userSt}>
              <h3>Beatriz Menezes</h3>
              <p>online</p>

            </div>

          </div>
          <hr />
          {/* ================ User ========================== */}
          <div className={styles.user}>
            {/* ============ PF> profile picture || nome do user ============= */}
            <div className={styles.userPhoto}>
              <div className={styles.mask}>
                <img src="https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              </div>
            </div>
            <div className={styles.userSt}>
              <h3>Vicencia Vitória</h3>
              <p>online</p>

            </div>
          </div>
          <hr />
          {/* ================ User ========================== */}
          <div className={styles.user}>
            {/* ============ PF> profile picture || nome do user ============= */}
            <div className={styles.userPhoto}>
              <div className={styles.mask}>
                <img src="https://images.pexels.com/photos/1687675/pexels-photo-1687675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              </div>
            </div>
            <div className={styles.userSt}>
              <h3>Vicencia Vitória</h3>
              <p>online</p>

            </div>
          </div>
          <hr />
        </div>




      </section>

    </>
  )
}

export default Amigos; //[3] - O nome do export deve ter o mesmo no passo 2!!