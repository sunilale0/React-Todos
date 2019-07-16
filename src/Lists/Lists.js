import React from 'react';
import List from './List/List';


const lists = (props) => {

    let output = props.theList;

    return (
        <div>
            <List />
            {output}
        </div>
        
    )
}


export default lists;