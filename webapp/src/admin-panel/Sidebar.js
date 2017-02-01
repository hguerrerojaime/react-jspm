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
                 <MenuItem className="menu-item" href="javascript:void(0);">
                    Dashboard
                 </MenuItem>
                 <MenuItem className="menu-item" href="javascript:void(0);">
                    Forms
                 </MenuItem>
                 <MenuItem className="menu-item" href="javascript:void(0);">
                    UI Elements
                 </MenuItem>
                 <MenuItem className="menu-item" href="javascript:void(0);">
                    XYZ
                 </MenuItem>
              </ul>
          </div>
      </div>
    );
  }
}
