import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ServicioContext, UserContext } from '../Context';
import Suma from'../images/General/suma.png'

export default function Servicios() {
  const {servicio} = useContext(ServicioContext);
  const {user} = useContext(UserContext);

  return <div className='pt-4 fontcentury'>
    <h2 className='text-center fw-bold'>SERVICIOS</h2>
    <div className='container p-4'>
      <Row className='justify-content-center'>
        {servicio.map((serv)=>{
          if(serv.categoria=="servicio"){
            return(<Col md="3" className='mb-2'>
              <Link to={`/servicios/${serv.nombre}`} className="clean_link">
                <div className='fila1'>
                <img src={serv.Portada_img} className='img_servicios' alt=''/>
                <br/>
                <br/>
                <h4 className='text-center text-danger'>{serv.nombre}</h4>
                </div>
                </Link>
              </Col>)
          }
        })}
        {user.rol=="ADMIN"?<Col md="3" className='mb-2'>
          <Link to="agregar" className="clean_link">
            <div className='fila1' >
              <img src={Suma}  className='img_servicios p-5'/>
            </div>
            </Link>
          </Col>:<p></p>}
      </Row>
      
      <br/>
      <br/>
      <h2 className='text-center fw-bold'>PROMOCIONES</h2>
      <br/>
      <Row className='justify-content-center'>
        {servicio.map((serv)=>{
          if(serv.categoria=="promocion"){
          var nombre = serv.nombre.replaceAll('-',' ')
            return(<Col md="4" className='mb-4'>
            <Link to={`/promociones/${serv.nombre}`} className="clean_link">
              <div className='fila2'>
              <img src={serv.Banner_img} className='img_servicios2' alt=''/>
              <br/>
              <br/>
              <h4 className='text-center text-danger'>{nombre}</h4>
              </div>
              </Link>
            </Col>)
          }
        })}
        {user.rol=="ADMIN"?<Col md="3">
          <Link to="agregar" className="clean_link">
            <div className='fila1' >
              <img src={Suma}  className='img_servicios p-5'/>
              <br/>
            </div>
            </Link>
          </Col>:<p></p>}
      </Row>
      </div>
    </div>;
}
