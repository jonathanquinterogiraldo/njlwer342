import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor(props){
    super(props);
    this.state = { tasks: [] }
  }  

  sendData = (event) => {
    event.preventDefault()      
    this.setState({       
      tasks: [...this.state.tasks, event.target.formTask.value]      
    })   
  }

  render() {
    console.log(this.state.tasks)
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            <li>Sacar la ropa</li>
            <li>Hacer la cama</li>
            <li>Leer un rato</li>
            {this.state.tasks.map((name, index) =>
            <li key={index}>{ name }</li>
          )} 
          </ul>
           <form onSubmit={ this.sendData }>
             <input type="text" id="new-task" name="formTask" placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    )
  }
}


export default App;
