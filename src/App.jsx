import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import './App.css'
import { Contador } from "./pages/Contador"
import { Home } from "./pages/Home"
import { ContadorAntes } from "./pages/ContadorAntes"
import { ListaTareas } from "./pages/ListaTareas"
import { CambioVariables } from "./pages/CambioVariables"
import { ContadorHooks } from "./pages/ContadorHooks"
import { Batch } from "./pages/Batch"
import { ProviderA } from "./context/contextoA.provider"
import { ProviderB } from "./context/contextoB.provider"
import { Context } from "./pages/Context"

function App() {

  return (
    <ProviderA>
      <ProviderB>
        <NavBar></NavBar>
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/contador" element={<Contador></Contador>}></Route>
            <Route path="/contadorAntes" element={<ContadorAntes></ContadorAntes>}></Route>
            <Route path="/listaTareas" element={<ListaTareas></ListaTareas>}></Route>
            <Route path="/cambioVariables" element={<CambioVariables></CambioVariables>}></Route>
            <Route path="/contadorHooks" element={<ContadorHooks></ContadorHooks>}></Route>
            <Route path="/batch" element={<Batch></Batch>}></Route>
            <Route path="/context" element={<Context></Context>}></Route>
            <Route path="/*" element={<Navigate to='/' />}></Route>
          </Routes>
        </div>
      </ProviderB>
    </ProviderA>
  )
}

export default App
