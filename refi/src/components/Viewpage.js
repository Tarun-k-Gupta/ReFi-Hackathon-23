import React from 'react'
import pdf1 from '../reports/pdfone.pdf'
const Viewpage = () => {
  return (
    <>
        <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
        <div className="card">
        <embed src={pdf1} className="card-img-top" width="auto" height="500px" alt="Hollywood Sign on The Hill" />
        <div className="card-body">
            <h5 className="card-title">Report-1</h5>
            <p className="card-text">
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            </p>
        </div>
        </div>
        </div>
        <div className="col">
        <div className="card">
        <embed src={pdf1} className="card-img-top" width="auto" height="500px" alt="Palm Springs Road" />
        <div className="card-body">
            <h5 className="card-title">Report-2</h5>
            <p className="card-text">
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            </p>
        </div>
        </div>
        </div>
        <div className="col">
        <div className="card">
        <embed src={pdf1} className="card-img-top" width="auto" height="500px" alt="Los Angeles Skyscrapers" />
        <div className="card-body">
            <h5 className="card-title">Report-3</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to
            additional content.</p>
        </div>
        </div>
        </div>
        <div className="col">
        <div className="card">
        <embed src={pdf1} className="card-img-top" width="auto" height="500px" alt="Skyscrapers" />
        <div className="card-body">
            <h5 className="card-title">Report-4</h5>
            <p className="card-text">
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            </p>
        </div>
        </div>
        </div>
        <div className="col">
        <div className="card">
        <embed src={pdf1} className="card-img-top" width="auto" height="500px" alt="Hollywood Sign on The Hill" />
        <div className="card-body">
            <h5 className="card-title">Report-5</h5>
            <p className="card-text">
            This is a longer card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            </p>
        </div>
        </div>
        </div>
        </div>
    </>
  )
}

export default Viewpage
