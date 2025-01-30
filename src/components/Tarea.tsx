import type { tipoTarea } from "../types";

type TareaProps = {
    lista: tipoTarea[]
    tarea: tipoTarea
    deleteFromLista: (id: tipoTarea["id"]) => void
    contador: number
}

export default function Tarea({ lista, tarea, deleteFromLista, contador }: TareaProps) {

    return (
        <>
            <section>
                <h2>{lista.filter(t => t.semana === contador).length}</h2>
                <aside className="calendar">
                    <div className="day">
                        <h3>
                            {tarea.dia}
                        </h3>
                        <ul className="task-list">
                            <li>
                                {tarea.nombre}
                                <button className="delete-button" onClick={() => deleteFromLista(tarea.id)}>
                                    🗑️
                                </button>
                            </li>
                        </ul>
                    </div>
                </aside>
            </section>

        </>
    )
}
