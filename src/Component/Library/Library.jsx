import React from 'react'
import game1 from '../../assets/Images/game-01.jpg'
import game2 from '../../assets/Images/game-02.jpg'
import game3 from '../../assets/Images/game-03.jpg'
import './Library.css'
import Cradlibrary from '../Crad-library/Crad-library'
export default function Library() {

   let arr = [{ date:'22/8/2036',number:'634 H 22 Mins', category:'Sandbox',img:game1, title:'Dota 2',title2:'Data Added',title3:'Hours Played',title4:'Currently',title5:'Downloaded'},
              { date:'25/6/2035',number:'758 H 25 Mins', category:'Sandbox',img:game2, title:'Fortnite',title2:'Data Added',title3:'Hours Played',title4:'Currently',title5:'Downloaded'},
              { date:'30/10/2030',number:'634 H 22 Mins', category:'Sandbox',img:game3, title:'CS-GO',title2:'Data Added',title3:'Hours Played',title4:'Currently',title5:'Downloaded'}]
  let cardLibrary = arr.map((card ,i) => {
    return    <Cradlibrary
              key={i}
              img={card.img} 
              title={card.title}
              title2={card.title2}
              title5={card.title5}
              title3={card.title3}
              number={card.number}
              title4={card.title4}
              date={card.date}
              category={card.category}/>
  })

  return (
    <div>
    <h1 className='p-3'><em>Your Gaming</em> <span className='rigth-popular'> Library</span></h1>
    <div className="container ">
     <div className="row ">
      
{cardLibrary}

         <div className="col-md-12 text-center">
              <button className='btn btn-popular'>View Your Library</button>
        
         </div>
        
     </div>
    </div>
     
     </div>
  )
}
