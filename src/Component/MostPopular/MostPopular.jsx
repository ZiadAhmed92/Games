import React from 'react'
import './MostPopular.css'
import popular1 from '../../assets/Images/popular-01.jpg' 
import popular2 from '../../assets/Images/popular-02.jpg' 
import popular3 from '../../assets/Images/popular-03.jpg' 
import popular4 from '../../assets/Images/popular-04.jpg' 
import popular5 from '../../assets/Images/popular-05.jpg' 
import popular6 from '../../assets/Images/popular-06.jpg' 
import popular7 from '../../assets/Images/popular-07.jpg' 
import popular8 from '../../assets/Images/popular-08.jpg' 
import Card from '../Card/card'
export default function MostPopular() {

  let arr1 = [{ image:popular1, title:'Fortnite', category:'Sandbox' ,rate:'4.8', download:'6.5M'},
              { image:popular2, title:'Pubg', category:'Battle S' ,rate:'60', download:'60.5M'},
              { image:popular6, title:'Dota2', category:'Steam-X' ,rate:'4', download:'8.5M'},
              { image:popular3, title:'CS-GO', category:'Legendary' ,rate:'6.2', download:'7.5M'},
              { image:popular4, title:'Mini Craft', category:'Legendary' ,rate:'7.5', download:'7M'},
              { image:popular5, title:'Eagles Fly', category:'Matrix Games' ,rate:'47', download:'10M'},
              { image:popular8, title:'ًًWarfsce', category:'Max 3D' ,rate:'7.2', download:'7.8M'},
              { image:popular7, title:'Fortnite', category:'Legend' ,rate:'2.9', download:'11M'},
            
              ]
let card = arr1.map((card ,i) => {
return   <Card
              key={i}
              image={card.image}
               title={card.title}
               category={card.category}
               rate={card.rate}
               download={card.download}  />
})

  return (
    <div>
   <h1 className='p-3'><em>Most Popular</em> <span className='rigth-popular'>Right Now</span></h1>
   <div className="container ">
    <div className="row ">
       {card}
        <div className="col-md-12 text-center">
             <button className='btn btn-popular'>Discover Popular</button>
       
        </div>
       
    </div>
   </div>
    
    </div>
  )
}
