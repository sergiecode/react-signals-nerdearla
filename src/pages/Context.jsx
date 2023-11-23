import React from 'react'
import { useContext } from "react"
import { ContextoA } from "../context/contextoA.context"
import { ContextoB } from "../context/contextoB.context"


export const Context = () => {
  const { variableDesdeProviderA } = useContext(ContextoA)
  const { variableDesdeProviderB, variableComputada } = useContext(ContextoB)

  const cambiarVariableDesdeProviderA = () => {
    variableDesdeProviderA.value = ('Seguime en mis redes como: Sergie Code')
  }
  const cambiarVariableDesdeProviderB = () => {
    variableDesdeProviderB.value = ('¡Espero que les haya gustado la clase!')
  }
  return (
    <>
      <div className="container">
        <h1 className="mt-5">Context</h1>
        <div className="row">
          <div className="col-md-6">
            <p>Contexto A: {variableDesdeProviderA}</p>
            <button className="btn btn-primary" onClick={() => cambiarVariableDesdeProviderA()}>
              Cambiar variable desde Provider A
            </button>
          </div>
          <div className="col-md-6">
            <p>Contexto B: {variableDesdeProviderB}</p>
            <button className="btn btn-success" onClick={() => cambiarVariableDesdeProviderB()}>
              Cambiar variable desde Provider B
            </button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <p>Computada: {variableComputada}</p>
          </div>
        </div>
      </div>
    </>
  )
}
