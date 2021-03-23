import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <div className="app-container">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:slug" component={Home} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
