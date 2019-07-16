import React from 'react';


const forms = (props) =>{
    

    return(
        <form onSubmit={props.onSubmit}>
            <p>To Add => {props.inputDisplay}</p>
            <input 
            type = ''
            placeholder='I have to do this or that'
            onChange={props.currInput}
            value={props.currVal}/>
            <button type='submit'>Add Task</button> 
            
        </form>
    )
}


export default forms;