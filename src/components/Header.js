import React, { useState } from "react";
import LoginButtons from "./LoginButtons";
import telefono from "../images/iconos/telefono.jpg";
import { Link } from "react-router-dom";
import Logo from "../images/Logos/horizontal/DGLogocolorido_horizontal.png"
import LogoRojo from "../images/Logos/horizontal/DGLogorojo_horizontal.png"
import { Button, Modal } from "react-bootstrap";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var hoverlogoin = ()=>{
    document.getElementById("logoheader").src = LogoRojo;
  }
  var hoverlogoout = ()=>{
    document.getElementById("logoheader").src = Logo;
  }
  return (
    <div>
      <div className="row header1 p-2">
        <div className="col-3">
          <Link to="/" className="clean_link">
        <img src={Logo} id="logoheader" onMouseOut={hoverlogoout} onMouseOver={hoverlogoin} alt="logo" style={{width:'250px',position:'absolute',padding:'8px 0px 0px 20px'}}/>
        </Link>
        </div>
        <div className="col-6"></div>
        <div className="col-3">
          <LoginButtons />
        </div>
      </div>
      <div className="row header2">
        <div className="col-5">
        
        </div>
        <div className="col">
          <button
            className="header_option dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            CONÓCENOS
          </button>
          <ul
            className="dropdown-menu font-monospace"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>  
              <a className="dropdown-item" href="/#Qsomos">
                ¿Quienes somos?
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/#PreguntasF">
                Preguntas frecuentes
              </a>
            </li>
          </ul>
        </div>
        <div className="col">
          <button
            className="header_option dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            SERVICIOS
          </button>
          <ul
            className="dropdown-menu font-monospace"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <Link to="servicios/Diver-Magia" className="clean_link">
                <a className="dropdown-item" href="#a">
                  Diver-Magia
                </a>
              </Link>
            </li>
            <li>
              <Link to="servicios/Diver-Ciencia" className="clean_link">
                <a className="dropdown-item" href="#b">
                  Diver-Ciencia
                </a>
              </Link>
            </li>
            <li>
              <Link to="servicios/Diver-Titeres" className="clean_link">
                <a className="dropdown-item" href="#c">
                  Diver-Titeres
                </a>
              </Link>
            </li>
            <li>
              <Link to="servicios/Diver-Burbujas" className="clean_link">
                <a className="dropdown-item" href="#d">
                  Diver-Burbujas
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <button
            className="header_option dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ contain: "layout" }}
          >
            PROMOCIONES
          </button>
          <ul
            className="dropdown-menu font-monospace"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
            <Link to="promociones/Diver-Promocion-1" className="clean_link">
              <a className="dropdown-item" href="#r">
                Diver-Promo 1
              </a>
              </Link>
            </li>
            <li>
            <Link to="promociones/Diver-Promocion-2" className="clean_link">
              <a className="dropdown-item" href="#e">
                Diver-Promo 2
              </a>
              </Link>
            </li>
            <li>
            <Link to="promociones/Diver-Fiesta-Princesas" className="clean_link">
              <a className="dropdown-item" href="#f">
                Diver-Fiesta con Princesas
              </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col">
            <div className="header_option header_option2 contacto" onClick={handleShow}>
              CONTACTO{" "}
              <img src={telefono} className="telefono" style={{ width: "24px" }} alt="telefono" />{" "}
            </div>
        </div>
        
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>CONTACTOS Y REFERENCIAS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>📞 930 310 761</p>
        <p>📧 divergiro@gmail.com</p>
        <p>✔<a href="https://wa.link/qtgxkx"> https://wa.link/qtgxkx</a></p>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>CERRAR</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
