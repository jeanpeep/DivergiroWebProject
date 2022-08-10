import Axios from 'axios'
import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { CarritoContext, UserContext } from '../Context';

export default function Pedidos() {
    const {user, setUser} = useContext(UserContext)
    const [registro, setRegistro] = useState([]);
    const {carrito, setCarrito} = useContext(CarritoContext)
    const [adi, setAdi] = useState([])
    const [servi, setServi] = useState([])
    const [todaboleta, setTodaboleta]= useState([])

        useEffect(() => {
 
                Axios.get('http://localhost:3001/api/listar/boleta_admin')
                .then((res)=>{
                    var resp = res.data;
                    registrarCompleto(resp)
                })

                var dni = user.dni
            Axios.post('http://localhost:3001/api/consultar/boleta',{
                dni: dni
            }).then((res)=>{
                const resp = res.data
                registrarRegistro(resp);
            })
        },[]);
    var registrarCompleto = (resp)=>{
        setTodaboleta(resp)
    }
    var registrarRegistro = (resp)=>{
        setRegistro(resp)
        Axios.get('http://localhost:3001/api/consultar/servicio_boleta')
            .then((res)=>{
                setServi(res.data)
                
            }
            );
        Axios.get('http://localhost:3001/api/consultar/adicional_boleta')
        .then((res)=>{
            setAdi(res.data)
        })

            
    }
    

    if(user.rol !== "ADMIN"){
  return <div className=' p-2'>
      <Table striped bordered responsive hover>
          <thead>
              <tr>
                  <th># DE BOLETA</th>
                  <th>DIRECCIÓN DEL EVENTO</th>
                  <th>FECHA DEL EVENTO</th>
                  <th>TIEMPO TOTAL</th>
                  <th>SERVICIOS</th>
                  <th>ADICIONALES</th>
                  <th>OBSERVACIONES</th>
                  <th>NETO</th>
              </tr>
          </thead>
          <tbody>
                  {registro.map((el)=>(
                      <tr>
                      <th>{el.id_boleta}</th>
                      <th>{el.direccion_evento}</th>
                      <th>{el.fecha_evento.slice(0,10)}</th>
                      <th>{el.tiempo_total} minutos</th>
                      <th><ul>{servi.map((elem)=>(
                          elem.id_boleta==el.id_boleta?
                          
                              <li>{elem.nombre}</li>
                          :<div></div>
                      ))}</ul></th>
                      <th>{adi.map((elem)=>(
                          elem.id_boleta==el.id_boleta?
                          
                              <li>{elem.nombre_adicional}</li>
                          :<div></div>
                      ))}</th>
                      <th>{el.observaciones}</th>
                      <th>S/.{el.neto}</th>
                  </tr>
                  ))}
          </tbody>
      </Table>
  </div>;
  }
  else{
    return <div className=' p-2'>
        <Table striped bordered responsive hover>
            <thead>
                <tr>
                    <th># DE BOLETA</th>
                    <th>DNI</th>
                    <th>NOMBRE</th>
                    <th>APELLIDOS</th>
                    <th>CELULAR</th>
                    <th>DIRECCIÓN DEL EVENTO</th>
                    <th>METODO DE PAGO</th>
                    <th>FECHA DEL EVENTO</th>
                    <th>TIEMPO TOTAL</th>
                    <th>SERVICIOS</th>
                    <th>ADICIONALES</th>
                    <th>NETO</th>
                </tr>
            </thead>
            <tbody>
                    {todaboleta.map((el)=>(
                        <tr>
                        <th>{el.id_boleta}</th>
                        <th>{el.dni}</th>
                        <th>{el.nombres}</th>
                        <th>{el.apellidos}</th>
                        <th>{el.celular}</th>
                        <th>{el.direccion_evento}</th>
                        <th>{el.metodo_pago}</th>
                        <th>{el.fecha_evento.slice(0,10)}</th>
                        <th>{el.tiempo_total} minutos</th>
                        <th><ul>{servi.map((elem)=>(
                            elem.id_boleta==el.id_boleta?
                                <li>{elem.nombre}</li>
                            :<div></div>
                        ))}</ul></th>
                        <th>{adi.map((elem)=>(
                            elem.id_boleta==el.id_boleta?
                            
                                <li>{elem.nombre_adicional}</li>
                            :<div></div>
                        ))}</th>
                        <th>S/.{el.neto}</th>
                    </tr>
                    ))}
            </tbody>
        </Table>
    </div>;
    }
}
