import Home from '../src/views/index';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' component= {Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
