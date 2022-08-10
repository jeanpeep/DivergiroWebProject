import React, { useContext, useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { CarritoContext, UserContext } from "../Context";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Datos_Boleta() {
  const { carrito, setCarrito } = useContext(CarritoContext);
  const [adicionales, setAdicionales] = useState([]);
  const [fecha, setFecha] = useState();
  const { user } = useContext(UserContext);
  var navigate = useNavigate();

  useEffect(() => {
    var today = new Date();

    var año = today.getFullYear();
    var mes =
      (today.getMonth() + 1).lenght > 1
        ? today.getMonth() + 1
        : "0" + parseInt(today.getMonth() + 1);
    var dia =
      today.getDate().lenght > 9 ? today.getDate() : "0" + today.getDate();
    var fecha1 = año + "-" + mes + "-" + dia;
    setFecha(fecha1);
    Axios.get("http://localhost:3001/api/listar/adicional").then((res) => {
      var resp = res.data;
      setAdicionales(resp);
    });
  }, []);

  var total = 0;
  var tiempo = 0;
  carrito.map((el) => {
    total = total + el.precio;
    tiempo = tiempo + el.tiempo;
  });

  function eliminarCarrito(e) {
    var newCarrito1 = carrito.slice();
    var newCarrito = newCarrito1.filter((elem) => elem.nombre !== e.target.id);
    setCarrito(newCarrito);
  }
  var ValidarRegistro = (e) => {
    e.preventDefault();
    var dni = user.dni;
    var observaciones = document.getElementById("observaciones").value;
    var direccion_evento = document.getElementById("direccion").value;
    var metodo_pago = document.getElementById("metodo").value;
    var fecha_evento = document.getElementById("fechaevento").value;
    var fecha_creacion = fecha;
    var tiempo_total = tiempo;
    var adicionalesTemp = [];
    adicionales.map((ad) => {
      if (document.getElementById(ad.id_adicional).checked) {
        adicionalesTemp.push(ad);
        total=total+ad.precio_adicional
      }
    });
    var neto = total;
    enviarRegistro(
      neto,
      dni,
      observaciones,
      direccion_evento,
      metodo_pago,
      fecha_evento,
      fecha_creacion,
      tiempo_total,
      adicionalesTemp
    );
  };
  var enviarRegistro = (
    neto,
    dni,
    observaciones,
    direccion_evento,
    metodo_pago,
    fecha_evento,
    fecha_creacion,
    tiempo_total,
    adicionalesTemp
  ) => {
    Axios.post("http://localhost:3001/api/insert/boleta",{
        neto : neto,
        dni:dni,
        observaciones:observaciones,
        direccion_evento: direccion_evento,
        metodo_pago:metodo_pago,
        fecha_evento: fecha_evento,
        fecha_creacion:fecha_creacion,
        tiempo_total: tiempo_total
        }).then((res)=>{
            var resp = res.data;
            
            var id_boleta = resp[resp.length-1].id_boleta;
            registrarServicio_Adicional(id_boleta, adicionalesTemp);
        })
  };
  var registrarServicio_Adicional = (id_boleta, adicionalesTemp)=>{
    carrito.map((serv)=>{
        Axios.post('http://localhost:3001/api/insert/servicio_boleta',{
            id_servicio: serv.id_servicio,
            id_boleta:id_boleta
        })
    })
    adicionalesTemp.map((ad)=>{
        Axios.post('http://localhost:3001/api/insert/adicional_boleta',{
            id_adicional: ad.id_adicional,
            id_boleta:id_boleta
        }).then((res)=>{ setCarrito([]);
          navigate("/Micuenta/Pedidos", { replace: true })})
    })
      
  }

  return (
    <div className="p-4">
      <Row>
        <Col md="4">
          <div className="text-center carrito_registro">
            {carrito.map((el) => (
              <div className="objetocanasta">
                <Row>
                  <Col md="4" className="p-2">
                    <img src={el.logo} className="logocarrito" alt="sa" />
                  </Col>
                  <Col md="8" className="col2carrito">
                    <h5 className="fw-bold">
                      {el.nombre.replaceAll("-", " ")}
                    </h5>
                    <h5>Precio: S/.{el.precio}</h5>
                    <h5>Duracion: {el.tiempo} minutos</h5>
                    <button
                      id={el.nombre}
                      onClick={(e) => eliminarCarrito(e)}
                      className="clean_boton bg-transparent float-end"
                    >
                      🧺
                    </button>
                  </Col>
                </Row>
              </div>
            ))}
            <div className="footer_registro">
              <h5>Total: S/.{total}</h5>
              <h5>Duración: {tiempo} minutos</h5>
              <br />
            </div>
          </div>
        </Col>
        <Col md="8">
          <Form onSubmit={ValidarRegistro}>
            <Row>
              <Col>
                <p className="ps-3 fs-4" style={{ fontWeight: "550" }}>
                  REGISTRA TU COMPRA
                </p>
              </Col>
              <Col>
                <p
                  id="advertencia"
                  className="ps-3 fs-5 text-danger"
                  style={{ display: "none" }}
                >
                  REGISTRO INVALIDO
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control
                  required="required"
                  id="direccion"
                  style={{ borderRadius: "25px", border: "solid 1px" }}
                  type="text"
                  placeholder="DIRECCIÓN"
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Form.Control
                  required="required"
                  id="metodo"
                  style={{ borderRadius: "25px", border: "solid 1px" }}
                  type="text"
                  placeholder="METODO DE PAGO"
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Form.Label className="ps-1">Fecha del evento:</Form.Label>
                <Form.Control
                  required="required"
                  id="fechaevento"
                  style={{ borderRadius: "25px", border: "solid 1px" }}
                  type="date"
                  min={fecha}
                />
              </Col>
              <Col>
                <Form.Label>Observaciones del evento:</Form.Label>
                <Form.Control
                  id="observaciones"
                  className="position-absolute"
                  as="textarea"
                  style={{
                    height: "100px",
                    borderRadius: "25px",
                    border: "solid 1px",
                    width: "400px",
                    height: "320px",
                  }}
                  placeholder="OBSERBACIONES"
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col md="6">
                <Form.Label>Elige tus adicionales:</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                {adicionales.map((el) => (
                  <AdicionalBox adic={el} />
                ))}
              </Col>
            </Row>
            <br />
            <Row style={{ padding: "0px 15px" }}>
              <button className="clean_boton ingresarboton" type="submit">
                COMPRAR
              </button>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

function AdicionalBox(props) {
  return (
    <div className="">
      <Row className="mb-2">
        <Col md="2">
          <img src={props.adic.imagen} className="imgAdic" alt="" />
        </Col>
        <Col>
          <Row>
            <Col>
              <b>
                <Form.Check
                  id={props.adic.id_adicional}
                  inline
                  className={props.adic.precio_adicional}
                  label={props.adic.nombre_adicional}
                  type="checkbox"
                />
              </b>
            </Col>
          </Row>
          <Row>
            <Col>Precio: S/.{props.adic.precio_adicional}</Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
