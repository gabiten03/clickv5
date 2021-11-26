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
import Error from './components/Error';


function App() {
  return (
    <Router >
      <Box >
        <Header />
      </Box>
      <Switch>
        <Route exact path="/">
          <Hero2 />
          <About2 />
          <SidebySide />
        </Route>
        <Route path="*" >
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router >
  );
}

export default App;
