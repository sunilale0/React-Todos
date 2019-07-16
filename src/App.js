import React from 'react';
import Lists from './Lists/Lists';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: ['this is some default todos', 'this is the next todo'],
      currentVal: '',
      editMode: false,
      editIndex: null
    }
  }

  addTask = (event) =>{
    event.preventDefault()
    console.log('[App.js] addTask runs')
    if (this.state.editMode) {
      if (this.state.currentVal !== '') {
        console.log('value of newArr: ',)
        this.setState({
          currentVal: '',
          todos: this.state.todos.map((element, index) => {
            if (this.state.editIndex === index) {
              console.log('if conditional in forEach')
              return this.state.currentVal
            } else return element;
          }),
          editMode: false
        })
      }
    }else if(this.state.currentVal !== ''){
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
      <button
        name='delete'
        onClick={this.deleteEl}
        value={index}>Delete</button>
    <button 
        name='edit'
        onClick={this.editEl}
        value={index}>Edit</button>
    </li>)
  }

  deleteEl = (props) => {
    console.log('[App.js] deleteEl clicked')
    console.log('props.key deleteEl: ' + props.target.value)
      this.setState({
        todos: this.state.todos.filter((el, index) =>
          index !== parseInt(props.target.value))
      })  
  }

  editEl=(event)=>{
    
    console.log('[App.js] editEl clicked');
    console.log('editEl event.target.value: ', event.target.value)
    this.setState({
      currentVal: this.state.todos[event.target.value],
      editMode: true,
      editIndex: parseInt(event.target.value)
    })
  }


  render(){
    return (
      <div className="App">
        
        <form  onSubmit = {this.addTask}>
        {/* <input type = 'text' placeholder='I have to do this or that' key='' onChange={this.currentInput} value ='sdfdf'/> */}
          <input
            type='text'
            placeholder='I have to do this or that'
            key='1'
            onChange={this.currentInput}
            value={this.state.currentVal}/>

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
