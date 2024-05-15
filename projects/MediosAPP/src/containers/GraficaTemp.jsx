import React from "react";
import '../styles/GraficaTemp.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sensores from "../components/SensorsList";

const GraficaTemp = () => {
    return(
        <>
            <Header/>
            <section>
                <div class="contenedor">
                    <a href="/" class="button">INICIO</a>
                </div>
                <section>
                    <div class="contenedor-grafica">
                    <Sensores/>
                    </div>
                    <div>Datos opcion1</div>
                    <div class="descripcion">
                        <h4>DESCRIPCION</h4>
                        <p> Esta grafica muestra los datos siministrados  </p>
                        <p> que se solicitaban en el requerimiento. </p>
                    </div>
                </section>
            </section> 
            <Footer/>
        </>
    );
}

export default GraficaTemp;
