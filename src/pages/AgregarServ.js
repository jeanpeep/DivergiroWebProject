import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Axios from 'axios'
import { useNavigate } from "react-router-dom";
export default function AgregarServ() {
  var navigate = useNavigate();

  var ValidarServicio = (e)=>{
    e.preventDefault();
    var nombre = document.getElementById("nombre").value;
    nombre = nombre.replaceAll(" ","-");
    var precio = document.getElementById("precio").value;
    var tiempo = document.getElementById("tiempo").value;
    var descripcion = document.getElementById("descripcion").value;
    var Banner_img = document.getElementById("Banner_img").value;
    var Portada_img = document.getElementById("Portada_img").value;
    var categoria = document.getElementById("categoria").value
    var incluye1 = document.getElementById("incluye1").value;
    var incluye2 = document.getElementById("incluye2").value;
    var incluye3 = document.getElementById("incluye3").value;
    var logo = document.getElementById("logo").value;
    var incluye = `<ul><li>${incluye1}</li><li>${incluye2}</li><li>${incluye3}</li></ul>`;
    
    
    Axios.post('http://localhost:3001/api/insert/servicio',{
      nombre:nombre,
      precio:precio,
      tiempo:tiempo,
      descripcion:descripcion,
      Banner_img:Banner_img,
      Portada_img:Portada_img,
      categoria:categoria,
      incluye:incluye,
      logo:logo
    }).then(res=>navigate(`/servicios/${nombre}`, { replace: true }))
  }

  return (
    <div className="container">
      <Form onSubmit={ValidarServicio}>
        <Row>
          <Col>
            <br />

            <Row>
              <Col>
                <p className="ps-3 fs-4" style={{ fontWeight: "550" }}>
                  REGISTRAR SERVICIO
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control
                  required="required"
                  id="nombre"
                  style={{ borderRadius: "25px", border: "solid 1px" }}
                  type="text"
                  placeholder="NOMBRE"
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Form.Control
                  required="required"
                  id="precio"
                  style={{ borderRadius: "25px", border: "solid 1px" }}
                  type="number"
                  placeholder="PRECIO"
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Form.Control
                  required="required"
                  id="tiempo"
                  style={{ borderRadius: "25px", border: "solid 1px" }}
                  type="number"
                  placeholder="TIEMPO"
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Form.Control
                  id="descripcion"
                  required="required"
                  type="text"
                  as="textarea"
                  style={{ borderRadius: "25px", border: "solid 1px" }}
                  placeholder="DESCRIPCION"
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Form.Control
                  required="required"
                  id="Banner_img"
                  style={{ borderRadius: "25px", border: "solid 1px" }}
                  type="text"
                  placeholder="URL IMAGEN VERTICAL"
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Form.Control
                  required="required"
                  id="Portada_img"
                  style={{ borderRadius: "25px", border: "solid 1px" }}
                  type="text"
                  placeholder="URL IMAGEN HORIZONTAL MINIATURA"
                />
              </Col>
            </Row>
            <br />
          </Col>
          <Col>
            <br />
            <br />
            <br />
            <Row>
              <Col>
                <Form.Select id="categoria">
                  <option disabled selected>
                    Categoría
                  </option>
                  <option value="servicio">Servicio</option>
                  <option value="promocion">Promoción</option>
                </Form.Select>{" "}
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Form.Label>Incluye:</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control
                  required="required"
                  id="incluye1"
                  style={{ borderRadius: "25px", border: "solid 1px" }}
                  type="text"
                  placeholder="1"
                />
              </Col>
              <Col>
                <Form.Control
                  required="required"
                  id="incluye2"
                  style={{ borderRadius: "25px", border: "solid 1px" }}
                  type="text"
                  placeholder="2"
                />
              </Col>
            </Row>
            <br/>
            <Row>
                <Col><Form.Control
                  required="required"
                  id="incluye3"
                  style={{ borderRadius: "25px", border: "solid 1px" }}
                  type="text"
                  placeholder="3"
                /></Col>
            </Row>
            <br />
            <Row>
                <Col><Form.Control
                  required="required"
                  id="logo"
                  style={{ borderRadius: "25px", border: "solid 1px" }}
                  type="text"
                  placeholder="URL Logo"
                /></Col>
            </Row>
            <br />
          </Col>
          <br/>
          
            <br />
          
        </Row>
        <br/>
        <Row style={{ padding: "0px 15px" }}>
            <button className="clean_boton ingresarboton" type="submit">
              INGRESAR
            </button>
          </Row>
      </Form>
    </div>
  );
}
