import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Navigation from './Navigation.js';
import Header from './Header.js';
import Services from './Services.js';

class App extends Component {
  render(){
    return (
      <div>
        <Navigation logoTitle="React Portfoliooooooo"/>
        <Header title="Lydia Keenan" button="find out more"/>
        <Services />
      </div>
      
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
