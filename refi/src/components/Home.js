import React from 'react'
import image1 from '../images/img1.jpg';
import image2 from '../images/img2.jpg';
import image3 from '../images/img3.jpg';
import Card from './Card';
import './Home.css';
const Home = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>Project ZkExpose</h1>
              <p>A whistleblower platform for the voices supressed</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>Second slide label</h1>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>Third slide label</h1>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="carbox">
        <Card company1="Company-1" company2="Company-2"/>
      </div>
      <div className="carbox">
        <Card company1="Company-3" company2="Company-4"/>
      </div>
    </>
  )
}
export default Home
