import './App.css';
import Header from './layout/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';

function App() {
  
  
  return (
    <Router>
    
    <>
   <Header/>
   <main>
     
   
   

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      </main>
    </>
  </Router>

   
  );
}

export default App;
