import React from 'react';
import{BrowserRouter as Router,Route} from 'react-router-dom'
import './assets/css/common.css'
import Home from './components/Home'
import News from './components/News'
import Demo1 from './components/create-demo/Demo1'
import Demo2 from './components/create-demo/Demo2'
import Demo3 from './components/create-demo/Demo3'
import Demo4 from './components/create-demo/Demo4'


function App() {
  return (
    <Router>
      <div>
        
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/news" component={News}></Route>
        <Route exact path="/demo1" component={Demo1}></Route>
        <Route exact path="/demo2" component={Demo2}></Route>
        <Route exact path="/demo3" component={Demo3}></Route>
        <Route exact path="/demo4" component={Demo4}></Route>
      </div>
    </Router>
  );
}

export default App;
