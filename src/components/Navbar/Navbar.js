import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { MenuItem } from "./MenuItem";
import logo from '../img/logo.png';
import Scrollspy from 'react-scrollspy'
const useStyles = makeStyles({
    navBar: {
        zIndex: 2,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'fixed',
        height: 100,
        top: 0,
        '@media screen and (min-width: 350px) and (max-width: 529px)': {
            height: 70,

        }

    },
    navData: {
        backgroundColor: props => props.backgroundColor,
        transition: '0.3s ease-in-out',
        width: '100%',
        padding: '20px 100px',
        display: 'flex',
        alignItems: 'center',
        '@media screen and (min-width: 350px) and (max-width:529)': {


        }

    },
    imageClass: {
        display: 'flex',
        flex: 1,
        '@media screen and (min-width: 350px) and (max-width: 529px)': {
            justifyContent: 'flex-start',
            flex: 1,
        },
        '& img': {
            width: '70%',
            height: 50,
        },
        '& img:hover': {
            cursor: 'pointer'
        }
    },
    navUL: {
        display: 'flex',
        alignItems: 'center',
        flex: 5,
        '@media screen and (min-width: 350px) and (max-width: 529px)': {

            position: 'fixed',
            display: 'block',
            width: '100%',
            height: '125vh',
            padding: 0,
            top: 65,
            left: '-100%',
            textAlign: 'center',
            backgroundColor: '#23263A',
            transition: 'all .8s'
        },
        '@media screen and (min-width: 530px) and (max-width: 768px)': {
            position: 'fixed',
            display: 'block',
            width: '100%',
            height: '100vh',
            padding: 0,
            top: 100,
            left: '-100%',
            textAlign: 'center',
            backgroundColor: '#23263A',
            transition: 'all .8s'
        },
        '& li': {
            listStyle: 'none',

            '@media screen and (max-width: 768px)': {

            }
        },
        '& a': {
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textDecoration: 'none',
            fontFamily: 'monospace',
            borderRadius: 10,
            padding: 7,
            transition: '.5s ease-out',
            '@media screen and (max-width: 768px)': {
                display: 'block',
                padding: 15,
                fontSize: 20
            }
        },
        '& a:hover': {
            cursor: 'pointer',
            color:'#f2ff18',
            // backgroundColor: '#119a94',
            borderRadius: 10,

        }
    },
    navIcon: {
        '& i': {
            color: 'white',
            fontSize: 35,
            display: 'block',
            cursor: 'pointer',
        },

        '@media screen and (max-width: 768px)': {

            '& i': {
                display: 'block',
                cursor: 'pointer',
                
            }
        },
    },
    scrollUL: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        '@media screen and (max-width: 768px)': {
            flexDirection: 'column',
            height: '70vh',
            justifyContent: 'space-around',
        }
    },
    scrollActive: {
        backgroundColor: '#bf8218',
        borderRadius: 10,
        display: 'flex',
        transition: '.5s ease-out'
    }
});
export default function Navbar() {
    let leftStyle = { left: 0 };
    const [navbarColor, setNavbarColor] = useState(false)


    const [navLink, setNavLink] = useState(false)
    const NavLinkListener = () => {
        if (window.scrollY === 540) {
            setNavLink(true)
        }
        else { }
    }

    window.addEventListener('scroll', NavLinkListener)

    const navChangeColor = () => {

        if (window.scrollY <= 100) {
            setNavbarColor(true)
        }
        else {
            setNavbarColor(false)
        }
    }

    window.addEventListener('scroll', navChangeColor)

    const props = { backgroundColor: navbarColor ? 'rgb(24 15 106)' : 'black', }

    const classes = useStyles(props);

    const [Clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!Clicked)
    }


    return (
        <>

            <div className={classes.navBar} id='navbar'>
                <div className={classes.navData}>
                    <div className={classes.imageClass}>
                        <img src={logo} alt='pic' />
                    </div>

                    <ul className={classes.navUL} style={Clicked ? leftStyle : { left: '-100%' }}>
                        <Scrollspy items={['congress', ]}
                            currentClassName={classes.scrollActive} className={classes.scrollUL}>

                            {MenuItem.map((val) => {
                                return (
                                    <a href={val.path} onClick={handleClick}>{val.title}</a>
                                )
                            })}
                        </Scrollspy>
                    </ul>

                    <div className={classes.navIcon}>
                        <i className= {'fas fa-bars'} onClick={handleClick} />
                    </div>
                </div>
            </div>

        </>
    )
}