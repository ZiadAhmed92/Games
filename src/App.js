import { Footer , Header , Container ,Profile, Details, Streams ,Browse} from "./Component/PathComponent";
import './App.css'

import { Route, Routes } from "react-router-dom";
function App() {
  return (
        <>
           <Header />
         
                  <Routes>
                    <Route path="/" element={<Container/>} />
                  <Route path="/home" element={<Container />}/>
                    
                    <Route path="/browse" element={<Browse />}/>
                    <Route path="/details" element={<Details />}/>
                    <Route path="/streams" element={<Streams />}/>
                    <Route path="/profile" element={<Profile />}/>
                  </Routes>
           
              
          <Footer/>          
          
        </>    
  );
}

export default App;
