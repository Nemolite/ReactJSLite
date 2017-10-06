import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App1 from './app1';
import App2 from './app2';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


injectTapEventPlugin();

ReactDOM.render( 

 <MuiThemeProvider>
    <App />
	<App1 />
	<App2 />
  </MuiThemeProvider>


,document.getElementById('root')
);
