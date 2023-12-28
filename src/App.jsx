import {Navigate, Route, Routes } from "react-router-dom";

import Layaut from "./component/Layaut";
import NavBar from "./component/NavBar";
import Inicio from "./paginas/Inicio";
import Tienda from "./paginas/Tienda";
import Nosotros from "./paginas/Nosotros";
import Contacto from "./paginas/Contacto";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <div className="bg-[url('/public/endless-constellation.svg')] min-h-screen">
        <NavBar />
        <Layaut>
         
          <Routes>
            <Route path="/" element={<Inicio></Inicio>}></Route>
            <Route path="/Tienda" element={<Tienda></Tienda>}></Route>
            <Route path="/Nosotros" element={<Nosotros></Nosotros>}></Route>
            <Route path="/Contacto" element={<Contacto></Contacto>}></Route>
            <Route path="*" element={<Navigate to="/"></Navigate>}></Route>

          </Routes>
          
        </Layaut>
          
          <Footer/>
      </div>
    </>
  );
}

export default App;
