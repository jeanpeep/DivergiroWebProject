import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Registrarse() {
  const navigate = useNavigate();
  var validarusuariobd = (
    dni,
    nombres,
    apellidos,
    correo,
    celular,
    contrasena
  ) => {
    Axios.post("http://localhost:3001/api/consultar/usuario", {
      dni: dni,
    }).then((res) => {
      var resp = res.data;
      if (resp.length === 0) {
        registrar(dni, nombres, apellidos, correo, celular, contrasena);
      } else {
        document.getElementById("advertencia").style.display = "";
      }
    });
  };
  var validacion = (e) => {
    e.preventDefault();
    let dni = document.getElementById("dni");
    let nombres = document.getElementById("nombres");
    let apellidos = document.getElementById("apellidos");
    let correo = document.getElementById("correo");
    let celular = document.getElementById("celular");
    let contrasena = document.getElementById("contrasena");
    let validado = true;
    if (dni.value.length !== 8) {
      dni.style.border = "3px solid red";
      dni.value = "";
      dni.placeholder = "El campo 'DNI' debe contar con 8 dígitos";
      validado = false;
    }
    if (celular.value.length !== 9) {
      celular.style.border = "3px solid red";
      celular.value = "";
      celular.placeholder = "El campo 'CELULAR' Debe contar con 9 dígitos";
      validado = false;
    }
    if (validado) {
      validarusuariobd(
        dni.value,
        nombres.value,
        apellidos.value,
        correo.value,
        celular.value,
        contrasena.value
      );
    }
  };
  var registrar = (dni, nombres, apellidos, correo, celular, contrasena) => {
    Axios.post("http://localhost:3001/api/insert/usuario", {
      dni: dni,
      nombres: nombres,
      apellidos: apellidos,
      correo: correo,
      celular: celular,
    }).then(()=>{
      Axios.post("http://localhost:3001/api/insert/login",{
    contrasena : contrasena,  
    dni: dni,
    rol: 'CLIENTE'
    })
    }).then(()=>{
      navigate("/", { replace: true })
    })
    
  };
  var dnichange = () => {
    document.getElementById("advertencia").style.display = "none";
  };

  return (
    <div className="p-3 bg-white" style={{ textAlign: "initial" }}>
      <br />
      <Form onSubmit={validacion}>
        <Row>
          <Col md={3}>
            <p className="ps-3 fs-4" style={{ fontWeight: "550" }}>
              REGÍSTRATE
            </p>
          </Col>
          <Col>
            <p
              id="advertencia"
              className="ps-3 fs-5 text-danger"
              style={{ display: "none" }}
            >
              ESTE USUARIO YA HA SIDO REGISTRADO
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Control
              id="dni"
              style={{ borderRadius: "25px", border: "solid 1px" }}
              required="required"
              type="number"
              onChange={dnichange}
              placeholder="DNI"
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Form.Control
              id="nombres"
              style={{ borderRadius: "25px", border: "solid 1px" }}
              required="required"
              type="text"
              placeholder="NOMBRE"
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Form.Control
              id="apellidos"
              style={{ borderRadius: "25px", border: "solid 1px" }}
              required="required"
              type="text"
              placeholder="APELLIDOS"
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Form.Control
              id="correo"
              style={{ borderRadius: "25px", border: "solid 1px" }}
              required="required"
              type="text"
              placeholder="CORREO"
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Form.Control
              id="celular"
              style={{ borderRadius: "25px", border: "solid 1px" }}
              required="required"
              type="number"
              placeholder="CELULAR"
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Form.Control
              id="contrasena"
              style={{ borderRadius: "25px", border: "solid 1px" }}
              required="required"
              type="password"
              name="contrasena"
              placeholder="CONTRASEÑA"
            />
          </Col>
        </Row>
        <br />
        <Row style={{ padding: "0px 15px" }}>
          <button className="clean_boton ingresarboton" type="submit">
            REGISTRAR
          </button>
        </Row>
      </Form>
    </div>
  );
}
