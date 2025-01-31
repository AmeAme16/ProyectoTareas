import { useEffect, useState } from "react";
import type { tipoTarea } from "../types";

function useTareas() {
    const [contador, setContador] = useState(initialSemana());

    const [lista, setLista] = useState(initialLista());

    function initialLista(): tipoTarea[] {
        const localStorageTarea = localStorage.getItem("lista");
        return localStorageTarea ? JSON.parse(localStorageTarea) : [];
    }

    function initialSemana(): number {
        const localStorageSemana = localStorage.getItem("semana");
        return localStorageSemana ? JSON.parse(localStorageSemana) : 1;
    }

    useEffect(() => {
        localStorage.setItem("lista", JSON.stringify(lista));
    }, [lista]);

    useEffect(() => {
        localStorage.setItem("semana", JSON.stringify(contador));
    }, [contador]);

    function addToLista(tarea: tipoTarea) {
        setLista(prevLista => [...prevLista, tarea]);
    }

    function deleteFromLista(id: tipoTarea["id"]) {
        setLista(lista.filter((tarea) => tarea.id !== id));
    }

    return {
        contador, setContador, lista, initialLista, addToLista, deleteFromLista
    }
}

export default useTareas;