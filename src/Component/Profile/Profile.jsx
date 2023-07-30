import React from 'react'
import { Library } from "../PathComponent"
import feature2 from '../../assets/Images/feature-right.jpg'
import popular1 from '../../assets/Images/popular-01.jpg' 
import popular2 from '../../assets/Images/popular-02.jpg' 
import popular3 from '../../assets/Images/popular-03.jpg' 
import popular4 from '../../assets/Images/popular-04.jpg'
import './Profile.css'
export default function Profile() {
  return (
    <div>
        <div className="container container-main">
          <div className="row">
            <div className="col-md-12 mostPopular mb-5">
                <div className="container">
                  <div className="row p-4 row-1">
                    <div className="col-md-4">
                      <img src={feature2} alt='img' className='profile-img '/>
                    </div>
                    <div className="col-md-4 Alan my-4">
                      <button className='btn btn-info m-2'>Offline</button>
                      <h4>Alan Smithee</h4>
                      <h6 className='text-profile p-2'>You Haven't Gone Live yet. Go Live By Touching The Button Below.</h6>
                      <button className='btn btn-details'> Start Live Stream</button>

                    </div>
                    <div className="col-md-4 container-profile">
                      <div className='item-profile d-flex'>
                        <h6 className='text-profile'>Games Downloaded</h6>
                        <h6 className='active'>3</h6>
                      </div>
                      <div className='item-profile d-flex'>
                        <h6 className='text-profile'>Friends Online</h6>
                        <h6 className='active'>16</h6>
                      </div>
                      <div className='item-profile d-flex'>
                        <h6 className='text-profile'>Live Streams</h6>
                        <h6 className='active'>None</h6>
                      </div>
                      <div className='item-profile d-flex'>
                        <h6 className='text-profile'>Clips</h6>
                        <h6 className='active'>29</h6>
                      </div>
                      
                    </div>
                  </div>
                  <div className="row p-4">
                  <h1 className='p-3'><em>Your Most Popular</em> <span className='rigth-popular'>Clips</span></h1>
                    <div className="col-md-3 prfile-clip p-3 container-main">
                        <div >
                        <img src={popular1} alt='img' className='w-100'/>
                        {/* <i class="fa-solid fa-circle-video"></i> */}
                        </div>
                        <div className='d-flex justify-content-between pt-3'>
                          <h6>Frist Clip </h6>
                          <span>
                          <i className="fa-solid fa-eye active"></i>
                          25
                          </span>
                        </div>
                    </div>
                    <div className="col-md-3 prfile-clip p-3 container-main">
                        <div >
                        <img src={popular2} alt='img' className='w-100'/>
                        {/* <i class="fa-solid fa-circle-video"></i> */}
                        </div>
                        <div className='d-flex justify-content-between pt-3'>
                          <h6>Frist Clip </h6>
                          <span>
                          <i className="fa-solid fa-eye active"></i>
                          950
                          </span>
                        </div>
                    </div>
                    <div className="col-md-3 prfile-clip p-3 container-main">
                        <div >
                        <img src={popular3} alt='img' className='w-100'/>
                        {/* <i class="fa-solid fa-circle-video"></i> */}
                        </div>
                        <div className='d-flex justify-content-between pt-3'>
                          <h6>Frist Clip </h6>
                          <span>
                          <i className="fa-solid fa-eye active"></i>
                          800
                          </span>
                        </div>
                    </div>
                    <div className="col-md-3 prfile-clip p-3 container-main">
                        <div >
                        <img src={popular4} alt='img' className='w-100'/>
                        {/* <i class="fa-solid fa-circle-video"></i> */}
                        </div>
                        <div className='d-flex justify-content-between pt-3'>
                          <h6>Frist Clip </h6>
                          <span>
                          <i className="fa-solid fa-eye active"></i>
                          250
                          </span>
                        </div>
                    </div>
                  </div>
                </div>
            </div>



            <div className="col-md-12 mostPopular mb-5  ">
                <Library/>
              </div>
          </div>
        </div>

    </div>
  )
}
