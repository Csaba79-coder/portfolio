import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from "./components/main";
import { Link } from "react-router-dom";

function App() {
  return (
      <div className="demo-big-content">
          <Layout>
              <Header className='header-color' title={<Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Csaba79-coder</Link>} scroll>
                  <Navigation>
                      <Link to="/about-me">About Me</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title={<Link to="/" style={{ color: 'grey', textDecoration: 'none' }}>Csaba79-coder</Link>}>
                  <Navigation>
                      <Link to="/about-me">About Me</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main />
              </Content>
          </Layout>
      </div>
  );
}

export default App;
