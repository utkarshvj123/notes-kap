import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import SingleView from "./pages/SingleView";
import Add from "./pages/Add/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact={true} path="/home" component={Home} />
          <Route exact={true} path="/detail/:id" component={SingleView} />
          <Route exact={true} path="/add" component={Add} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
