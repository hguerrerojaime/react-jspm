import React from 'react';

import Button from 'react-jspm/commons/Button';
import InputGroup from 'react-jspm/forms/InputGroup';
import InputGroupAddon from 'react-jspm/forms/InputGroupAddon';
import InputText from 'react-jspm/forms/InputText';

export default class SidebarSearch extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      q:"hOLA"
    };
  }

  render() {
    return (
      <li className="sidebar-search">
        <InputGroup>
           <InputText stateHolder={this} model="q" />
           <InputGroupAddon type="btn">
              <Button icon="fa fa-search"/>
           </InputGroupAddon>
        </InputGroup>
      </li>
    );
  }

}
