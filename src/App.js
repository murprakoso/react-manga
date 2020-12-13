import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Popular from './components/pages/Popular';


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/popular" component={Popular} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
