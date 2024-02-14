import React from 'react';

const NewArrivalSection = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="new-arrival-section">
            <h2>New Arrival</h2>
            <p>Join Today</p>
            <button className="btn btn-primary">Join Now</button>
          </div>
        </div>
        <div className="col-md-6">
          <img src="/images/membership.jpg" alt="" className="img-fluid new-arrival-image" />
        </div>
      </div>
    </div>
  );
};

export default NewArrivalSection;
