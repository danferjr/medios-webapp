import React, { useState } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

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
  const [amplitude, setAmplitude] = useState(2);
  const [frequency, setFrequency] = useState(1);
  const [phase, setPhase] = useState(0);
  const [duration] = useState(10); // Duración de la señal en segundos
  const [interval] = useState(0.1); // Intervalo de muestreo en segundos

  const handleAmplitudeChange = (event) => {
    setAmplitude(parseFloat(event.target.value));
  };

  const handleFrequencyChange = (event) => {
    setFrequency(parseFloat(event.target.value));
  };

  const handlePhaseChange = (event) => {
    setPhase(parseFloat(event.target.value));
  };

  // Generar puntos de la señal sinusoidal
  const signalData = generateSinusoidalData(amplitude, frequency, phase, duration, interval);

  return (
    <div>
      <div>
        Amplitude: 
        <input type="number" value={amplitude} onChange={handleAmplitudeChange} />
      </div>
      <div>
        Frequency: 
        <input type="number" value={frequency} onChange={handleFrequencyChange} />
      </div>
      <div>
        Phase: 
        <input type="number" value={phase} onChange={handlePhaseChange} />
      </div>
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
    </div>
  )
}

export default SignalChart;
