import { Footer , Header , Container,Profile, Details, Streams ,Browse} from "./Component/PathComponent";
import './App.css'

import { Route, Routes } from "react-router-dom";
function App() {
  return (
        <>
           <Header />
         
                  <Routes>
                    <Route path="/" element={<Container/>}/>
                    <Route path="Home" element={<Container/>}/>
                    <Route path="Browse" element={<Browse/>}/>
                    <Route path="Details" element={<Details/>}/>
                    <Route path="Streams" element={<Streams/>}/>
                    <Route path="Profile" element={<Profile/>}/>
                  </Routes>
           
              
          <Footer/>          
          
        </>    
  );
}

export default App;
