import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Main from './Main'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
