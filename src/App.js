import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
export class App extends Component {
  render() {
    return (
      <>
      <Router>
      <Navbar/>
      <Routes>
      {/* here we uses key so that our componentDidMount know he have to again load the news items using fetch */}
      <Route exact path="/" element={<News key="home" pageSize={6} country="in" category="general" api="7dcb46a28e1b498d86bdac6e6f774d32"/>}></Route>
      <Route exact  path="/business"  element={<News key="business" pageSize={6} country="in" category="business" api="7dcb46a28e1b498d86bdac6e6f774d32" />}/>
      <Route exact path="/entertainment"  element={<News key="entertainment" pageSize={6} country="in" category="entertainment" api="7dcb46a28e1b498d86bdac6e6f774d32" />}/>
      <Route exact path="/generalhealth"   element={<News key="generalhealth" pageSize={6} country="in" category="generalhealth" api="7dcb46a28e1b498d86bdac6e6f774d32" />}/>
      <Route exact path="/science"    element={<News key="science" pageSize={6} country="in" category="science" api="7dcb46a28e1b498d86bdac6e6f774d32" />}/>    
      <Route exact path="/technology"  element={<News key="technology"  pageSize={6} country="in" category="technology" api="7dcb46a28e1b498d86bdac6e6f774d32" />}/>
      <Route eaxct path="/sports"   element={<News key="sports" pageSize={6} country="in" category="sports" api="7dcb46a28e1b498d86bdac6e6f774d32" />}/>
      </Routes>
      </Router>
      
      </>
    )
  }
}

export default App

