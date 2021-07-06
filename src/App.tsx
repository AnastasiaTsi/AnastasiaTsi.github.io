import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Tools from "./pages/Tools";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}>
            <Navbar AppBarColor="transparent" />
            <Home />
          </Route>

          <Route path="/about" exact component={About}>
            <Navbar AppBarColor="#202123" />
            <About />
          </Route>

          <Route path="/tools" exact component={Tools}>
            <Navbar AppBarColor="#202123" />
            <Tools />
          </Route>

          <Route path="/pets" exact component={Tools}>
            <Navbar AppBarColor="#202123" />
            <Tools />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
