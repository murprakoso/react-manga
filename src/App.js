import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import DetailManga from './components/pages/DetailManga';
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
          <Route path="/manga/detail/:endpoint" component={DetailManga} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
