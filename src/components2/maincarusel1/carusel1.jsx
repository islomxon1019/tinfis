import '../caruselcss/carusel1.css'
import React from 'react'

export default function carusel1(props) {
  return (
    <div className='container-fluid' >
         
            <div  className="div1 d-flex bg-body">
              <ul className='d-flex'>
                <li className='ms-4 breadcrumb-item'><a href="">{props.name.a1}</a></li>
                <li className='ms-4 breadcrumb-item'><a href="">{props.name.a2}</a></li>
                <li className='ms-4 breadcrumb-item'><a href="">{props.name.a3}</a></li>
              </ul>

               </div>
            <div className="col-xl-12 d-flex">
                <div className="div3 col-xl-2 bg-body container">
                  <div className="div4 bg-warning ms-5"><img className='img-fluid' src={props.name.img1} alt="" /></div>
                  <div className="div4 bg-warning ms-5 mt-5"><img className='img-fluid' src={props.name.img2} alt="" /></div>
                  <div className="div4 bg-warning ms-5 mt-5"><img className='img-fluid' src={props.name.img3} alt="" /></div>
                </div>



                <div className="col-xl-5 bg-body container d-flex"><div className='div5 bg-body'><img className='img1 img-fluid container-fuid' src={props.name.img1}  alt="" /></div>
                <div className='div6'>
                  <ul>
                    <li><i class="fa-regular fa-heart "></i></li>
                    <li><i class="fa-regular fa-square-plus mt-1"></i></li>
                    <li><i class="fa-solid fa-bars mt-1"></i></li>
                  </ul></div>
                </div>

                <div className="col-xl-5 bg-danger">
                  <div className='bg-body col-xl-12'>
                    <h3>{props.name.h3} </h3>
                  </div>
                  <div className='bg-body col-xl-12 d-flex'></div>
                  <div>
                  <ul className='d-flex'>
                  <li><i class="fa-regular fa-star"></i></li>
                  <li><i class="fa-regular fa-star"></i></li>
                  <li><i class="fa-regular fa-star"></i></li>
                  <li><i class="fa-regular fa-star"></i></li>
                  <li><i class="fa-regular fa-star"></i></li>
                  <li>0 отзывы</li>
                  </ul>
                  <div className='justify-content-flex-end'><span>0про</span></div>
                  </div>
                </div>
            </div>
            </div>
   
  )
}
