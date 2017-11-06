import React from 'react';
import AppBar from 'material-ui/AppBar';
export const lightBlue500 = '#03a9f4';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class DrawerSimpleExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

handleToggle = () => this.setState({open: !this.state.open});
 
}

const styles = {
  title: {
    cursor: 'pointer',
  },
  
  AppBar: {
    backgroundColor:lightBlue500,
  },
};

let ret = new DrawerSimpleExample;


const AppBarExampleIcon = () => (
  <div class="AppBar">
     <AppBar style={styles.AppBar} title={<span style={styles.title}>VANDRAREN</span>} onLeftIconButtonTouchTap ={ret.state.open} >
         <RaisedButton label="Toggle Drawer" onClick={ret.handleToggle}/>
    </AppBar>  
      </div>
);

export default AppBarExampleIcon;











  





