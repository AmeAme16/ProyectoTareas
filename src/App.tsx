import Formulario from './components/Formulario';
import Tarea from './components/Tarea';
import useTareas from "./hooks/useTareas";

function App() {

  const { diasSemana, contador, lista, addToLista, deleteFromLista, anteriorSemana, siguienteSemana, tareasPorDia, tareasPorSemana } = useTareas();

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