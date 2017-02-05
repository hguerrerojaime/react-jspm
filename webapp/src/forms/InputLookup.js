import React from 'react';

import Button from 'react-jspm/commons/Button';
import InputGroup from './InputGroup';
import Bindable from './Bindable';
import InputGroupAddon from './InputGroupAddon';
import InputText from './InputText';
import Modal from 'react-jspm/commons/Modal';
import Well from 'react-jspm/commons/Well';
import DivRow from 'react-jspm/commons/DivRow';
import DivCol from 'react-jspm/commons/DivCol';
import Injector from 'react-jspm/ioc/Injector';
import update from 'react-addons-update';


export default class InputLookup extends Bindable {

  constructor(props) {
    super(props);


    this.state = {
      selectItem: {
        id: this.binder.value.id,
        key: this.binder.value.key,
        value: this.binder.value.value,
      }
    };

    this.showLookupModal = this.showLookupModal.bind(this);
    this.service = Injector.get(this.props.lookupService);

  }

  render() {
    return (
      <div>
        <InputGroup>
           <InputText
              stateHolder={this}
              model="selectItem.key"
           />
           <InputGroupAddon type="btn">
              <Button icon="fa fa-search" brand="info" onClick={this.showLookupModal} />
           </InputGroupAddon>

        </InputGroup>
        <LookupModal parent={this} ref={(lookupModal) => this.lookupModal = lookupModal}/>
      </div>
    );
  }

  showLookupModal() {
    console.log(this.state);
    this.lookupModal.show();
  }


}

InputLookup.defaultProps = Object.merge(Bindable.defaultProps,{});

InputLookup.propTypes = Object.merge(Bindable.propTypes,{
    lookupService: React.PropTypes.string.isRequired
});

class LookupModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
       loading:false,
       resultList: []
    };

  }

  render() {
    return (
      <Modal ref={(modal) => this.modal = modal}>
         <p className="clearfix">
           <InputText
               stateHolder={this}
               model="search"
               placeholder="Search..."
           />
         </p>
         <hr/>
         <div className="clearfix">
             { this.getResultsBody() }
         </div>
        </Modal>

    );
  }

  show() {
     this.modal.show();
     this.lookupList();
  }

  close() {
    this.modal.close();
  }

  lookupList() {

      this.setState({ loading:true });

      this.props.parent.service.lookupList().then((resultList) => {
         this.setState({
           resultList: resultList,
           loading: false
         });

      });

  }

  getResultsBody() {

      if(this.state.loading) {
         return this.renderWell("Loading...");
      } else if (!this.state.loading && this.state.resultList.length == 0) {
         return this.renderWell("No results found");
      } else {
         return this.renderResultTable();
      }
  }

  renderWell(message) {
    return <Well size="sm"> { message } </Well>;
  }

  renderResultTable() {
    let rows = [];

    for (let item of this.state.resultList) {
       rows.push(this.renderResultRow(item));
    }

    return (
        <table className="table table-condensed table-striped lookup-table">
        <thead>
          <tr>
            <th style={{width:"20%"}}>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
            { rows }
        </tbody>
      </table>
    );
  }

  renderResultRow(item) {
    return (
      <tr key={item.id} onClick={(evt) => { this.selectItem(item); } }>
        <td>{item.key}</td>
        <td>{item.value}</td>
      </tr>
    );
  }

  selectItem(item) {
      let parentComponent = this.props.parent;
      this.modal.close();
      parentComponent.binder.requestChange(item);
      console.log(parentComponent.binder);
  }
}
