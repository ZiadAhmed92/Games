import React from 'react'

export default function Cradlibrary(props) {
  return (
    <>
<div className='main-library col-md-12'>
              <img src={props.img} alt='img'/>
              <div className="title-library">
                 <h6>{props.title}</h6>
                 <h6 className='text-popular'>{props.category}</h6>
              </div>
              <div className="title-library">
                 <h6>{props.title2}</h6>
                 <h6 className='text-popular'>{props.date}</h6>
              </div>
              <div className="title-library">
                 <h6>{props.title3}</h6>
                 <h6 className='text-popular'>{props.number}</h6>
              </div>
              <div className="title-library">
                 <h6>{props.title4}</h6>
                 <h6 className='text-popular'>{props.title5}</h6>
              </div>

            
                 <button className='btn btn-library'>Downloaded</button>
        
            
            </div>
    </>
  )
}
