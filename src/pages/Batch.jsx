import { signal, computed, batch, effect } from "@preact/signals-react"

const nombre = signal('ReactJS')
const apellido = signal('con Signals')

const nombreCompleto = computed(() => `${nombre.value} ${apellido.value}`)

effect(() => console.log('Desde solapa BATCH: ',nombreCompleto.value))

const onClick = () => {
    batch(() => {
        nombre.value = 'Sergie'
        apellido.value = 'Code'
    })
}

export const Batch = () => {
    return (
        <>
            <div className="container mt-5">
                <h1 className="display-4">Effect y Batch</h1>
                <p className="lead">Mirá en consola</p>
                <button className="btn btn-primary" onClick={onClick}>
                    Hacer acción en bloque
                </button>
            </div>
        </>
    )
}
