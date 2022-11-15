import React from 'react'
import '../../css/header/maindiv1.css';




export default function maindiv1(props) {
    console.log(props.data.div9) 
    return (
       <div className='section bg-danger mt-5 w-100'>
  <div className='d-flex align-items-center justify-content-between bg-info container-fluid'>
          <div className='div9 d-flex align-items-center'>
            <h1 className='text-secondary'>{props.data.div9H1}</h1>
          <span className='mt-2 ms-3 text-secondary'> {props.data.div9span}</span>
          </div>
      
          
          <div className="div12">
          <a href="">{props.data.div9a}</a>
          </div>
          </div>
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
     <div className="row">
      <div className="col-xl-2 ">
      <div class="card">
      <img  className='img-fluid ' src="https://image.tinfis.uz/uploads/all/2022/11/oUvkcuVeRM6BoYUSsNj1VwNFdkoQuowJxFdiPBgz.jpg" alt="" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className="card-footer">
      <p>fafnajfnajfnjafnjaf</p>
    </div>
  </div>
</div>
      </div>
      <div className="col-xl-2"></div>
      <div className="col-xl-2"></div>
      <div className="col-xl-2"></div>
      <div className="col-xl-2"></div>
     </div>
    </div>
    <div class="carousel-item">
    
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        <div className="basic col-xl-12 row container-fuid mt-5">
          <div className="div35 col-xl-6"><img  className='img2 img-fluid ' src="https://image.tinfis.uz/uploads/all/2022/07/4fHtuzFaXhflcehgOpgocJ27FZY5RqRgv3LgbSIY.jpg" alt="" /></div>
          <div className="div36 col-xl-6"><img className='img2 img-fluid' src="https://image.tinfis.uz/uploads/all/2022/07/tE1eMJf2bz5czbqfNDQdfti1g8jiDoW7K8NiCmt4.jpg" alt="" /></div>
          <div className="div37 col-xl-6"><img className='img2 img-fluid' src="https://image.tinfis.uz/uploads/all/2022/10/KpLMxPIFy5JxaMsYNbhpOzLY4BVbYG6m9lFaCVGl.jpg" alt="" /></div>
          <div className="div38 col-xl-6"><img className='img2 img-fluid' src="https://image.tinfis.uz/uploads/all/2022/08/bXv2rI3mqOuxcFtHtQBuLVcQLAkPLA1CYTWGbECw.jpg" alt="" /></div>
          <div className="div39 col-xl-6"><img className='img2 img-fluid' src="https://image.tinfis.uz/uploads/all/2022/07/LdLHoNduQ1p4BzpywnDyyMHI0MXZdCYkjOCfPb88.jpg" alt="" /></div>
          <div className="div40 col-xl-6"><img className='img2 img-fluid' src="https://image.tinfis.uz/uploads/all/2022/07/JUMa4rT7s79eohvIYDhXk15hvw5N5SF6Zlqu5L0t.jpg" alt="" /></div>
        </div>
       </div>
       
     )
   }