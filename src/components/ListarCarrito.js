import React, { useContext } from 'react';
import { Col, Offcanvas, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../Context';

export default function ListarCarrito() {
    const { carrito, setCarrito} = useContext(CarritoContext);
    
    var total=0;
    var tiempo = 0;
    carrito.map((el)=>{
        total= total + el.precio;
        tiempo = tiempo + el.tiempo
    })

    function eliminarCarrito(e){
        var newCarrito1 = carrito.slice();
        var newCarrito = newCarrito1.filter(elem => elem.nombre !== e.target.id);
        setCarrito(newCarrito);
        
    }
    
  return <div>
      <Offcanvas.Body className="text-center">
      {carrito.map((el)=>(
          <div className='objetocanasta'>
              <Row>
                  <Col md="4" className='p-2'>
                       <img src={el.logo} className='logocarrito' alt="sa"/> 
                  </Col>
                  <Col md="8" className='col2carrito'>
                        <h5 className='fw-bold'>{el.nombre.replaceAll("-"," ")}</h5>
                        <h5>Precio: S/.{el.precio}</h5>
                        <h5>Duracion: {el.tiempo} minutos</h5>
                        <button id={el.nombre} onClick={(e)=>eliminarCarrito(e)} className='clean_boton bg-transparent float-end'>🧺</button>
                  </Col>
              </Row>
          </div>
      ))}
      </Offcanvas.Body>
      
      {carrito.length>0?(
                  <div className="footercarrito">
                    <h5>Total: S/.{total}</h5>
                    <h5>Duración: {tiempo} minutos</h5>
                    <br/>
                    <Link to="datos_boleta" className="clean_link">
                    <button className="clean_boton ingresarboton fs-4 w-100">
                  COMPRAR
                </button>
                </Link>
                  </div>
                ):
                <p></p>}
  </div>;
}
