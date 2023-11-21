import { computed, effect, signal } from "@preact/signals-react"

const tareas = signal([
    { id: 1, descripcion: "Comprar Cereales", completada: true },
    { id: 2, descripcion: "Pasear al Perro", completada: false },
    { id: 3, descripcion: "Suscribirse a Sergie Code", completada: false },
])

const descripcion = signal('')

function agregarTarea() {
    tareas.value = [...tareas.value, { descripcion: descripcion.value, completada: false }]
    descripcion.value = ''
}

function borrarTarea(tarea) {
    tareas.value = tareas.value.filter(t => t !== tarea)
}

const completadas = computed(() => tareas.value.filter(t => t.completada))
effect(() => console.log('Tareas: ', tareas.value, ' y completadas: ', completadas.value.length, ' de ', tareas.value.length))

export const ListaTareas = () => {
    const onInput = (e) => (descripcion.value = e.target.value)
    return (
        <div className="container mt-4">
            <h1>Lista de Tareas</h1>
            <div className="row">
                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        value={descripcion.value}
                        onInput={onInput}
                        placeholder="Ingrese una tarea"
                    />
                </div>
                <div className="col-md-6">
                    <button
                        className="btn btn-primary"
                        onClick={agregarTarea}
                    >
                        Agregar Tarea
                    </button>
                </div>
            </div>
            <ul className="list-group mt-3">
                {tareas.value.map(tarea => (
                    <li key={tarea.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {tarea.descripcion}
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => borrarTarea(tarea)}
                        >
                            Borrar
                        </button>
                    </li>
                ))}
            </ul>
        </div>

    )
}
