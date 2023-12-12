import React from 'react'
import './Streams.css'
import feature2 from '../../assets/Images/feature-right.jpg'
import details1 from '../../assets/Images/details-01.jpg'
import details2 from '../../assets/Images/details-02.jpg'
import details3 from '../../assets/Images/details-03.jpg'
import avatar1 from '../../assets/Images/avatar-01.jpg'
import avatar2 from '../../assets/Images/avatar-02.jpg'
import avatar3 from '../../assets/Images/avatar-03.jpg'
import avatar4 from '../../assets/Images/avatar-04.jpg'
import popular1 from '../../assets/Images/popular-01.jpg' 
import popular2 from '../../assets/Images/popular-02.jpg' 
import popular3 from '../../assets/Images/popular-03.jpg' 
import popular4 from '../../assets/Images/popular-04.jpg' 
import popular5 from '../../assets/Images/popular-05.jpg' 


export default function Streams() {




  return (
    <>
     <div className="container container-main">
     <div className="row">
       <div className="col-md-7  mostPopular overflow-x-scroll p-2">
           <h3 className=' ps-3 pt-1'> <em>Featured</em> <span className='rigth-popular'>Games</span> </h3> 
            <div className='image-Games pt-5 '>
               <div className='items-image'>
               <img src={details3} alt='img' className='w-100 h-75 img-popular'/>
               <div className='icon-main-popular'>
                     <h6 >title</h6>
                     <a href='#'><i class="fa-solid fa-download"></i> rate</a>                  </div>
               <div className='icon-main-popular'> 
                 <h6 className='text-popular '>category</h6>
                 <a href='#' ><i class="fa-solid fa-star"></i>download</a>                  </div>
                 </div>
               <div className='items-image'>
               <img src={feature2} alt='img' className='w-100  h-75  img-popular'/>
               <div className='icon-main-popular'>
                     <h6 >title</h6>
                     <a href='#'><i class="fa-solid fa-download"></i> rate</a>                  </div>
               <div className='icon-main-popular'> 
                 <h6 className='text-popular '>category</h6>
                 <a href='#' ><i class="fa-solid fa-star"></i>download</a>                  </div>
                 </div>
               <div className='items-image'>
               <img src={details1} alt='img' className='w-100  h-75  img-popular'/>
               <div className='icon-main-popular'>
                     <h6 >title</h6>
                     <a href='#'><i class="fa-solid fa-download"></i> rate</a>                  </div>
               <div className='icon-main-popular'> 
                 <h6 className='text-popular '>category</h6>
                 <a href='#' ><i class="fa-solid fa-star"></i>download</a>                  </div>
                 </div>
               <div className='items-image'>
               <img src={details2} alt='img' className='w-100  h-75  img-popular'/>
               <div className='icon-main-popular'>
                     <h6 >title</h6>
                     <a href='#'><i class="fa-solid fa-download"></i> rate</a>                  </div>
               <div className='icon-main-popular'> 
                 <h6 className='text-popular '>category</h6>
                 <a href='#' ><i class="fa-solid fa-star"></i>download</a>                  </div>
                 </div>
               </div>
            
                  </div>

                  <div className="col-md-4  mostPopular top-download ms-5 p-4">
           <h3 className='pb-3'><em>Top</em> <span className='rigth-popular'>Download</span></h3>
           <div className="top-download2 top-stream">
            <div className='child-stream d-flex align-items-center'>
            <h6 className='stream-num px-1'>1</h6>
            
            <img src={avatar1} alt='img' className='stream-img rounded-circle'/>

            </div>
              <div className='child-stream d-flex align-items-center'>  
        <h6 className='active'> Lahutam </h6>
              </div>
              <div className='icon child-stream'>
                 <button className='btn btn-popular mb-5'>Follow</button>
              </div>
          
           </div>
           <div className="top-download2 top-stream">
            <div className='child-stream d-flex align-items-center'>
            <h6 className='stream-num px-1'>2</h6>
            
            <img src={avatar2} alt='img' className='stream-img rounded-circle'/>

            </div>
              <div className='child-stream d-flex align-items-center'>  
        <h6 className='active'> Lahutam </h6>
              </div>
              <div className='icon child-stream'>
                 <button className='btn btn-popular mb-5'>Follow</button>
              </div>
          
           </div>
           <div className="top-download2 top-stream">
            <div className='child-stream d-flex align-items-center'>
            <h6 className='stream-num px-1'>3</h6>
            
            <img src={avatar3} alt='img' className='stream-img rounded-circle'/>

            </div>
              <div className='child-stream d-flex align-items-center'>  
        <h6 className='active'> Lahutam </h6>
              </div>
              <div className='icon child-stream'>
                 <button className='btn btn-popular mb-5'>Follow</button>
              </div>
          
           </div>
      
           <div className="top-download2 top-stream">
            <div className='child-stream d-flex align-items-center'>
            <h6 className='stream-num px-1'>4</h6>
            
            <img src={avatar4} alt='img' className='stream-img rounded-circle'/>

            </div>
              <div className='child-stream d-flex align-items-center'>  
        <h6 className='active'> Lahutam </h6>
              </div>
              <div className='icon child-stream'>
                 <button className='btn btn-popular mb-5'>Follow</button>
              </div>
          
           </div>
      
       
         
        
       
       </div>

        <div className="col-md-12 my-5 ">
        <div className="container mostPopular">
          <div className="row px-3">
          <h1 className='p-3'><em>Most Popular</em> <span className='rigth-popular'>Live Stream</span></h1>

            <div className="col-md-3 stream-Live ">
                <img src={details1} alt='img' className='img-popular w-100  p-2 '/>
                <div className='d-flex align-items-center'>
                <img src={avatar1} alt='img' className='stream-img rounded-circle '/>
                <h6 className='active p-3'>Kengan Omeg</h6>
              
                
                </div>
                <h3>CS-GO 36 Hours Live Stream</h3>
            </div>
            <div className="col-md-3 stream-Live ">
                <img src={details2} alt='img' className='img-popular w-100  p-2 '/>
                <div className='d-flex align-items-center'>
                <img src={avatar2} alt='img' className='stream-img rounded-circle '/>
                <h6 className='active p-3'>Kengan Omeg</h6>
              
                
                </div>
                <h3>CS-GO 36 Hours Live Stream</h3>
            </div>
            <div className="col-md-3 stream-Live ">
                <img src={details3} alt='img' className='img-popular w-100  p-2 '/>
                <div className='d-flex align-items-center'>
                <img src={avatar3} alt='img' className='stream-img rounded-circle '/>
                <h6 className='active p-3'>Kengan Omeg</h6>
              
                
                </div>
                <h3>CS-GO 36 Hours Live Stream</h3>
            </div>
            <div className="col-md-3 stream-Live ">
                <img src={popular1} alt='img' className='img-popular w-100  p-2 '/>
                <div className='d-flex align-items-center'>
                <img src={avatar4} alt='img' className='stream-img rounded-circle '/>
                <h6 className='active p-3'>Kengan Omeg</h6>
              
                
                </div>
                <h3>CS-GO 36 Hours Live Stream</h3>
            </div>
            <div className="col-md-3 stream-Live ">
                <img src={popular2} alt='img' className='img-popular w-100  p-2 '/>
                <div className='d-flex align-items-center'>
                <img src={avatar1} alt='img' className='stream-img rounded-circle '/>
                <h6 className='active p-3'>Kengan Omeg</h6>
              
                
                </div>
                <h3>CS-GO 36 Hours Live Stream</h3>
            </div>
            <div className="col-md-3 stream-Live ">
                <img src={popular3} alt='img' className='img-popular w-100  p-2 '/>
                <div className='d-flex align-items-center'>
                <img src={avatar2} alt='img' className='stream-img rounded-circle '/>
                <h6 className='active p-3'>Kengan Omeg</h6>
              
                
                </div>
                <h3>CS-GO 36 Hours Live Stream</h3>
            </div>
            <div className="col-md-3 stream-Live ">
                <img src={popular4} alt='img' className='img-popular w-100  p-2 '/>
                <div className='d-flex align-items-center'>
                <img src={avatar3} alt='img' className='stream-img rounded-circle '/>
                <h6 className='active p-3'>Kengan Omeg</h6>
              
                
                </div>
                <h3>CS-GO 36 Hours Live Stream</h3>
            </div>
            <div className="col-md-3 stream-Live ">
                <img src={popular5} alt='img' className='img-popular w-100  p-2 '/>
                <div className='d-flex align-items-center'>
                <img src={avatar4} alt='img' className='stream-img rounded-circle '/>
                <h6 className='active p-3'>Kengan Omeg</h6>
              
                
                </div>
                <h3>CS-GO 36 Hours Live Stream</h3>
            </div>

            <div className="col-md-12 text-center">
             <button className='btn btn-popular'>Load More Streams</button>
       
               </div>
            </div>
          </div>
        </div>
     </div>
  </div>
    
    </>
  )
}
