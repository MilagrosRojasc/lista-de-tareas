import React from "react";
import { useState } from "react";
import FormularioTareas from "./FormularioTareas";
import '../hojas-de-estilo/ListaDeTareas.css';
import Tarea from "./tarea";

function ListaDeTareas (){
    const [tareas, setTarea] = useState([]);

    const agregarTarea = tarea => {
        if(tarea.texto.trim()){
            tarea.texto= tarea.texto.trim();
            const tareaEstado = [tarea, ...tareas];
            setTarea(tareaEstado);
        }
    }

    const eliminarTarea = id => {
        const tareaEstado = tareas.filter(tarea=> tarea.id !== id);
        setTarea(tareaEstado)
    }

    const completarTarea = id => {
        const tareaEstado = tareas.map(tarea => {
          if (tarea.id === id) {
            tarea.completada = !tarea.completada;
          }
          return tarea;
        });
        setTarea(tareaEstado);
    }

    return(
     <>
        <FormularioTareas onSubmit={agregarTarea} /> 
        <div className="contenedor-lista">
            {
                tareas.map((tarea) =>
                    <Tarea 
                    key={tarea.id}
                    id={tarea.id}
                    texto= {tarea.texto}
                    completada={tarea.completada}
                    completarTarea={completarTarea}
                    eliminarTarea={eliminarTarea}

                    />
                        
                
                )
            }
        </div>
     </>
    );
}
export default ListaDeTareas;