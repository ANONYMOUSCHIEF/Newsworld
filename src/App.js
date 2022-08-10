import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from './components/About';
export class App extends Component {
  api="ce622bfaa1784cd9868ed1bfe8738658"
  pageSize=6
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <>
      <Router>
      <LoadingBar
        color='black'
        height={3}
        progress={this.state.progress}
        >
      </LoadingBar>
      <Navbar/>
      
      <Routes>
      {/* here we uses key so that our componentDidMount know he have to again load the news items using fetch here we have passed the props in the News  components*/}
      <Route exact path="/" element={<News setProgress={this.setProgress} key="home" pageSize={this.pageSize} country="in" category="general" color="danger"api={this.api}/>}></Route>
      <Route exact path="/about" element={<About/>}></Route>
      <Route exact  path="/business"  element={<News  setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business" color="primary" api={this.api} />}/>
      <Route exact path="/entertainment"  element={<News  setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" color="secondary"api={this.api} />}/>
      <Route exact path="/generalhealth"   element={<News  setProgress={this.setProgress} key="generalhealth" pageSize={this.pageSize} country="in" category="generalhealth" color="success" api={this.api} />}/>
      <Route exact path="/science"    element={<News  setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science" color="warning" api={this.api} />}/>    
      <Route exact path="/technology"  element={<News  setProgress={this.setProgress} key="technology"  pageSize={this.pageSize} country="in" category="technology" color="info" api={this.api} />}/>
      <Route eaxct path="/sports"   element={<News  setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports" color="success" api={this.api} />}/>
      </Routes>
      </Router>
      
      </>
    )
  }
}

export default App

