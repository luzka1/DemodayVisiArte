import styles from "./Cadastro1.module.css"
import { useState } from 'react';
import React from "react";


function Cadastro1({formData, setFormData}) {

   
    return (
        <div className={styles.container}>

            <div className={styles.formulario}>

                <form >
                    <input name="email" type="text" placeholder="E-MAIL" 
                     value={formData.email}
                     onChange={(event ) => 
                     setFormData({...formData, email:event.target.value})}
                     required/>
                     
                    <div className={styles.checkbox}>
                        <input type="checkbox" />
                        <text>Quer receber notícias, atualizações diretamente no seu e-mail?</text>
                    </div>
           
        </form>

           </div >

        </div >
    )
}

export default Cadastro1;