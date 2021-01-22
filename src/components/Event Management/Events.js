import React from 'react'
import Conference from '../Tabs/1stTab/Conference'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './styles.css';
import { makeStyles } from '@material-ui/core/styles';
import Registration from '../Tabs/2ndTab/Registration';
import TravelInformation from '../Tabs/3rdTab/TravelInformation';
const useStyles = makeStyles({
    container: {
        width: '100%',
        height: '100vh',
    },



})
export default function Events() {

    const classes = useStyles()
    return (

        <div className={classes.container} id="events">

            <Tabs>
                <TabList>

                    <Tab>Conference Overview</Tab>
                    <Tab>Registration</Tab>
                    <Tab>Travel Information</Tab>

                </TabList>

                <TabPanel>
                    <Conference />
                </TabPanel>


                <TabPanel>
                    <Registration />
                </TabPanel>

                <TabPanel>
                     <TravelInformation/>
                </TabPanel>
            </Tabs>

        </div>
    )
}