import React from 'react';

import Button from 'react-jspm/commons/Button';
import InputGroup from 'react-jspm/commons/InputGroup';
import InputGroupAddon from 'react-jspm/commons/InputGroupAddon';
import InputText from 'react-jspm/commons/InputText';

export default class SidebarSearch extends React.Component {

  render() {
    return (
      <li className="sidebar-search">
        <InputGroup>
           <InputText />
           <InputGroupAddon type="btn">
              <Button icon="fa fa-search"/>
           </InputGroupAddon>
        </InputGroup>
      </li>
    );
  }

}
