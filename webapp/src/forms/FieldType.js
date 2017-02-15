import React from 'react';
import Constants from 'react-jspm/commons/Constants';
import { Enum } from 'enumify';
import InputText from './InputText';
import InputLookup from './InputLookup';
import InputSelect from './InputSelect';
import InputDetail from './InputDetail';

export default class FieldType extends Enum {}

function enumBody(defaultProps = {}, componentBuilder = (props)=>{}) {
  return {
    defaultProps: defaultProps,
    buildComponent: (props) => {
      return componentBuilder(Object.merge(defaultProps,props));
    }
  }
}

FieldType.initEnum({
  TEXT: enumBody({
    case: null
  },(props) => {
      return <InputText {...props} />;
  }),
  TEXT_AREA: enumBody({
    case: null
  },(props) => {
     return <InputText {...props} />;
  }),
  RICH_TEXT: enumBody(),
  EMAIL: enumBody(),
  PHONE: enumBody(),
  NUMBER: enumBody({
    decimals: 0
  }),
  CURRENCY: enumBody(),
  DATE: enumBody(),
  DATETIME: enumBody(),
  TIMESTAMP: enumBody(),
  SELECT: enumBody({},(props) => {
     return <InputSelect {...props} />;
  }),
  LOOKUP: enumBody({},(props) => {
     return <InputLookup {...props} />;
  }),
  DETAIL: enumBody({},(props) => {
    return <InputDetail {...props} />
  })
});
