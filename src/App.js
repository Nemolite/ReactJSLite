import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import muiThemeable from 'material-ui/styles/muiThemeable';

import FlatButton from 'material-ui/FlatButton';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


const Main = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <AppBar title="КЛБ Пчелка">
    <div>
    <FlatButton label="Default" />
	<FlatButton label="Default" />
	<FlatButton label="Default" />
	<FlatButton label="Default" />
    
  
  </div>
	</AppBar>
	    

	
	
  </MuiThemeProvider>
);

export default Main;






  





