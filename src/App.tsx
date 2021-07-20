import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Tools from "./pages/Tools";
import Pets from "./pages/Pets";
import colors from "./style/colors";

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
            <Navbar AppBarColor={colors.black} />
            <About />
          </Route>

          <Route path="/tools" exact component={Tools}>
            <Navbar AppBarColor={colors.black} />
            <Tools />
          </Route>

          <Route path="/pets" exact component={Pets}>
            <Navbar AppBarColor="transparent" />
            <Pets />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
