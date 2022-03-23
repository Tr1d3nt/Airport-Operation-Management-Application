

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import NotFound from './NotFound';


function App() {
  return (
    <div className="App">

      <Router>
        <div className="App">
          {/*The NavBar (NavBar.js)*/}
          <NavBar />
          {/*Content div*/}
          <div className="content">
            <Switch>
              <Route exact path="/"> {/*Directs to homepage without any login (Landing page)*/}
                <Home />
              </Route>
              {/*Add next route here*/}
              <Route path="*">  {/*Directs to not found page*/}
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>


    </div>
  );
}

export default App;
