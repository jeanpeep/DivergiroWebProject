import React from "react";
import { Col, Row } from "react-bootstrap";
import MafeSaltando from "../images/General/MAFE VOLANDO.png";
import portal_servicios from "../images/General/portal_amarillo.png";
import portal_princesas from "../images/General/portal_princesas.png";
import { Link } from "react-router-dom";
import GiroMago from "../images/General/Giro_mago.png";
import Elsa from "../images/General/Elsa.png";
import TituloRojo from "../images/General/RojoTitle.jpg";
import TituloAzul from "../images/General/AzulTitle.jpg"

export default function VistaPrincipal() {
  return (
    <div className="vista_principal century fontcentury">
      <br />
      <Row style={{ textAlign: "-webkit-center" }}>
        <Col>
          <Link to="/servicios" className="clean_link servicios">
            <img style={{ width: "520px", height: "610px" }} src={portal_servicios} alt="" />
            <img src={MafeSaltando} id="mafe" alt="mafe" />
            <img src={GiroMago} id="giro" alt="giro" />
            <div className="titulo01">
            <h5 className="titulo1">
              DIVERGIRO TE SORPRENDERÁ CON SUS SHOWS DE DIVER-MAGIA,
              DIVER-CIENCIA, DIVER-BURBUJAS Y DIVER-TITERES EN TU CUMPLEAÑOS
            </h5>
            <img src={TituloRojo} alt="titlemenu" className="titlemenu" />
            </div>
          </Link>
        </Col>
        <Col>
        <Link to="/promociones/Diver-Fiesta-Princesas" className="clean_link princesas">
          <img style={{ width: "420px" }} src={portal_princesas} alt="" />
          <img
            src={Elsa}
            alt="elsa"
            className="elsa"
          />
          <h5 className="titulo2">
              NUESTRAS DIVER-PRINCESAS LLEGARÁN DESDE SUS REINOS PARA CONVERTIR TU FIESTA EN UNA DIVER-FIESTA
            </h5>
          <img src={TituloAzul} className="titlemenu2" alt=""/>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
