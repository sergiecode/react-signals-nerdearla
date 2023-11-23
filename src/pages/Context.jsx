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
      <h1>Context</h1>
      <p>Contexto A: {variableDesdeProviderA}</p>
      <p>Contexto B: {variableDesdeProviderB}</p>
      <p>Computada: {variableComputada}</p>

      <button onClick={() => cambiarVariableDesdeProviderA()}>Cambiar variable desde Provider A</button>
      <button onClick={() => cambiarVariableDesdeProviderB()}>Cambiar variable desde Provider B</button>

    </>
  )
}
