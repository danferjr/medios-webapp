import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <section class="contenedor">
          <article>
              <h2>Grupo Medios</h2>
              <h3>Integrantes</h3>
              <ul>
                  <li>Andrea Quiñones</li>
                  <li>Duber Elian</li>
                  <li>Camilo Andres Sauca</li>
              </ul>
              <p>Esta seria la primera pagina</p>
          </article>
      </section>
      <h1>APP Medios </h1>
    </>
  )
}

export default App
