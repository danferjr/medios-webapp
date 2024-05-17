import React from "react";
import '../styles/Login.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
    return(   
        <>
            <Header/>
            <section class="contenedor">
                <article>
                    <h2>Grafica 1</h2>
                    <h3>Integrantes</h3>
                    <ul>
                        <li>Andrea</li>
                        
                        <li>Camilo Sauca</li>
                        <li>Daniel Fernando Morales C</li>
                    </ul>
                    <p>Esta grafica es voltaje a lo largo de la linea.</p>
                    <a href="/graficatemp" class="button">Ver grafica</a>
                </article>
            </section>
            <Footer/>
        </>     
    );
}

export default Login;