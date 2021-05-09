import Home from '../src/views/index';
import SignUp from '../src/views/SignUp';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component= {Home} />
          <Route exact path='/SignUp' component= {SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
