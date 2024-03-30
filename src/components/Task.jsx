import React from 'react';
import { useState, useEffect } from 'react';

const Task = (props) => {
  const [desc, setDesc] = useState(props.description);
  const currentDate = new Date(props.date);
  currentDate.setDate(currentDate.getDate() + 1);
  const [date, setDate] = useState(new Date(currentDate).toISOString().slice(0, 10));

  const handleDescChange = event => {
    setDesc(event.target.value);
  };

  const handleDateChange = event => {
    setDate(event.target.value);
  };

  const save = () => {
    const id = props.id;

    fetch(`/api/updateTask?id=${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ taskDescription: desc, taskDate: date })
    })
      .catch((error) => console.error('Error updating task description:', error));
  };



  return (
    <div className="col-lg-12">
      <div className="card card-widget task-card">
        <div className="card-body">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <div>
                <h5 className="mb-2">{props.name}</h5>
              </div>
            </div>
            <div className="media align-items-center mt-md-0 mt-3">
              <a className="btn bg-secondary-light" data-toggle="collapse" href="#collapseEdit1" role="button" aria-expanded="false" aria-controls="collapseEdit1">+</a>
            </div>
          </div>
        </div>
      </div>
      <div className="collaspse" id="collapseEdit1">
        <div className="card card-list task-card">

          <div className="card-body">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mb-0">
                      <label className="h5">Completion Date</label>
                      <input type="date" className="form-control" defaultValue={date} onChange={handleDateChange} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mb-0">
                      <label className="h5">Description</label>
                      <input type="text" className="form-control" defaultValue={props.description} name='description' id='description' onChange={handleDescChange} />
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <div className="d-flex align-items-center"> </div>
            <button onClick={save} type="button" className="btn btn-success" style={{ paddingLeft: "20px", paddingRight: "20px", marginRight: "25px", marginBottom: "25px" }}>Save</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Task;
