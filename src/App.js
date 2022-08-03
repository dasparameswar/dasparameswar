import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Prescription from "./Components/Prescription";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/Prescription" component={Prescription} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
