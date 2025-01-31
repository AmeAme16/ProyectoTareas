import type { tipoTarea } from "./types";
import Formulario from './components/Formulario';
import Tarea from './components/Tarea';
import useTareas from "./hooks/useTareas";
const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

function App() {



  const { contador, setContador, lista, addToLista, deleteFromLista } = useTareas();

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
        />
        <h2>Total de tareas esta semana: {tareasPorSemana()}</h2>
        <section className="calendar">

          {diasSemana.map((dia) => (
            <div key={dia} className="day">
              <h3>{dia}  ({tareasPorDia(dia)} tareas)</h3>
              <ul className="task-list">
                {lista
                  .filter((tarea) => tarea.semana === contador && tarea.dia === dia)
                  .map((tarea) => (
                    <Tarea
                      key={tarea.id}
                      tarea={tarea}
                      deleteFromLista={deleteFromLista}
                    />
                  ))}
              </ul>
            </div>
          ))}
        </section>

      </article >
    </>
  )
}
export default App