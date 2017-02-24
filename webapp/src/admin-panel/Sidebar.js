import React from 'react';
import SidebarSearch from './SidebarSearch';
import MenuItem from 'react-jspm/commons/MenuItem';
import SidebarTitle from './SidebarTitle';

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="navbar-default sidebar" role="navigation">
          <div className="sidebar-nav navbar-collapse">
              <ul className="nav in" id="side-menu">
                 <SidebarSearch />
                 <MenuItem icon="fam fam-house" className="menu-item" href="/">
                    Home
                 </MenuItem>
                 <MenuItem icon="fam fam-application-form" className="menu-item" href="invoice">
                    Forms
                 </MenuItem>
              </ul>
          </div>
      </div>
    );
  }
}
