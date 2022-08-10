import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CarritoContext, ServicioContext, UserContext } from "../Context";
import RojoTitle from "../images/General/RojoTitle.jpg";
import NaranjaTitle from "../images/General/NaranjaTitle.jpg";
import AmarilloTitle from '../images/General/AmarilloTitle.jpg'
import Axios from 'axios'

export default function Promocion() {
  const { id } = useParams();
  const [idd,setIdd] = useState();
  const { servicio } = useContext(ServicioContext);
  const { user } = useContext(UserContext);
  const {carrito, setCarrito} = useContext(CarritoContext);
  const [show, setShow] = useState(false);
  var navigate = useNavigate();
  useEffect(() => {
    servicio.map(serv=>{
      setIdd(serv.id_servicio);
    })
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  var EliminarServicio = ()=>{
    Axios.post('http://localhost:3001/api/delete/servicio',{
      id_servicio : idd
    }).then(el=>{
      navigate("/", { replace: true })
    });
  } 

  var agregarCarrito = () => {
    servicio.map((serv) => {
      if (serv.nombre == id) {
        if (carrito.length > 0) {
          var yaesta= false;
          carrito.map((el)=>{
            if(el.nombre==id){
              yaesta=true;
            }
          });
          if(yaesta){
            document.getElementById(id).innerHTML = 'Ya ha sido agregado al carrito';
            document.getElementById(id).disabled = true
          }
            else{
              setCarrito([...carrito, serv]);
              document.getElementById(id).innerHTML = 'Ya ha sido agregado al carrito';
            document.getElementById(id).disabled = true
            };
        } else {
          setCarrito((carrito) => [...carrito, serv]);
          document.getElementById(id).innerHTML = 'Ya ha sido agregado al carrito';
            document.getElementById(id).disabled = true
        }
      }
    });
  };

  return (
    <div className="container p-1 fontcentury">
      {servicio.map((serv) => {
        var nombre = serv.nombre.replaceAll('-',' ')
        if (serv.nombre == id) {
          return (
            <Row className="pt-2">
              <Col className="w-centerr">
                <img
                  src={serv.Banner_img}
                  className="promocionBanner"
                  alt=""
                />
                <br />
                <br />
                {user.nombre?<button className="clean_boton ingresarboton fs-4" id={id} onClick={agregarCarrito}>
                  LO QUIERO PARA MI FIESTA
                </button>:<button className="clean_boton ingresarboton fs-4" disabled>
                  LO QUIERO PARA MI FIESTA
                </button>}
                <br/>
                  {(user.rol=="ADMIN")?(
                    
                    <div className="servAcciones m-1 ">
                  <h5 className="fw-bold">Acciones de administrador:</h5>
                  <button
                      id="eliminar"
                      className="clean_boton eliminarboton fs-4 m-1"
                      onClick={handleShow}
                    >
                      ELIMINAR SERVICIO
                    </button>
                    <Link to={`/servicios/modificar/${id}`}>
                    <button
                      id="eliminar"
                      className="clean_boton modificarServicio fs-4 m-1"
                    >
                      MODIFICAR SERVICIO
                    </button>
                    </Link>
                    </div>
                    ):<p></p>}
              </Col>
              <Col>
                <Row>
                  <Col>
                    <img src={RojoTitle} className="servtitulo" alt="" />
                    <h4 className="servtitulo2 fw-bold mb-5">
                      {nombre}
                    </h4>
                    <img
                      src={AmarilloTitle}
                      className="servduracion position-absolute"
                      alt=""
                    />
                    <h3 className="fw-bold fw-bold">DURACION:</h3>
                    {serv.tiempo > 45 ? (
                      serv.tiempo == 90 ? (
                        <h3 className="ps-4 mb-4">1:30 hora</h3>
                      ) : (
                        <h3 className="ps-4 mb-4">2 horas</h3>
                      )
                    ) : (
                      <h3 className='ps-4 mb-5'>{serv.tiempo} minutos</h3>
                    )}
                    <img
                      src={AmarilloTitle}
                      className="servprecio position-absolute"
                      alt=""
                    />
                    <h3 className="fw-bold">PRECIO:</h3>
                    <h3 className="ps-4">S/.{serv.precio}</h3>
                  </Col>
                  <Col>
                    <div className="ps-3">
                      <img
                        src={NaranjaTitle}
                        className="promdescripcion"
                        alt=""
                      />
                      <h4 className="fw-bold servdescripcion2">DESCRIPCIÓN:</h4>
                      <h4 className="p-2 fw-bold servdescripcion2">
                        {serv.descripcion}
                      </h4>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="pt-5">
                  <img src={AmarilloTitle} className="servincluye" alt=""/>
                  <div className="text-start servincluye2" dangerouslySetInnerHTML={{ __html: serv.incluye }} />
                  </Col>
                </Row>
              </Col>
            </Row>
          );
        }
      })}
    </div>)
}
