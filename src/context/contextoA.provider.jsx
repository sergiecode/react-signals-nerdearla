import { signal } from "@preact/signals-react"
import { ContextoA } from "./contextoA.context"

const variableDesdeProviderA = signal('Provider A: HOLA')

export const ProviderA = ({ children }) => {

    return (
        <ContextoA.Provider value={{ variableDesdeProviderA }}>
            {children}
        </ContextoA.Provider>
    )
}