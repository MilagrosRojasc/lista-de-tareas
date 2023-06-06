import './App.css';
import FormularioTareas from './componentes/FormularioTareas';
import ListaDeTareas from './componentes/listaDeTareas';
import Tarea from './componentes/tarea';

function App() {
  return (
    <div className="App">
      <div className='Lista-principal'>
        <h1>Tareas pendientes</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
