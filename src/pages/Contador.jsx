import { signal, computed } from "@preact/signals-react"

const count = signal(0);

const double = computed(() => count.value * 2);

export const Contador = () => {

    return (
        <>
            <h1>Contador con Signals</h1>
            <h4>Contador x 2 = Doble</h4>
            <h6>Cada vez que hagas click el contador sumará uno</h6>
            <button className="btn btn-primary" onClick={() => count.value++}>
                {count} x 2 = {double}
            </button>
        </>
    )
}
