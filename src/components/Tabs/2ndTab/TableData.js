import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root:{
        flex:3,
        '& table':{
            borderCollapse: 'collapse',
            width: '100%'
        },
        '& th':{
            textAlign: 'left',
            padding: 8,
            backgroundColor: '#f2f2f2',
          },
        '& td':{
            textAlign: 'left',
            padding: 8
        },

        '& tr:nth-child(odd)':{
            backgroundColor: '#f2f2f2'
        },


    }
})

export default function TableData() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <table>
                <tr>
                    <th>Category</th>
                    <th>Registered by 10/7/2020</th>
                    <th>Late Registration after 10/7/2020</th>
                </tr>
                <tr>
                    <td>Member</td>
                    <td>425$</td>
                    <td>475$</td>
                </tr>
                <tr>
                    <td>Non Member</td>
                    <td>475$</td>
                    <td>475$</td>
                </tr>
                <tr>
                    <td>Member in Training</td>
                    <td>475$</td>
                    <td>475$</td>
                </tr>
                <tr>
                    <td>Member Residence</td>
                    <td>475$</td>
                    <td>475$</td>
                </tr>
                <tr>
                    <td>No Member Residence</td>
                    <td>475$</td>
                    <td>475$</td>
                </tr>
            </table>
        </div>
    )
}