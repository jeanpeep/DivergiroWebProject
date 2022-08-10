import { createContext } from "react";

export const UserContext = createContext({
    user: {},
    setUser: () => {}
  });

  export const CarritoContext = createContext({
    carrito: [],
    setCarrito:()=>{}
  })  
  
  export const ServicioContext = createContext({
    servicio : [],
    setServicio:()=>{}
  })