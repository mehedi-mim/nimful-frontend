import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import Home from './components/Pages/Home/Home';
import AboutPage from './components/Pages/AboutPage/AboutPage';
function App() {
  return (
    <Router>
      <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutPage} />
      <Footer />
    </Router>
  );
}

export default App;
