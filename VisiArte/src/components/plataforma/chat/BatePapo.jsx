import React from 'react'
import styles from "./css/BatePapo.module.css"

function BatePapo() {
  return (
    <>
      <section id={styles.chatBatepapo}>
        <section id={styles.chatArea}>


        </section>

        <section id={styles.funcoes}>
          <input type="text" id={styles.textarea} />
          {/* <section id={styles.textarea}></section> */}
          <section id={styles.send} >
            <div className={styles.poligon}>
              <svg width="37" height="39" viewBox="0 0 795 918" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M794.625 459.125L0.37496 917.685L245.625 459.125L0.375 0.564418L794.625 459.125Z" fill="#F95800" />
              </svg>

            </div>
          </section>

        </section>
      </section>
    </>
  )
}

export default BatePapo