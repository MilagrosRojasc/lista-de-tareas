import React from 'react';
import { useState } from 'react';
import { v4 } from 'uuid';
import '../hojas-de-estilo/FormularioTareas.css';

function FormularioTareas (props){

    const [input, setInput] = useState('');

    const cambio = e  =>{
        setInput(e.target.value);
    }

    const envio = e =>{
        e.preventDefault();

        const tareaNueva = {
            id: v4(),
           texto: input,
           completada: false
        }
        props.onSubmit(tareaNueva)

    }
    return(
        <form className='formulario-tarea'
        onSubmit={envio}> 
            <input 
            className='input-tarea' 
            type='text'
            placeholder='Escribe una tarea'
            name='texto'
            onChange={cambio}
            />
            <button className='boton-tarea'>
                Agregar tarea
            </button>
        </form>
    ); 
}

export default FormularioTareas;