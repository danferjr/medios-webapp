import React, { useState, useEffect } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  LineChart,
  Legend
} from 'recharts';
import { complex, exp, multiply, sin, cos } from 'mathjs';

// Función para generar puntos de una señal sinusoidal
const generateSinusoidalData = (amplitude, frequency, phase, duration, interval) => {
  const data = [];
  for (let t = 0; t <= duration; t += interval) {
    const value = amplitude * sin(2 * Math.PI * frequency * t + phase);
    data.push({ time: t, value: value });
  }
  return data;
}

// Función para calcular los parámetros de la línea de transmisión
const calculateTransmissionLineParameters = (Zl, Z0, alpha, beta, amplitude, phase) => {
  const length = 10; // Longitud de la línea en metros (ejemplo)
  const gamma = complex(alpha, beta); // Constante de propagación

  // Generar datos para las gráficas
  const voltageData = [];
  const currentData = [];
  const impedanceData = [];
  const reflectionCoefficientData = [];

  for (let x = 0; x <= length; x += 0.1) {
    const voltage = amplitude * exp(-alpha * x) * cos(beta * x + phase);
    const current = voltage / Z0;
    const impedance = Z0; // Aquí puedes añadir un cálculo más complejo si es necesario
    const reflectionCoefficient = (Zl - Z0) / (Zl + Z0);

    voltageData.push({ position: x, value: voltage });
    currentData.push({ position: x, value: current });
    impedanceData.push({ position: x, value: impedance });
    reflectionCoefficientData.push({ position: x, value: reflectionCoefficient.re });
  }

  return {
    voltageData,
    currentData,
    impedanceData,
    reflectionCoefficientData,
    gamma
  };
}

const SignalChart = () => {
  const [amplitude, setAmplitude] = useState(2);
  const [frequency, setFrequency] = useState(1);
  const [phase, setPhase] = useState(0);
  const [Rg, setRg] = useState(1); // Resistencia del generador
  const [Xg, setXg] = useState(0); // Reactancia del generador
  const [Zl, setZl] = useState({ Rl: 1, Xl: 0 }); // Impedancia de carga
  const [Z0, setZ0] = useState(50); // Impedancia característica
  const [alpha, setAlpha] = useState(0.01); // Constante de atenuación
  const [beta, setBeta] = useState(0.1); // Constante de fase
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

  const handleRgChange = (event) => {
    setRg(parseFloat(event.target.value));
  };

  const handleXgChange = (event) => {
    setXg(parseFloat(event.target.value));
  };

  const handleRlChange = (event) => {
    setZl({ ...Zl, Rl: parseFloat(event.target.value) });
  };

  const handleXlChange = (event) => {
    setZl({ ...Zl, Xl: parseFloat(event.target.value) });
  };

  const handleZ0Change = (event) => {
    setZ0(parseFloat(event.target.value));
  };

  const handleAlphaChange = (event) => {
    setAlpha(parseFloat(event.target.value));
  };

  const handleBetaChange = (event) => {
    setBeta(parseFloat(event.target.value));
  };

  // Generar puntos de la señal sinusoidal
  const signalData = generateSinusoidalData(amplitude, frequency, phase, duration, interval);

  // Calcular parámetros de la línea de transmisión
  const {
    voltageData,
    currentData,
    impedanceData,
    reflectionCoefficientData,
    gamma
  } = calculateTransmissionLineParameters(complex(Zl.Rl, Zl.Xl), complex(Z0, 0), alpha, beta, amplitude, phase);

  return (
    <div>
      <div>
        <h3>Entradas. </h3>
        <div>
          Amplitude: 
          <input type="number" value={amplitude} onChange={handleAmplitudeChange} />
        </div>
        <div>
          Frequency: Frecuencia: 
          <input type="number" value={frequency} onChange={handleFrequencyChange} />
        </div>
        <div>
          Phase: Fase:
          <input type="number" value={phase} onChange={handlePhaseChange} />
        </div>
        <div>
          Rg (Resistive component Componente resistivo): 
          <input type="number" value={Rg} onChange={handleRgChange} />
        </div>
        <div>
          Xg (Reactive component Componente reactivo.): 
          <input type="number" value={Xg} onChange={handleXgChange} />
        </div>
        <div>
          Rl (Load resistance): 
          <input type="number" value={Zl.Rl} onChange={handleRlChange} />
        </div>
        <div>
          Xl (Load reactance): 
          <input type="number" value={Zl.Xl} onChange={handleXlChange} />
        </div>
        <div>
          Z0 (Characteristic Impedance): 
          <input type="number" value={Z0} onChange={handleZ0Change} />
        </div>
        <div>
          α (Attenuation Constant): 
          <input type="number" value={alpha} onChange={handleAlphaChange} />
        </div>
        <div>
          β (Phase Constant): 
          <input type="number" value={beta} onChange={handleBetaChange} />
        </div>
      </div>
      
      <h3>Parametros linea de transmision. </h3>
      <div>Caracteristicas de Impedancia(Z0): {Z0} Ω</div>
      <div>Constante de atenuacion (α): {alpha} Np/m</div>
      <div>Phase Constant Constante de Fase (β): {beta} rad/m</div>
      <div>Propagation Constant Constante de propagación (γ): {gamma.toString()} /m</div>

      <ResponsiveContainer width="100%" aspect={2}>
        <LineChart
          data={voltageData}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="position" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" name="Voltage" />
        </LineChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" aspect={2}>
        <LineChart
          data={currentData}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="position" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#82ca9d" name="Current" />
        </LineChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" aspect={2}>
        <LineChart
          data={impedanceData}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="position" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#ff7300" name="Impedance" />
        </LineChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" aspect={2}>
        <LineChart
          data={reflectionCoefficientData}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="position" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#ff7300" name="Reflection Coefficient" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SignalChart;
