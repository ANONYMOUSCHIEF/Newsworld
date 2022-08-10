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
        // onLoaderFinished={() => setProgress(0)}
        >
      </LoadingBar>
      <Navbar/>
      
      <Routes>
      {/* here we uses key so that our componentDidMount know he have to again load the news items using fetch here we have passed the props in the News  components*/}
      <Route exact path="/" element={<News setProgress={this.setProgress} key="home" pageSize={6} country="in" category="general" color="danger"api="ce622bfaa1784cd9868ed1bfe8738658"/>}></Route>
      <Route exact path="/about" element={<About/>}></Route>
      <Route exact  path="/business"  element={<News  setProgress={this.setProgress} key="business" pageSize={6} country="in" category="business" color="primary" api="ce622bfaa1784cd9868ed1bfe8738658" />}/>
      <Route exact path="/entertainment"  element={<News  setProgress={this.setProgress} key="entertainment" pageSize={6} country="in" category="entertainment" color="secondary"api="ce622bfaa1784cd9868ed1bfe8738658" />}/>
      <Route exact path="/generalhealth"   element={<News  setProgress={this.setProgress} key="generalhealth" pageSize={6} country="in" category="generalhealth" color="success" api="ce622bfaa1784cd9868ed1bfe8738658" />}/>
      <Route exact path="/science"    element={<News  setProgress={this.setProgress} key="science" pageSize={6} country="in" category="science" color="warning" api="ce622bfaa1784cd9868ed1bfe8738658" />}/>    
      <Route exact path="/technology"  element={<News  setProgress={this.setProgress} key="technology"  pageSize={6} country="in" category="technology" color="info" api="ce622bfaa1784cd9868ed1bfe8738658" />}/>
      <Route eaxct path="/sports"   element={<News  setProgress={this.setProgress} key="sports" pageSize={6} country="in" category="sports" color="success" api="ce622bfaa1784cd9868ed1bfe8738658" />}/>
      </Routes>
      </Router>
      
      </>
    )
  }
}

export default App

