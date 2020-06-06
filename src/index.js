import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Header} from './header';

class App extends React.Component {
  render() {
    return (
      <Header/>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
