import React from 'react'
import { Hero , Library , MostPopular} from "../PathComponent"
import './Container.css'

export default function Container() {
  return (
    <>
          <div className="container container-main   ">
            <div className="row">
              <div className="col-md-12  pb-5">
                <Hero/>

              </div> 
              <div className="col-md-12 mb-5  mostPopular  ">
                <MostPopular/>
              </div>
              <div className="col-md-12 mostPopular mb-5  ">
                <Library/>
              </div>
              
         
            </div>
          </div>
    </>
  )
}
