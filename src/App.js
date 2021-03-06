import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './Container/Dashboard';

import Home from './Container/Home';
function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path={'/'} exact component={Home}/>
            <Route path={'/dashboard'} component={Dashboard}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
