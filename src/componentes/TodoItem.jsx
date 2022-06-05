import React from 'react';

export function TodoItem({ todo , toggleTodo={toggleTodo}}) {
    const {id, servicio,nombre, horario, completed } = todo ;
    

    const handleTodoClick =() => {
        toggleTodo(id);
    };


  return (
  <div class="col "> 

        <div class="row  ">

            <div class="col-1">

            <input class="form-check-input"  type="checkbox" checked={completed} onChange={handleTodoClick}/>

            </div>

            <div class=" col-auto  ">


            <div class="card mb-1" >
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Servicio: {servicio}</li>
    <li class="list-group-item">Nombre:  {nombre}</li>
    <li class="list-group-item">Horario: {horario}  hs</li>
  </ul>
</div>



            </div>

        </div>
      













                
        </div>) 
}
/*
<div className='conteiner border border-2 p-2'>
    <div class="row">
        <div class="col-1 mt-4 p-3">
            <input class="form-check-input"  type="checkbox" checked={completed} onChange={handleTodoClick}/>
        </div>

        <div class="col-8">

            <li class="form-check" style={{listStyleType:'none'}}>
                <ul style={{listStyleType:'none'}}>
                    <li>Servicio: {servicio}</li>
                    <li>Nombre:  {nombre} </li>
                    <li>Horario: {horario}  hs</li>
                </ul>
            </li>
            
        </div>
    </div>
</div>
*/