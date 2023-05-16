import React, { FC } from 'react';
import Home from './pages/index';
import AboutPage from './pages/about';
import Header from './components/common/Header/header';
import Footer from './components/common/Footer/footer';

const App: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <AboutPage />
      </main>
      <Footer />
    </>
  );
};

export default App;
