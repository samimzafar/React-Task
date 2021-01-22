import React from 'react'
import TableData from './TableData';
import { makeStyles } from '@material-ui/core/styles';
import ParaGraphData from './ParaGraphData';
const useStyles = makeStyles({
    root:{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        height: '90vh',
        justifyContent: 'space-around',
        '& li':{
            flex:1
        }
    }
})

export default function Registration() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <TableData/>
            <li> Note: Registration fee excluding VAT</li>
            <ParaGraphData/>

        </div>
    )
}
