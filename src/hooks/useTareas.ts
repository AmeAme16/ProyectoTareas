import { useEffect, useState } from "react";
import type { tipoTarea } from "../types";

function useTareas() {

    const [lista, setLista] = useState(initialLista());

    function initialLista(): tipoTarea[] {
        const localStorageTarea = localStorage.getItem("lista");
        return localStorageTarea ? JSON.parse(localStorageTarea) : [];
    }

    useEffect(() => {
        if (lista.length > 0) {
            localStorage.setItem("lista", JSON.stringify(lista));
        }
    }, [lista]);

    function addToLista(tarea: tipoTarea) {
        setLista(prevLista => [...prevLista, tarea]);
    }

    function deleteFromLista(id: tipoTarea["id"]) {
        setLista(lista.filter((tarea) => tarea.id !== id));
    }

    return {
        lista, listaLength: lista.length, initialLista, addToLista, deleteFromLista
    }
}

export default useTareas;