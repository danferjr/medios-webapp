# Aplicación web Medios de Transmisión 
Creación de llaves
Crear llaves SSH nos permitirá modificar o acceder a nuestros repositorios en Github de forma segura:
```
    ssh-keygen -t ed25519 -C "tucorreogit@gmail.com"
    eval `ssh-agent -s`
    ssh-add ~/.ssh/id_ed25519
```
Realiza una aplicación web la cual le permita transmitir una determinada frecuencia a través de una linea de transmisión.

Leer los requisitos funcionales


import React, { useState } from "react";
import {
  LineChart, Line,
  XAxis, YAxis,
  CartesianGrid, Tooltip, Legend,
} from 'recharts';

function App() {
  // Estados para almacenar los valores ingresados por el usuario
  const [amplitud, setAmplitud] = useState(1);
  const [frecuencia, setFrecuencia] = useState(60);
  const [fase, setFase] = useState(0);
  const [zGenerador, setZGenerador] = useState({ R: 50, X: 0 });
  const [tipoLinea, setTipoLinea] = useState("coaxial");
  const [impedanciaCarga, setImpedanciaCarga] = useState({ R: 75, X: 0 });
  const [caracteristicasLinea, setCaracteristicasLinea] = useState({
    longitud: 100,
    diametro: 0.5,
    conductividad: 5.8e7,
    permitividad: 8.854e-12,
    permeabilidad: Math.PI * 4e-7,
  });

  // Función para calcular los valores de voltaje, corriente, impedancia, etc.

  return (
    <div className="App">
      {/* Componentes para que el usuario ingrese los valores */}
      {/* Componentes para visualizar los valores ingresados */}
      {/* Componente para visualizar la línea de transmisión */}
      {/* Componente para visualizar las gráficas */}
      <LineChart
        width={800}
        height={400}
        data={data} // Aquí debes proporcionar los datos para las gráficas
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="voltage" stroke="#8884d8" />
        <Line type="monotone" dataKey="current" stroke="#82ca9d" />
        {/* Otras líneas para las otras gráficas */}
      </LineChart>
    </div>
  );
}

export default App;


import React from 'react'
const data

const NotFound = () => {
  return (
    <div>Grafica</div>

  )
}

export default NotFound


grafica de lineas*******************************************
import { Tooltip } from '@mui/material'
import React from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts'
const data = [
  {name: "Maria", age: 10, weigth:70},
  {name: "Susana", age: 25, weigth:85},
  {name: "Pedro", age: 32, weigth:50},
  {name: "Adrian", age: 13, weigth:69},
  {name: "Veronica", age: 23, weigth:78},
]

const NotFound = () => {
  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top:10,
          right:30,
          left:0,
          bottom:0
        }}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip />
        <Area type="monotone" dataKey="age" stackId="1" stroke='#8884d8' fill='#8884d8' />
        <Area type="monotone" dataKey="weigth" stackId="1" stroke='#82caed' fill='#fad3cf' />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default NotFound


graficatem.jsx***********

//import LineGraph from "./SensorCharts";
import SensorLineChart from "./sensor/SensorLineChart";
import { useState } from "react";
import { Box, Container, Grid, Stack } from "@mui/material";

// const targetUrl = "ws://192.168.1.96/ws";
// const ws = new WebSocket(targetUrl);

export default function GraphsList() {
  // const addData = (value) => {
  //   let newData = { time: setCount(count + 1), light: value };

  //   setData([...data, newData]);
  // };

  // ws.onopen = () => {
  //   console.log("conectado");
  // };

  // ws.onmessage = (e) => {
  //   addData(e.data);
  // };

  return (
    <Box sx={{ flexWrap:'wrap', flexGrow: 1, p: 2, m: 2, justifyContent: 'center'  }}>
      <Stack spacing={2}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6} >
            <SensorLineChart url="ws://192.168.243.118/ws" />
          </Grid>
          <Grid item xs={12} md={6}>
            <SensorLineChart url="ws://192.168.243.112/ws" />
          </Grid>
          <Grid item xs={12} md={6}>
            <SensorLineChart url="ws://192.168.243.128/ws" />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}


codigo sinusoidal *******************************************
import { Tooltip } from '@mui/material'
import React from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts'

// Función para generar puntos de una señal sinusoidal
const generateSinusoidalData = (amplitude, frequency, phase, duration, interval) => {
  const data = [];
  for (let t = 0; t <= duration; t += interval) {
    const value = amplitude * Math.sin(2 * Math.PI * frequency * t + phase);
    data.push({ time: t, value: value });
  }
  return data;
}

const SignalChart = () => {
  // Parámetros de la señal sinusoidal
  const amplitude = 2;
  const frequency = 1; // Frecuencia en Hz
  const phase = 0;
  const duration = 10; // Duración de la señal en segundos
  const interval = 0.1; // Intervalo de muestreo en segundos

  // Generar puntos de la señal sinusoidal
  const signalData = generateSinusoidalData(amplitude, frequency, phase, duration, interval);

  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <AreaChart
        width={500}
        height={400}
        data={signalData}
        margin={{
          top:10,
          right:30,
          left:0,
          bottom:0
        }}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="time"/>
        <YAxis/>
        <Tooltip />
        <Area type="monotone" dataKey="value" stackId="1" stroke='#8884d8' fill='#8884d8' />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default SignalChart;

mostrar 3dato************************ NO funciona

import { Tooltip, Typography } from '@mui/material'
import React from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts'

// Función para generar puntos de una señal sinusoidal
const generateSinusoidalData = (amplitude, frequency, phase, duration, interval) => {
  const data = [];
  for (let t = 0; t <= duration; t += interval) {
    const value = amplitude * Math.sin(2 * Math.PI * frequency * t + phase);
    data.push({ time: t, value: value });
  }
  return data;
}

const SignalChart = ({ amplitude, frequency, phase }) => {
  // Parámetros de la señal sinusoidal
  const duration = 10; // Duración de la señal en segundos
  const interval = 0.1; // Intervalo de muestreo en segundos

  // Generar puntos de la señal sinusoidal
  const signalData = generateSinusoidalData(amplitude, frequency, phase, duration, interval);

  return (
    <div>
      <ResponsiveContainer width="100%" aspect={2}>
        <AreaChart
          width={500}
          height={400}
          data={signalData}
          margin={{
            top:10,
            right:30,
            left:0,
            bottom:0
          }}
        >
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="time"/>
          <YAxis/>
          <Tooltip />
          <Area type="monotone" dataKey="value" stackId="1" stroke='#8884d8' fill='#8884d8' />
        </AreaChart>
      </ResponsiveContainer>
      <Typography variant="subtitle1">
        Amplitud: {amplitude}, Frecuencia: {frequency} Hz, Fase: {phase}
      </Typography>
    </div>
  )
}

export default SignalChart;

**************************************************
Objetivos:
El usuario debe poder:

- Escoger la amplitud, frecuencia y fase de la señal del generador.                 -> REALIZADO
- Elegir la impedancia del generador (Zg= Rg+jXg).
- Elegir entre cable coaxial o línea bifilar.
- Elegir las características geométricas y eléctricas del cable coaxial o bifilar.
- Elegir la impedancia de carga (Zl = Rl + jXl)
**************************************************
- Elegir la impedancia del generador (Zg= Rg+jXg).

Zg= Rg+jXg

Rg = ? resistencia en el generador?
Xg = ? distancia en el generador?


**************************************************
- Elegir entre cable coaxial o línea bifilar.

caja de dos opciones [Coaxial, Bifilar]

**************************************************
- Elegir las características geométricas y eléctricas del cable coaxial o bifilar.
a ? 
b ? 
e ?

**************************************************
- Elegir la impedancia de carga (Zl = Rl + jXl)

Zl = Rl + jXl

Rl = ? resistencia en la carga?
jXl = ?  
**************************************************
++++++++++++++++++++++++++++++++++++++++++++++++++
El usuario debe visualizar

- Las entradas de valores. -> REALIZADO(para grafica Seno)
- La línea de transmisión elegida.
- La gráfica de voltaje a lo largo de la línea.
- La gráfica de corriente a lo largo de la línea.
- La gráfica de impedancia a lo largo de la línea.
- La gráfica de coeficiente de reflexión a lo largo de la línea.
- El valor de la impedancia característica de la línea.
- El valor de los parámetros distribuidos de la línea.
- La constante de atenuación, la constante de fase, y por lo tanto, la constante de propagación de la línea.
++++++++++++++++++++++++++++++++++++++++++++++++++

Datos que se le solicita al usuario:
a
b
e

Datos que debemos de definir:
R,G,C,L  -> parametros distribuidos.

Ecuaciones a usar dadas por el docente:

Rs = sqrt(wu/2v)    v: conductividad del conductor
R = Rs/2pi [1/a + 1/b]
G = 2piRo_d/ln(b/a)       Ro_d: Conductividad del dielectrico
C = 2piEd/ln(b/a)         E del dieléctrico
L = ud/2pi ln(b/a)        ud del dieléctrico

R = Rs/pia
G = piRo_d/cosh^-1(c/b)
L = u/pi cosh^-1(c/b)
C = piE/cosh^-1(c/b)




