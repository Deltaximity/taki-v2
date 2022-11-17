import { Component } from 'react';
import './main.css';
import Menu from './tabs/Menu';
import Header from './tabs/Header';
import Main from './tabs/Main';
import Footer from './tabs/Footer';

class App extends Component {
  render() {
    return (
      <>
        <Menu />
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

export default App;