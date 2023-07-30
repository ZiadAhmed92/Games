import React from 'react'
import './Browse.css'

import feature from '../../assets/Images/feature-right.jpg'
import feature2 from '../../assets/Images/featured-01.jpg'
import feature3 from '../../assets/Images/featured-02.jpg'
import feature4 from '../../assets/Images/featured-03.jpg'
import game1 from '../../assets/Images/game-01.jpg'
import game2 from '../../assets/Images/game-02.jpg'
import game3 from '../../assets/Images/game-03.jpg'
import service1 from '../../assets/Images/service-01.jpg'
import service2 from '../../assets/Images/service-02.jpg'
import service3 from '../../assets/Images/service-03.jpg'
import stream1 from '../../assets/Images/stream-01.jpg'
import stream2 from '../../assets/Images/stream-02.jpg'
import stream3 from '../../assets/Images/stream-03.jpg'
import stream4 from '../../assets/Images/stream-04.jpg'
import avatar1 from '../../assets/Images/avatar-01.jpg'
import avatar2 from '../../assets/Images/avatar-02.jpg'
import avatar3 from '../../assets/Images/avatar-03.jpg'
import avatar4 from '../../assets/Images/avatar-04.jpg'

export default function Browse() {





  return (
    <>
  <div className="container container-main">
     <div className="row">
       <div className="col-md-7  mostPopular overflow-x-scroll p-2">
           <h3 className=' ps-3 pt-1'> <em>Featured</em> <span className='rigth-popular'>Games</span> </h3> 
            <div className='image-Games pt-5 '>
               <div className='items-image'>
               <img src={feature} alt='img' className='w-100 h-75 img-popular'/>
               <div className='icon-main-popular'>
                     <h6 >title</h6>
                     <a href='#'><i className="fa-solid fa-download"></i> rate</a>                  </div>
               <div className='icon-main-popular'> 
                 <h6 className='text-popular '>category</h6>
                 <a href='#' ><i className="fa-solid fa-star"></i>download</a>                  </div>
                 </div>
               <div className='items-image'>
               <img src={feature2} alt='img' className='w-100  h-75  img-popular'/>
               <div className='icon-main-popular'>
                     <h6 >title</h6>
                     <a href='#'><i className="fa-solid fa-download"></i> rate</a>                  </div>
               <div className='icon-main-popular'> 
                 <h6 className='text-popular '>category</h6>
                 <a href='#' ><i className="fa-solid fa-star"></i>download</a>                  </div>
                 </div>
               <div className='items-image'>
               <img src={feature3} alt='img' className='w-100  h-75  img-popular'/>
               <div className='icon-main-popular'>
                     <h6 >title</h6>
                     <a href='#'><i className="fa-solid fa-download"></i> rate</a>                  </div>
               <div className='icon-main-popular'> 
                 <h6 className='text-popular '>category</h6>
                 <a href='#' ><i className="fa-solid fa-star"></i>download</a>                  </div>
                 </div>
               <div className='items-image'>
               <img src={feature4} alt='img' className='w-100  h-75  img-popular'/>
               <div className='icon-main-popular'>
                     <h6 >title</h6>
                     <a href='#'><i className="fa-solid fa-download"></i> rate</a>                  </div>
               <div className='icon-main-popular'> 
                 <h6 className='text-popular '>category</h6>
                 <a href='#' ><i className="fa-solid fa-star"></i>download</a>                  </div>
                 </div>
               </div>
            
                  </div>


       <div className="col-md-4 mostPopular top-download ms-5 p-4">
           <h3 className='pb-3'><em>Top</em> <span className='rigth-popular'>Download</span></h3>
           <div className="top-download2">
            <img src={game1} alt='img' className='w-25 h-25 img-popular'/>
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
           <div className="top-download2">
            <img src={game2} alt='img' className='w-25 h-25 img-popular'/>
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
           <div className="top-download2">
            <img src={game3} alt='img' className='w-25 h-25 img-popular'/>
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
           <div className=' text-center p-3'>
               <a href='$' > View All Games</a>
           </div>
        
       
       </div>

       <h2 className='p-5 text-center'> <em>How To Start Your</em> <span className='rigth-popular'>Live Stream</span> </h2>
       <div className="col-md-4 box p-4">
        <div className='text-center'><img src={service1} alt='img' className='rounded-circle'/></div>
        <h4 className='p-2'> Go To Your Profile</h4>
        <h6 className='text-popular-box'>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout</h6>
       </div>
       <div className="col-md-4 box p-4">
        <div className='text-center'><img src={service2} alt='img' className='rounded-circle'/></div>
        <h4 className='p-2'> Live Stream Button</h4>
        <h6 className='text-popular-box'>If you wish to support us, you can make a small contribution via PayPal to info [at] templatemo.com</h6>
       </div>
       <div className="col-md-4 box p-4">
        <div className='text-center'><img src={service3} alt='img' className='rounded-circle'/></div>
        <h4 className='p-2'> You Are Live</h4>
        <h6 className='text-popular-box'>You are not allowed to redistribute this template's downloadable ZIP file on any other template collection website.</h6>
       </div>
       
       <div className="text-center">
        <button className='btn btn-popular mb-5'> Go To Profile</button>
       </div>

       <div className="col-md-12  mostPopular p-2">
           <h3 className=' p-4'> <em>Most Popular</em> <span className='rigth-popular'>Live Stream</span> </h3> 
           <div className="container">
            <div className="row">
              <div className="col-md-3 stream">
                  <img src={stream1} alt='img' className='w-100 mb-2 img-popular'/>
                <div className='d-flex'>
                <img src={avatar1} alt='img' className=' avatar p-2 w-50 h-50 rounded-circle'/>
                <span>
                <h4 className='active'> KenganC</h4>
                <h6 >Just Talking With Fans</h6>
                </span>
                </div>
              </div>
              <div className="col-md-3 stream">
                  <img src={stream2} alt='img' className='w-100 mb-2 img-popular'/>
                <div className=' d-flex'>
                <img src={avatar2} alt='img' className='avatar p-2 w-50 h-50 rounded-circle'/>
                <span>
                <h4 className='active'>  LunaMa</h4>
                <h6 >CS-GO 36 Hours Live Stream</h6>
                </span>
                </div>
              </div>
              <div className="col-md-3 stream">
                  <img src={stream3} alt='img' className='w-100 mb-2 img-popular'/>
                <div className='d-flex'>
                <img src={avatar3} alt='img' className=' avatar p-2 w-50 h-50 rounded-circle'/>
                <span>
                <h4 className='active'>  Areluwa</h4>
                <h6 >Maybe Nathej Allnight Chillin'</h6>
                </span>
                </div>
              </div>
              <div className="col-md-3 stream">
                  <img src={stream4} className='w-100  mb-2 img-popular'/>
                <div className='d-flex'>
                <img src={avatar4} alt='img' className=' avatar p-2 w-50 h-50 rounded-circle'/>
                <span>
                <h4 className='active'>  GangTm</h4>
                <h6 >Live Streaming Till Morning</h6>
                </span>
                </div>
              </div>
              <div className="col-md-12 text-center">
             <button className='btn btn-popular'>Discover Popular</button>
       
        </div>
            </div>
           </div>
               </div>
            
                  

     </div>
  </div>


    
    </>
  )
}
