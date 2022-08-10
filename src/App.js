import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from './components/About';
export class App extends Component {
  render() {
    return (
      <>
      <Router>
      <Navbar/>
      <Routes>
      {/* here we uses key so that our componentDidMount know he have to again load the news items using fetch here we have passed the props in the News components*/}
      <Route exact path="/" element={<News key="home" pageSize={6} country="in" category="general" color="danger"api="a7f39572ab62427abff85470c35246d1"/>}></Route>
      <Route exact path="/about" element={<About/>}></Route>
      <Route exact  path="/business"  element={<News key="business" pageSize={6} country="in" category="business" color="primary" api="a7f39572ab62427abff85470c35246d1" />}/>
      <Route exact path="/entertainment"  element={<News key="entertainment" pageSize={6} country="in" category="entertainment" color="secondary"api="a7f39572ab62427abff85470c35246d1" />}/>
      <Route exact path="/generalhealth"   element={<News key="generalhealth" pageSize={6} country="in" category="generalhealth" color="success" api="a7f39572ab62427abff85470c35246d1" />}/>
      <Route exact path="/science"    element={<News key="science" pageSize={6} country="in" category="science" color="warning" api="a7f39572ab62427abff85470c35246d1" />}/>    
      <Route exact path="/technology"  element={<News key="technology"  pageSize={6} country="in" category="technology" color="info" api="a7f39572ab62427abff85470c35246d1" />}/>
      <Route eaxct path="/sports"   element={<News key="sports" pageSize={6} country="in" category="sports" color="success" api="a7f39572ab62427abff85470c35246d1" />}/>
      </Routes>
      </Router>
      
      </>
    )
  }
}

export default App

