import React from 'react';

import Button from 'react-jspm/commons/Button';
import Panel from 'react-jspm/commons/Panel';
import InputGroup from 'react-jspm/commons/InputGroup';
import InputGroupAddon from 'react-jspm/commons/InputGroupAddon';
import InputText from 'react-jspm/commons/InputText';

export default class AppBody extends React.Component {
  render() {
    return (
      <div>
        <Panel title="Dashboard" brand="primary">
          <InputGroup>
             <InputText />
             <InputGroupAddon type="btn">
                <Button icon="fa fa-search" />
             </InputGroupAddon>
          </InputGroup>
        </Panel>
      </div>
    );
  }
}
