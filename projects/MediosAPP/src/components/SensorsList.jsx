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