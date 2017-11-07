import React from 'react'; // подключение React
import ReactDOM from 'react-dom'; // подключение React-dom для построение dom-дерева
import Header from './Header'; //заголовок
import Content from './Content'; //контент


import './index.css'; // стили
import injectTapEventPlugin from 'react-tap-event-plugin'; // плагин для моб устройств onclik->ontoch
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';// material-ui


injectTapEventPlugin(); // подключение, применение плагина

ReactDOM.render( 

 <MuiThemeProvider> 
    <Header />   
    <Content />  
   

 </MuiThemeProvider>  

,document.getElementById('root') 
);
