import { signal, computed, batch, effect } from "@preact/signals-react"

const nombre = signal('ReactJS')
const apellido = signal('con Signals')

const nombreCompleto = computed(() => `${nombre.value} ${apellido.value}`)

effect(() => console.log(nombreCompleto.value))

const onClick = () => {
    batch(() => {
        nombre.value = 'Sergie'
        apellido.value = 'Code'
    })
}

export const Batch = () => {
    return (
        <>
            <h1>Effect y Batch</h1>
            <h6>Mirá en consola</h6>
            <button onClick={onClick}>Hacer acción en bloque</button>
        </>
    )
}
