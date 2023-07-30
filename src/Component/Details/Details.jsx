import React from 'react'
import './Details.css'

import feature from '../../assets/Images/feature-left.jpg'
import feature2 from '../../assets/Images/feature-right.jpg'
import details1 from '../../assets/Images/details-01.jpg'
import details2 from '../../assets/Images/details-02.jpg'
import details3 from '../../assets/Images/details-03.jpg'
import popular1 from '../../assets/Images/popular-01.jpg' 
import popular2 from '../../assets/Images/popular-02.jpg' 
import popular3 from '../../assets/Images/popular-03.jpg' 
import popular4 from '../../assets/Images/popular-04.jpg' 
import popular5 from '../../assets/Images/popular-05.jpg' 
import popular6 from '../../assets/Images/popular-06.jpg'  
import { Link } from 'react-router-dom'
export default function Details() {
  return (
    <>

      <div className="container container-main">
        <div className="row">
          <div className="col-md-4  ">
              <img src={feature} alt='img' className='w-100 h-100 details-img'/>
          </div>
          <div className="col-md-8   ">
              <img src={feature2} alt='img' className='w-100 details-img'/>
          </div>
          <div className="col-md-12 text-center p-5">
          <h1 className='active text-Details'> FORTNITE DETAILS</h1>
          </div>
          <div className="col-md-12 mostPopular">
              <div className="container">
                <div className="row p-3">
                  <div className="col-md-6 container-main">
                  <div className='icon-main-popular details-icon'>
                  <h6 >Fortnite</h6>
                  <a href='#'><i className="fa-solid fa-download"></i> 2.5M</a>     
                               </div>
                <div className='icon-main-popular  details-icon'> 
                           <h6 className='text-popular '>Sandbox</h6>
                           <a href='#' ><i className="fa-solid fa-star"></i>  50M</a> 
                           
                           </div>

                  </div>
                  <div className="col-md-6  container-main container-icon">
                  <div className='icon-main-popular details-icon-left'>
                  <a href='#'> <a href='#' ><i className="fa-solid fa-star pb-4"></i></a><br/> 2.5M</a>
                  <a href='#'><i className="fa-solid fa-download pb-4"></i><br/> 4.8</a>      
                  <a href='#'><i className="fa-solid fa-ring pb-4 active"></i><br/> 36GB</a>     
                  <a href='#'><i className="fa-solid fa-gamepad pb-4 active"></i><br/> Action</a>     
                               </div>
                  </div>
                  <div className="col-md-4 p-3">
                  <img src={details1} alt='img' className=' img w-100 details-img'/>
                  </div>
                 <div className="col-md-4  p-3">
                  <img src={details2} alt='img' className=' img w-100 details-img'/>
                    </div>
                  <div className="col-md-4  p-3">
                  <img src={details3} alt='img' className='img w-100 h-100 details-img'/>
                </div>
                <div className="col-md-12">
               <h6 className='text-details'> Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout. You can make a <Link to="NotFound">small contribution via PayPal</Link> to info [at] templatemo.com and thank you for supporting. If you want to get the PSD source files, please contact us. Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.</h6>
                </div>
                <div className="col-md-12">
                  <button className='btn btn-details'> Download Fortnite Now!</button>
                </div>
              
              </div>
            </div>
          </div>
          <div className="col-md-12 mostPopular my-3 py-3">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 ">
                          <div className="top-download2">
            <img src={popular1} alt='img' className='w-25 h-25 img-popular'/>
              <div>  
                 <h6>fortnite</h6>
                 <h6 className='text-popular'>sandbox</h6>
              </div>
              <div className='icon'>
                  <a href='#'><i className=" fa-solid fa-download"></i> 2.5</a>
                  <br/>
                  <a href='#' ><i className="fa-solid fa-star"></i>70M</a> 

              </div>
          
           </div>
                      </div>
                      <div className="col-md-6 ">
                          <div className="top-download2">
            <img src={popular2} alt='img' className='w-25 h-25 img-popular'/>
              <div>  
                 <h6>fortnite</h6>
                 <h6 className='text-popular'>sandbox</h6>
              </div>
              <div className='icon'>
                  <a href='#'><i className=" fa-solid fa-download"></i> 2.5</a>
                  <br/>
                  <a href='#' ><i className="fa-solid fa-star"></i>70M</a> 

              </div>
          
           </div>
                      </div>
                      <div className="col-md-6 ">
                          <div className="top-download2">
            <img src={popular3} alt='img' className='w-25 h-25 img-popular'/>
              <div>  
                 <h6>fortnite</h6>
                 <h6 className='text-popular'>sandbox</h6>
              </div>
              <div className='icon'>
                  <a href='#'><i className=" fa-solid fa-download"></i> 2.5</a>
                  <br/>
                  <a href='#' ><i className="fa-solid fa-star"></i>70M</a> 

              </div>
          
           </div>
                      </div>
                      <div className="col-md-6 ">
                          <div className="top-download2">
            <img src={popular4} alt='img' className='w-25 h-25 img-popular'/>
              <div>  
                 <h6>fortnite</h6>
                 <h6 className='text-popular'>sandbox</h6>
              </div>
              <div className='icon'>
                  <a href='#'><i className=" fa-solid fa-download"></i> 2.5</a>
                  <br/>
                  <a href='#' ><i className="fa-solid fa-star"></i>70M</a> 

              </div>
          
           </div>
                      </div>
                      <div className="col-md-6 ">
                          <div className="top-download2">
            <img src={popular5} alt='img' className='w-25 h-25 img-popular'/>
              <div>  
                 <h6>fortnite</h6>
                 <h6 className='text-popular'>sandbox</h6>
              </div>
              <div className='icon'>
                  <a href='#'><i className=" fa-solid fa-download"></i> 2.5</a>
                  <br/>
                  <a href='#' ><i className="fa-solid fa-star"></i>70M</a> 

              </div>
          
           </div>
                      </div>
                      <div className="col-md-6 ">
                          <div className="top-download2">
            <img src={popular6} alt='img' className='w-25 h-25 img-popular'/>
              <div>  
                 <h6>fortnite</h6>
                 <h6 className='text-popular'>sandbox</h6>
              </div>
              <div className='icon'>
                  <a href='#'><i className=" fa-solid fa-download"></i> 2.5</a>
                  <br/>
                  <a href='#' ><i className="fa-solid fa-star"></i>70M</a> 

              </div>
          
           </div>
                      </div>
                    </div>
                  </div>
                </div>

        </div>
      </div>

    </>
  )
}
