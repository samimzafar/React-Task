import React from 'react'
import HotelSlider from './Hotel/HotelSlider';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        height: '90vh',
        justifyContent: 'space-around',
        '&p': {
            fontFamily: 'sans-serif'
        }
    }
})

export default function TravelInformation() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.rootTop}>
                <h3>Venue: Pennsylvania Convention Center</h3>
                <p>Address: 1101 Arch St, Philadelphia, PA 19107, United States</p>
            </div>
            <div className={classes.rootMiddle}>
            <HotelSlider/>
            </div>
            <div className={classes.rootBottom}>
            <h3>Venue: Pennsylvania Convention Center</h3>
            <p>
                I am a paragraph. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
                cites of the word in classical literature, discovered the undoubtable source.
            </p>
            <p>
                I am a paragraph. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
                cites of the word in classical literature, discovered the undoubtable source.
            </p>
            </div>

        </div>
    )
}
