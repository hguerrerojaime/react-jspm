import React from 'react';
import ContentHeader from './ContentHeader';
import ContentBody from './ContentBody';
import BreadCrumbs from './BreadCrumbs';

export default class Content extends React.Component {
  render() {
    return (
        <div id="content">
            <BreadCrumbs />
            <div className="container">
                  <ContentHeader />
                  <ContentBody />
            </div>
        </div>
    );
  }
}
