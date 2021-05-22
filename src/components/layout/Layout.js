import React from 'react';

import Aux from '../../hoc/Aux';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

 class Layout extends React.Component{

    state = {
        showSideDrawer : true
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {return {showSideDrawer : !prevState.showSideDrawer}})
    }

     render(){
         return(
            <Aux>
            <Toolbar  opened={this.sideDrawerToggleHandler}/>
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerToggleHandler} />
            <main className='Content'>
                {this.props.children}
            </main>
        </Aux> 
         )
     }
 };

export default Layout;