import React from 'react'
import {Link} from "react-router-dom";
export default function Card(props) {
  return (
    <>
    <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
          <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{props.company1}</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <Link to="/Formpage" className="btn btn-primary mx-3">Upload Report</Link>
              <Link to="/Viewpage" className="btn btn-primary">View all reports</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
          <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{props.company2}</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <Link to="/Formpage" className="btn btn-primary mx-3">Upload Report</Link>
              <Link to="/Viewpage" className="btn btn-primary">View all reports</Link>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
