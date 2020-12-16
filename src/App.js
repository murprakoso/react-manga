import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import NotFound from './components/NotFound';
import Chapter from './components/pages/Chapter';
import DetailManga from './components/pages/DetailManga';
import Genre from './components/pages/Genre';
import GenreList from './components/pages/GenreList';
import Home from './components/pages/Home';
import Manga from './components/pages/Manga';
import Manhua from './components/pages/Manhua';
import Manhwa from './components/pages/Manhwa';
import Popular from './components/pages/Popular';
import Recommended from './components/pages/Recommended';


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/manga/page/:page" component={Home} />

          <Route path="/popular" component={Popular} />
          <Route path="/genres" exact component={Genre} />
          <Route path="/genres/:slug" component={GenreList} />
          <Route path="/recommended" component={Recommended} />
          <Route path="/chapter/:slug" component={Chapter} />

          <Route path="/detail/:slug" component={DetailManga} />

          {/* List */}
          <Route path="/manga" component={Manga} />
          {/* <Route path="/manga/page/:page" component={Manga} /> */}

          <Route path="/manhua" component={Manhua} />
          <Route path="/manhwa" component={Manhwa} />


          {/*  */}
          {/* <Route component={NotFound} /> */}
          {/* <Route path="/genres/" component={NotFound} /> */}
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
