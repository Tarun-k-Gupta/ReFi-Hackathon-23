import React from 'react'
import imagec from '../images/carbon.jpg';
export default function Displaybar() {
  return (
    <>
     <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imagec} className="d-block w-100" alt="adadfa" />
          </div>
          <div className="carousel-item">
            <img src={imagec} className="d-block w-100" alt="adadqe" />
          </div>
          <div className="carousel-item">
            <img src={imagec} className="d-block w-100" alt="adaf" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}
