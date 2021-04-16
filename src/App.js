import LogIn from './pages/LogIn';
import Register from './pages/Register';
import Users from './pages/Users';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

function App() {
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path ="/">
              <LogIn />
            </Route>
            <Route path ="/register">
              <Register />
            </Route>
            <Route path ="/users">
              <Users />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
