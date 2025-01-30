import type { tipoTarea } from "./types";
import Formulario from './components/Formulario';
import Tarea from './components/Tarea';
import useTareas from "./hooks/useTareas";
import { useState } from "react";


type TareaProps = {
  tarea: tipoTarea
}


function App({ tarea }: TareaProps) {

  const [contador, setContador] = useState(1);

  const { lista, addToLista, deleteFromLista, listaLength } = useTareas();

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

  return (
    <>
      <article className="container">
        <section className="header">
          <h1>Calendario Semanal</h1>
          <img src="public/img/logo.png" alt="Logo" className="logo" />
        </section>
        <section className="week-navigation">
          <button onClick={anteriorSemana}>Semana Anterior</button>
          <span>Semana {contador}</span>
          <button onClick={siguienteSemana}>Semana Siguiente</button>
        </section>

        <Formulario
          semana={contador}
          addToLista={addToLista}
          listaLength={listaLength}
        />

        {lista
          .filter((tarea) => tarea.semana === contador)
          .map((tarea) => (
            <Tarea lista={lista} key={tarea.id} tarea={tarea} deleteFromLista={deleteFromLista} contador={contador} />
          ))}

      </article>
    </>
  )
}
export default App