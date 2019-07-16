import React from 'react';
import Lists from './Lists/Lists';
import './App.css';
import Forms from './Forms/Forms';
import Navs from './Navs/Navs'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: ['this is some default todos', 'this is the next todo'],
      currentVal: '',
      editMode: false,
      editIndex: null,
      checkToggle: [],
      checkIndex: [],
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
          editMode: false,
        })
      }
    }
    
    else if(this.state.currentVal !== ''){
      
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
  
  
  theOutput = () =>{

    let style={
      listStyleType: 'none'
    }

    console.log("this.checkToggle in theOutput: ", this.state.checkToggle)
    return this.state.todos.map((el, index) => 
    
    (this.state.checkIndex[index]===true) ? 
    
    <li key={index} style={style}>
      <input
        type='checkbox'
        value={index}
        onClick={this.onCheck} />
      <del>{el}</del>   
      <button
        name='delete'
        onClick={this.deleteEl}
        value={index}>Delete</button>
    {/* <button 
        name='edit'
        onClick={this.editEl}
        value={index}>Edit</button> */}
    </li>
    :
    <li key={index} style={style}>
    <input
      type='checkbox'
      value={index}
      onClick={this.onCheck} />
    {el}
    <button
      name='delete'
      onClick={this.deleteEl}
      value={index}>Delete</button>
  <button 
      name='edit'
      onClick={this.editEl}
      value={index}>Edit</button>
  </li>
  )
  }

  onCheckCheck = (toCkIndex) =>{
  
    let tmp =  this.state.todos.map((el, index)=>{ 
    
      if(index === toCkIndex) {
      console.log('index===toCkIndex conditional')
     
      if(this.state.checkIndex[index]===true){
        return false;}

      return true;
    }

    if(this.state.checkIndex[index] === true) {
      console.log('this.state.checkIndex[index]===true')
      return true;}

    return false;
  })

  console.log('tmp in onCheckCheck ',tmp)
      this.setState({                              ///todos:[elm0,  1,      2  ,   3,     4]
        checkIndex:tmp,
      })
    }
    
    

  onCheck = (props) => {
    console.log('[App.js] onCheck event')

    this.onCheckCheck(parseInt(props.target.value));

    console.log('onCheckCheck inside onCheck, ', this.state.checkIndex)
    this.setState({
      // checkToggle: !this.state.checkToggle,
      // checkIndex: parseInt(props.target.value)
    })
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
    console.log('type of target value: ', typeof event.target.value)

    this.setState({
      currentVal: this.state.todos[parseInt(event.target.value)],
      editMode: true,
      editIndex: parseInt(event.target.value)
    })
  }


  render(){

    console.log('this.output: ', this.theOutput())
    return (
        <div className="main">
        <Navs header={true}></Navs>
        <div className="App">
        <Forms 
        onSubmit = {this.addTask}
        currInput={this.currentInput}
        currVal={this.state.currentVal}
        inputDisplay={this.state.currentVal}/>
        <Lists theList = {this.theOutput()}/>
       
      </div>
        <Navs header={false}></Navs>
        </div>
       
    );
  }
  
}

export default App;
