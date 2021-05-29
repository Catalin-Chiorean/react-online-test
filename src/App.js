import Login from './pages/Login';
import Register from './pages/Register';
import Start from './pages/Start';
import QuizPage from './pages/QuizPage';
import LeaderBoard from './pages/LeaderBoard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './helpers/PrivateRoute';
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
            <Route exact component={Login} path="/login" />
            <Route exact component={Register} path="/register" />
            <PrivateRoute exact component={Start} path="/" />
            <PrivateRoute exact component={QuizPage} path="/quiz" />
            <PrivateRoute exact component={LeaderBoard} path="/top" />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
