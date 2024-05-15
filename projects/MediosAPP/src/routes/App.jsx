//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import Layout from "../containers/Layout";
import Login from "../containers/Login"
import GraficaTemp from "../containers/GraficaTemp"
import NotFound from '../pages/NotFound';
import GraficaSeno from '../pages/graficaSeno';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/graficaTemp" element={<GraficaTemp/>} />
            <Route path="/graficaSeno" element={<GraficaSeno/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default App
