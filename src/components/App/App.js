import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {
  constructor() {
    super()

    this.state = {
      current_user: { id: 1 }
    }

    this.setCurrentUser = this.setCurrentUser.bind(this)
  }

  setCurrentUser(user){
    this.setState({current_user: user}
    )
  }

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <div className="App">
            <Header current_user={this.state.current_user} />
            <Main current_user={this.state.current_user} />
            <Footer />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
