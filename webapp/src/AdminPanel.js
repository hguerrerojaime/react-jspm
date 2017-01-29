import React from 'react';
import Header from './admin-panel/Header';
import Container from './admin-panel/Container';

export default class AdminPanel extends React.Component {

   render() {
        return (
          <div>
            <Header />
            <Container />
          </div>
        );
   }

}
