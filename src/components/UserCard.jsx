import React from 'react';

const UserCard = (props) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card-transparent card-block card-stretch card-height">
        <div className="card-body text-center p-0">
          <div className="item">
            <div className="odr-img">
              <img src="assets/images/user/01.jpg" className="img-fluid rounded-circle avatar-90 m-auto" alt="image" />
            </div>
            <div className="odr-content rounded">
              <h4 className="mb-2">{props.name}</h4>
              <p className="mb-3">{props.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
