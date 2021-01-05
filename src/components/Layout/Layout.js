import React, { Component } from 'react';
// import Auxi from '../../hoc/Auxi';
import './Layout.css';
import Toolbar from './Navigation/Toolbar/Toolbar';
import SideDrawer from './Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerOpenHandler = () => {
        this.setState({showSideDrawer: true});
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState)=>{
            return {
                showSideDrawer: !this.state.showSideDrawer
            }
        });
    }

    render() {
        return (
                <div class="body">
                    <Toolbar drawerClicked={this.sideDrawerOpenHandler}/>
                    <SideDrawer open={this.state.showSideDrawer} closed = {this.sideDrawerClosedHandler}/>
                    <main className="Content">
                        <div>
                            {this.props.children}
                        </div>       
                    </main>
                    <footer className="footer"><p>&copy; COPYRIGHT 2020. SUHASH BOLLU. ALL RIGHTS RESERVED.</p></footer>
                    
                </div>
        );
    }
};

export default Layout;