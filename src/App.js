import LogIn from './pages/LogIn';
import Register from './pages/Register';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path ="/">
            <LogIn />
          </Route>
          <Route path ="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
