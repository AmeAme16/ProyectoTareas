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


            <li>
                {tarea.nombre}
                <button className="delete-button" onClick={() => deleteFromLista(tarea.id)}>
                    🗑️
                </button>
            </li>


        </>
    )
}
