import { computed, signal } from "@preact/signals-react"
import { ContextoB } from "./contextoB.context"
import { ContextoA } from "./contextoA.context"
import { useContext } from "react"


export const ProviderB = ({ children }) => {

    const { variableDesdeProviderA } = useContext(ContextoA)
    const variableDesdeProviderB = signal('Provider B: MUNDO')
    const variableComputada = computed(() => variableDesdeProviderA.value + ' ' + variableDesdeProviderB.value)

    return (
        <ContextoB.Provider value={{ variableDesdeProviderB, variableComputada }}>
            {children}
        </ContextoB.Provider>
    )
}