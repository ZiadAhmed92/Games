import React from 'react'

export default function card(props) {
  return (
    <>
<div className="col-md-3  p-3 card-most-popular ">
            <img src={props.image} alt='img' className='w-100 img-popular'/>
                <div className='icon-main-popular'>
                  <h6 >{props.title}</h6>
                  <a href='#'><i className="fa-solid fa-download"></i> {props.rate}</a>                  </div>
                <div className='icon-main-popular'> 
                           <h6 className='text-popular '>{props.category}</h6>
                           <a href='#' ><i className="fa-solid fa-star"></i>{props.download}</a>                  </div>
        </div>

    </>
  )
}
