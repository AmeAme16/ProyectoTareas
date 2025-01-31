import type { tipoTarea } from "../types";

type FormularioProps = {
    semana: number;
    addToLista: (tarea: tipoTarea) => void;
};

export default function Formulario({ semana, addToLista }: FormularioProps) {

    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    function obtenerDatos(event: React.FormEvent) {

        event.preventDefault();

        const dia = (document.getElementById("day") as HTMLSelectElement).value;
        const nombre = (document.getElementById("tarea") as HTMLInputElement).value;

        if (nombre.trim() != "") {
            const tarea: tipoTarea = { id: Date.now(), nombre: nombre, dia: dia, semana: semana };
            addToLista(tarea);
        }
    }

    function enter(e: React.KeyboardEvent) {
        if (e.key === "Enter") {
            obtenerDatos(e);
        }
    }

    return (
        <>
            <form className="form" onSubmit={obtenerDatos}>
                <label>
                    Día:
                    <select id="day">
                        {dias.map((element, index) => (
                            <option key={index} value={element}>
                                {element}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Tarea:
                    <input type="text" id="tarea" placeholder="Escribe la tarea" onKeyDown={enter} />
                </label>
                <button type="submit" >Añadir Tarea</button>
            </form>
        </>
    )
}