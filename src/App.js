import React from 'react';
import logo from './logo.svg';
import './App.css';
import './globalcss.scss';

import Header_comp from './header_comp';
import Content_comp from './content_comp';
import Footer_comp from './footer_comp';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header_comp />
        <Content_comp />
        <Footer_comp />
      </div>
    )
  }

}

export default App;
