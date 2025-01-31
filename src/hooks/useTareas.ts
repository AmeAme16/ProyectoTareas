import { useEffect, useState } from "react";
import type { tipoTarea } from "../types";

function useTareas() {
    const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
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

    function anteriorSemana() {
        const unoMenos = contador - 1;
        if (unoMenos >= 1) {
            setContador(unoMenos);
        }
    }

    function siguienteSemana() {
        const unoMas = contador + 1;
        if (unoMas <= 52) {
            setContador(unoMas);
        }
    }

    function tareasPorDia(dia: tipoTarea['dia']) {
        {
            return lista
                .filter((tarea) => tarea.semana === contador && tarea.dia === dia).length
        }
    }

    function tareasPorSemana() {
        { return lista.filter((tarea) => tarea.semana === contador).length }
    }

    return {
        diasSemana, contador, setContador, lista, initialLista, addToLista, deleteFromLista, anteriorSemana, siguienteSemana, tareasPorDia, tareasPorSemana
    }
}

export default useTareas;