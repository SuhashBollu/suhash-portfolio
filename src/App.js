import './App.css';
import Layout from './components/Layout/Layout';
import Home from './components/Home';
import Background from './components/Background';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="DarkLayer">
        <Layout>
        <Route path="/projects" component={Projects} />
          <Route path="/background" component={Background} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
          <Route path="/" exact component={Home} />
          {/* <Home /> */}
        </Layout>
      </div>
    </div>
  );
}

export default App;
