import './App.css';

import Header from './components/Header';

import Hero2 from './components/Hero2';

import { Box } from '@chakra-ui/layout';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import About2 from './components/About2';
import Footer from './components/Footer';
import SidebySide from './components/SidebySide';
import Pricing from './components/Pricing';

function App() {
  return (
    <Router >
      <Box >
        <Header > </Header>
        <Hero2 />
      </Box>
      <About2 />
      <Pricing />
      <SidebySide />
      <Footer />

      <Switch>
        <Route path="/Contacto">
        </Route>
        <Route path="/Portfolio">
        </Route>
        <Route exact path="/">
        </Route>
      </Switch>

    </Router >
  );
}

export default App;
