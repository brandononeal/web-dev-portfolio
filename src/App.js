import "./styles/index.css";
import "antd/dist/antd.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/home" component={Home} />
        <Route path="/" component={Intro} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
