import React, {Fragment, useState, useRef , useEffect} from "react";
import{v4 as uuidv4 } from "../node_modules/uuid/dist";
import { TodoList } from "./componentes/TodoList";
import "./componentes/estilos.css"

const KEY= "todoApp.todos";

export function App() {
    const [todos, setTodos] = useState([

       // { id: 1, task: "tarea 1",  completed: false},
        { id: 1, servicio: "corte", nombre:"maria", horario:"10",  completed: false},
    ]);

    const todoTaskRef = useRef();
    const todoNombre = useRef();
    const todoHorario = useRef();
  

   
//---------------------------- local storge ----------------//
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(KEY));
        if(storedTodos){
            setTodos(storedTodos);
        }
    }, []);

    useEffect(()=> {
        localStorage.setItem(KEY, JSON.stringify(todos));
    }, [todos]);

//---------------------------- Fin local storge ----------------//

    const toggleTodo = (id) =>{
        const newTodos =[...todos];
        const todo= newTodos.find((todo)=> todo.id ===id )
        todo.completed =! todo.completed;
        setTodos(newTodos);
    };

    const todoAdd = () => {
        const servicio = todoTaskRef.current.value;
        const nombre = todoNombre.current.value;
        const horario = todoHorario.current.value;

        if (servicio & nombre & horario === " ") return;

        setTodos((prevTodos)=> {
            return [...prevTodos, { id: uuidv4(), servicio, nombre, horario, completed: false}]
        });

        todoTaskRef.current.value= null;
        todoNombre.current.value = null;
        todoHorario.current.value = null;
       
    };

    const clearAll = () =>{
        const newTodos = todos.filter((todo)=> !todo.completed)
        setTodos(newTodos);
    }

    
    return (

    <Fragment>

<nav class="navbar navbar-expand-lg bg-warning   ">
  <div class="container-fluid col-auto justify-content-end " >


    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-scissors" viewBox="0 0 16 16">
        <path d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61 3.5 3.5zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"/>
    </svg>

    <div class="collapse navbar-collapse    ">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item ">
          <a class="nav-link disabled" aria-current="page" href="#">Inicio</a>
        </li>

        <li class="nav-item">
          <a class="nav-link disabled" href="#">Nosotros</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active">Turnos</a>
        </li>

      </ul>
    </div>
  </div>
</nav>

      
<div className="container bg-light " >
            <br /><h2 class="text-center">Reserva tu turno para la peluqueria</h2> <br />
                

  <div className="container col-6  d-flex justify-content-center">
      <div className="row ">
          <div className="col">
                    <input ref={todoTaskRef} style={{width:'200px'}} class="form-control" type="text" placeholder="Ingrese el servicio"/> <br />
                    <input ref={todoNombre} style={{width:'200px'}} class="form-control" type="text" placeholder="Nombre"/> <br />
                    <input ref={todoHorario} style={{width:'200px'}} class="form-control" type="number" min="1" placeholder="Horario"/> <br />
          <div className="col d-flex  justify-content-center">
                    <button onClick={todoAdd} type="button" class="btn btn-warning btn-sm m-1" >Agregar</button> 
                    <button onClick={clearAll} type="button" class="btn btn-warning btn-sm  m-1">Eliminar</button> <br/><br/>  
          </div>
          </div>
        </div>
    </div>

          <div className="col d-flex  justify-content-center m-4 fs-5 ">
                  Cantidad de clientes para hoy: {todos.filter((todo)=> !todo.completed).length}
          </div>



            <div className="col  d-flex justify-content-center  p-2  ">
              <TodoList todos={todos} toggleTodo= {toggleTodo}/>
              </div>





</div>   
        
        

    </Fragment>

        );
    
};

