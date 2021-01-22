import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import bkg from '../img/back.png';
const useStyles=makeStyles({
    secBg:{
        width:'100%',
        height:'100vh',
        backgroundSize: 'cover',
        overflow: 'hidden',
        backgroundPosition: 'center',
        backgroundImage: `url(${bkg})`,

    },
    conTent:{
        position: 'absolute',
        top: '53%',
        left: '35%',
        color:'#fbfcfd',
        transform: 'translateY(-50%)',

        '& h1':{
                fontSize: '5rem',
                lineHeight: '5rem',
            
  
            },


         '& h2':{

            fontFamily: 'serif',
            lineHeight: '2rem',
            textAlign:'center',

            
         },

         
    },
         
  
 
})
    export default function Congress() {


    const classes=useStyles();
    

    return (

        <div className={classes.secBg} id='congress' >

            <div className={classes.conTent}>
            <h1>ID WEEK 2020</h1>
            <h2>21 - 25 OCTOBER</h2>
            <h2>Philadelphia, Pennsylvania, USA</h2>
            </div>

           

        </div>
    )
}
