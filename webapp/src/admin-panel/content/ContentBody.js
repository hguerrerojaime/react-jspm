import React from 'react';

export default class ContentBody extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className = "input-group">
              <input type = "text" className = "form-control" />

              <span className = "input-group-btn">
                 <button className = "btn btn-default" type = "button">
                    Go!
                 </button>
              </span>

           </div>
        </div>
      </div>
    );
  }

}
