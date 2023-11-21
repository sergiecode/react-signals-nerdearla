import { signal, computed } from "@preact/signals-react"

const a = signal(5)
const b = signal(7)
const c = computed(() => a + b)

export const CambioVariables = () => {
    return (
        <div className="container mt-5">
            <h1 className="display-4">Cambio de Variables</h1>
            <h2 className="mb-4">Suma de A + B</h2>
            <p className="lead">
                {a} + {b} = {c}
            </p>

            <button
                className="btn btn-primary"
                onClick={() => (a.value = 3)}
            >
                Cambiar valor de A por 3
            </button>
        </div>
    )
}
