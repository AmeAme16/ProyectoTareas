import type { tipoTarea } from "../types";

type FormularioProps = {
    semana: number;
    addToLista: (tarea: tipoTarea) => void;
    listaLength: number;
};

export default function Formulario({ semana, addToLista, listaLength }: FormularioProps) {

    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    function obtenerDatos(event: React.FormEvent) {
        event.preventDefault();

        const dia = (document.getElementById("day") as HTMLSelectElement).value;
        const nombre = (document.getElementById("tarea") as HTMLInputElement).value;

        const tarea: tipoTarea = { id: listaLength, nombre: nombre, dia: dia, semana: semana };
        addToLista(tarea);
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
                    <input type="text" id="tarea" placeholder="Escribe la tarea" required />
                </label>
                <button type="submit" >Añadir Tarea</button>
            </form>
        </>
    )
}