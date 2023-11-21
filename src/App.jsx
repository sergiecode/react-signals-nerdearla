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

function App() {

  return (
    <>
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
          <Route path="/*" element={<Navigate to='/' />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
