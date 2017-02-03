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
    this.openModal = this.openModal.bind(this);
    this.lookupList = this.lookupList.bind(this);
    this.state = {
      search: null,
      resultList: [],
      key:null,
      loading: false
    }

    this.service = Injector.get(this.props.lookupService);

  }

  render() {
    return (
      <InputGroup>
         <InputText
            stateHolder={this}
            model="key"
            blur={ (evt) => console.log(evt) }
         />
         <InputGroupAddon type="btn">
            <Button icon="fa fa-search" brand="info" click={this.openModal} />
         </InputGroupAddon>
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
      </InputGroup>
    );
  }


  openModal(evt) {
     this.modal.show();
     this.lookupList();

  }

  lookupList(evt,value) {

      this.setState({ loading:true });

      this.service.lookupList().then((resultList) => {
         this.setState({
           resultList: resultList,
           loading: false
         });

      });



  }

  getResultsBody() {

      if(this.state.loading) {
         return <Well size="sm"> Loading... </Well>;
      } else if (!this.state.loading && this.state.resultList.length == 0) {
         return <Well size="sm"> No Records Found </Well>;
      } else {
          let rows = [];

          for (let item of this.state.resultList) {
             rows.push((
               <tr key={item.id} onClick={() => this.selectItem(item) }>
                 <td>{item.key}</td>
                 <td>{item.value}</td>
               </tr>
             ));
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
  }

  selectItem(item) {

      this.setState({ key: item.key });
      this.modal.close();
      console.log(item.key);
      console.log(this.state);

  }

}

InputLookup.defaultProps = Object.merge(Bindable.defaultProps,{

});

InputLookup.propTypes = Object.merge(Bindable.propTypes,{
    lookupService: React.PropTypes.string.isRequired
});
