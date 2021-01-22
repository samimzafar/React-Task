import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root:{
        '& p':{
            padding:'3rem',
            textAlign:'center',
            fontSize:'18px',
            fontFamily:'sans-serif'
        }
    }
})
    export default function Conference() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <p>Kick off IDWeek with 24 hours of COVID-19 during Chasing the Sun. This global event will begin on
            Wednesday, Oct. 21 at 9 a.m. ET and conclude on Thursday, Oct. 22 at 9:30 a.m. ET. IDWeek and its partners
            are joining forces with recognized scientific agencies, non-governmental agencies and infectious diseases
            organizations from around the world including the Centers for Disease Control and Prevention (CDC), the
            American Society of Microbiology, Asociación Panamericana de Infectologia, the Chinese Society of Infectious
            Diseases, the European Society of Clinical Microbiology, and the Japanese Association for Infectious Diseases
            each bringing unique global perspectives and data to cover various aspects of COVID-19 including clinical
            presentation, treatments, diagnostics, vaccine development, infection control and mitigation strategies and
                    other late breaking issues. Closed captioning in English will be available for this program.</p>
        </div>
    )
}