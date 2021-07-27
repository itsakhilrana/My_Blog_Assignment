import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Navbarr from './components/Navbarr'
import HomeScreen from './screens/HomeScreen';
import MyblogScreen from './screens/MyblogScreen';
import WriteblogScreen from './screens/WriteblogScreen';
import ReadblogScreen from './screens/ReadblogScreen';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbarr></Navbarr>
    

      <Switch>
              <Route exact path="/" component={HomeScreen}></Route>

              <Route path="/myblogs" component={MyblogScreen}></Route>
              <Route path="/writeblogs" component={WriteblogScreen}></Route>
              <Route path="/:id" component={ReadblogScreen}></Route>
              
              
            </Switch>
    </div>
    </Router>
  );
}

export default App;
