import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import DetailManga from './components/pages/DetailManga';
import Genre from './components/pages/Genre';
import GenreList from './components/pages/GenreList';
import Home from './components/pages/Home';
import Popular from './components/pages/Popular';
import Recommended from './components/pages/Recommended';


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/popular" component={Popular} />
          <Route path="/genres" exact component={Genre} />
          <Route path="/genres/:slug" component={GenreList} />
          <Route path="/recommended" component={Recommended} />

          <Route path="/manga/detail/:endpoint" component={DetailManga} />

          {/*  */}
          <Route component={NotFound} />
          {/* <Route path="/genres/" component={NotFound} /> */}
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
