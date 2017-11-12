import React from 'react';
import AppBar from 'material-ui/AppBar';
export const lightBlue500 = '#03a9f4';




const styles = {
  title: {
    cursor: 'pointer',
  },
  
  AppBar: {
    backgroundColor:lightBlue500,
  },
};



const AppBarExampleIcon = () => (
  <div class="AppBar">
     <AppBar style={styles.AppBar} title={<span style={styles.title}>VANDRAREN</span>} >
        
         
    </AppBar>  
      </div>
);

export default AppBarExampleIcon;











  





