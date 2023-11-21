import { useSignal, useComputed } from "@preact/signals-react"

export const ContadorHooks = () => {
    const contador = useSignal(0); // se usa por dentro del componente
    const doble = useComputed(() => contador.value * 2)
    return (
        <>
            <h1>Contador con Hooks</h1>
            <h4>Contador x 2 = Doble</h4>
            <h6>Cada vez que hagas click el contador sumará uno</h6>
            <p>{contador} x 2 = {doble}</p>
            <button className="btn btn-primary" onClick={() => contador.value++}>Incrementar</button>
        </>
    )
}
