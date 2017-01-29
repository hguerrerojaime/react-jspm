import React from 'react';

export default class Sidebar extends React.Component {
  render() {
    return (
      <div id="sidebar" className="sidebar-fixed">
  			<div id="sidebar-content">
  				<form className="sidebar-search">
  					<div className="input-box">
  						<button type="submit" className="submit">
  							<i className="fa fa-search"></i>
  						</button>
  						<span>
  							<input type="text" placeholder="Search..." />
  						</span>
  					</div>
  				</form>
          <ul id="nav">
  					<li>
  						<a href="index.html">
  							<i className="icon-dashboard"></i>
  							Dashboard
  						</a>
  					</li>
          </ul>
          <div className="sidebar-title">
  					<span>Notifications</span>
  				</div>
          <ul className="notifications">
            <li>
             <div className="col-left">
               <span className="label label-success"><i className="icon-plus"></i></span>
             </div>
             <div className="col-right with-margin">
                   <span className="message"><strong>User</strong> account was just created</span>
                   <span className="time">4 hours ago</span>
             </div>
            </li>
          </ul>
        </div>
        <div id="divider" className="resizeable"></div>
      </div>
    );
  }
}
