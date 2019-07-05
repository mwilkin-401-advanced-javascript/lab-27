import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Counter from './components/Counter/Counter';

import './app.scss';

/**
 * The App class which contains all components and renders to the page.
 * Header -> header component
 * Counter -> counter component
 * Footer -> footer component
 */

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
