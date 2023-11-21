
import { NavLink } from "react-router-dom"
import { useContext } from "react"


export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <NavLink to='/' className="navbar-brand">React + Signals</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/contador' className="nav-link active">Contador</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contadorAntes' className="nav-link active">Contador Antes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/listaTareas' className="nav-link active">Lista de Tareas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/cambioVariables' className="nav-link active">Cambio de Variables</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contadorHooks' className="nav-link active">Contador con Hooks</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/batch' className="nav-link active">Batch y Effect</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}