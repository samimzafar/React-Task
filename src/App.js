import React from 'react'
import "./App.css"
import Navbar from './components/Navbar/Navbar'
import { Provider } from 'react-redux'
import store from './redux/store'
import Events from './components/Event Management/Events'
import Congress from './components/Congress/Congress'
export default function App() {
  return (
      
      <Provider store={store}>
      <Navbar/>
      <Congress/>
      <Events/>
      </Provider>
  

    
  )
}
