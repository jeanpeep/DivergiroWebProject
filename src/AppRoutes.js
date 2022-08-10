import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Header from "./components/Header";
import LoginRegistrar from "./pages/Login_Registrar";
import { CarritoContext, ServicioContext, UserContext } from "./Context";
import { useEffect, useState } from "react";
import Micuenta from "./pages/Micuenta";
import Servicios from "./pages/Servicios";
import Axios from "axios";
import Servicio from "./pages/Servicio";
import Promocion from "./pages/Promocion";
import DatosBoleta from "./pages/Datos_Boleta";
import Pedidos from "./pages/Pedidos";
import AgregarServ from "./pages/AgregarServ";
import NoEncontrado from "./pages/NoEncontrado";
import ModificarServ from "./pages/ModificarServ";

function AppRoutes() {
  const [user, setUser] = useState({});
  const [carrito, setCarrito] = useState([]);
  const [servicio, setServicio] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:3001/api/listar/servicio").then((res) => {
      var resp = res.data;
      setServicio(resp);
    });
    
  }, []);

  return (
    <div className="App">
      <ServicioContext.Provider value={{servicio, setServicio}}>
      <CarritoContext.Provider value={{ carrito, setCarrito }}>
        <UserContext.Provider value={{ user, setUser }}>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Menu />} />
              <Route path="/login_registrar" element={<LoginRegistrar />} />
              <Route path="/Micuenta" element={user.nombre?<Micuenta />:<Menu/>} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/servicios/:id" element={<Servicio/>} />
              <Route path="/promociones/:id" element={<Promocion/>} />
              <Route path="/datos_boleta" element={user.nombre&&carrito.length?<DatosBoleta/>:<Menu/>} />
              <Route path="/Micuenta/Pedidos" element={user.nombre?<Pedidos/>:<Menu/>} />
              <Route path="/servicios/agregar" element={user.rol === "ADMIN"?<AgregarServ/>:<Menu/>} />
              <Route path="/servicios/modificar/:id" element={user.rol === "ADMIN"?<ModificarServ/>:<Menu/>} />
              <Route path="*" element={<NoEncontrado/>}/>
            </Routes>
          </Router>
        </UserContext.Provider>
      </CarritoContext.Provider>
      </ServicioContext.Provider>
    </div>
  );
}

export default AppRoutes;
