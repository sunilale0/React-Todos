import React from 'react';
import Lists from './Lists/Lists';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: ['this is some default todos', 'this is the next todo'],
      currentVal: ''
    }
  }

  addTask = (event) =>{
    event.preventDefault()
    // let someVar = this.state.todos;
    // console.log('[App.js] this is event in addTask ', event)
    // console.log('[App.js] addTask this is event.target.value', event.target.value)

    // someVar.push(event.target.value)
   
    
    // console.log('[App.js] todos[0] ', this.state.todos[0]);
    if(event.target.value !== ''){
      this.setState({
        currentVal: '',
        todos: [...this.state.todos, this.state.currentVal]
      })
    }
    
  }

  currentInput = (props) =>{
    console.log('props in currentInput 29', props.target.value)
    console.log('currentInput [App.js]: ', props.target.value)
    this.setState({
      currentVal: props.target.value
    })
    
  }

  currentVal = () =>{
    console.log('currentVal [App.js]: ', )
    return <p>{this.state.value}</p>
  }
  //  key={index+'00'} 
  theOutput = () =>{
    return this.state.todos.map((el, index)=> <li key={'key'+ index}>{el}
    <button onSubmit={this.deleteEl} key={index}>Delete</button>
    <button onSubmit={this.editEl}>Edit</button>
    </li>)
  }

  deleteEl=(props)=>{
      this.setState({
        todos: this.state.todos.filter(el=> this.state.todos.indexOf(el)!==props.key)
      })  
  }

  editEl=(index)=>{
    
      
  }


  render(){
    return (
      <div className="App">
        
        <form  onSubmit = {this.addTask}>
        {/* <input type = 'text' placeholder='I have to do this or that' key='' onChange={this.currentInput} value ='sdfdf'/> */}
        <input type = 'text' placeholder='I have to do this or that' key='1' onChange={this.currentInput}/>

        {/* <input type= 'submit' onSubmit = {this.addTask}/> */}
        <button type = 'submit'>Add Task</button>

        </form>
        
        <p>
          Just the temporary display below the input: {this.state.currentVal}
        </p>
        <ul>
           {this.theOutput()}
        </ul>
        <Lists />
      </div>
    );
  }
  
}

export default App;
