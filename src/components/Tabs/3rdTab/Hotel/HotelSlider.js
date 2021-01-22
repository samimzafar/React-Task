import React from 'react'
import Carousel from "react-elastic-carousel";
import { HotelData } from './HotelData';
import './index.css';
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
    },

    secondRow: {
        backgroundColor: '#052033',
        padding: '2%',
        display: 'flex'
    },

    Card: {
        width: '100%',
        height: '20vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 10,
        textAlign: '-webkit-center',


        '& p': {
            fontSize: '1rem',
            color: 'white',
            backgroundColor:'#070741',
            width:'100%'

        },

        '& img':{
            width:'100%',
            height:'15vh'
        }

    },
})
export default function HotelSlider() {
    const classes = useStyles()
    return (
        <div>
            <Carousel itemsToShow={3}

                className={classes.sliderCard}
                easing="cubic-bezier(1,.15,.55,1.54)"
                tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
                transitionMs={700}
            >
                {HotelData.map((val, i) => {
                    return (

                        <div className={classes.Card}>
                            <img src={val.image}/>
                            <p>{val.desc}</p>
                        </div>

                    )
                })}
            </Carousel>
        </div>
    )
}
