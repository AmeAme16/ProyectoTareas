import type { tipoTarea } from "../types";

type TareaProps = {
    tarea: tipoTarea
    deleteFromLista: (id: tipoTarea["id"]) => void
}

export default function Tarea({ tarea, deleteFromLista }: TareaProps) {

    return (
        <>
            <li>
                {tarea.nombre}
                <button className="delete-button" onClick={() => deleteFromLista(tarea.id)}>
                    🗑️
                </button>
            </li>
        </>
    )
}
