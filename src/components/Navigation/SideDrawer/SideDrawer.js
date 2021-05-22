 import React from 'react';

 import Logo from '../../Logo/Logo';
 import NavigationItems from '../NavigationItems/NavigationItems';
 import './SideDrawer.css';
 import Aux from '../../../hoc/Aux';
 import Backdrop from '../../UI/Backdrop/Backdrop';

 const sideDrawer = (props) => {
    let attchedClasses = ['SideDrawer', 'Close'];
    if(props.open){
        attchedClasses = ['SideDrawer', 'Open']
    }
     return(
         <Aux>
             <Backdrop show={props.open} clicked={props.closed}/>
             <div className={attchedClasses.join(' ')}>
                <div className='Log'>
                    <Logo />
                </div>
                
                <nav>
                    <NavigationItems />
                </nav>
            </div>
         </Aux>
             
     );
 };

 export default sideDrawer;