import styles from "./Cadastro4.module.css"
import { useState } from 'react';
import React from "react";

function Cadastro4({formData, setFormData}) {

   
    return (
        <div className={styles.container}>

            <div className={styles.formulario}>

                <form >
                    <input name="password" type="password" placeholder="SENHA" 
                    value={formData.password}
                    onChange={(event ) => 
                    setFormData({...formData, password:event.target.value})}
                    />

                    <input name="confirmPassword" type="password" placeholder="CONFIRME SUA SENHA" 
                    value={formData.confirmPassoword}
                    onChange={(event ) => 
                    setFormData({...formData, confirmPassoword:event.target.value})}/>
                    <div className={styles.checkbox}>
                        <input type="checkbox" />
                        <text>Quer receber notícias, atualizações diretamente no seu e-mail?</text>
                    </div>
           
        </form>

           </div >

        </div >
    )
}

export default Cadastro4;