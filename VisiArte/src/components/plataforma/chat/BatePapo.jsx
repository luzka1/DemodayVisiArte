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
          <section id={styles.send} ></section>

        </section>
      </section>
    </>
  )
}

export default BatePapo