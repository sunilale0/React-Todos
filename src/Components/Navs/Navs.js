import React from 'react';
import Header from './NavComps/header';
import Footer from './NavComps/footer';

const navs = ({header}) => {

    const style = {
        backgroundColor: '#0000ee',
        color: 'white',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        textTransform: 'uppercase'
    }
    
    return(
        (header)?
        <Header style={style}/>
        : 
        <Footer style={style}/>
    )
}

export default navs