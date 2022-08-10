import React, { useContext, useState } from "react";
import MagicWhite from "../images/iconos/White/Magic_icon.png";
import { Col, Offcanvas, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CarritoContext, UserContext } from "../Context";
import ListarCarrito from "./ListarCarrito";

export default function LoginButtons() {
  const { user } = useContext(UserContext);
  const { carrito} = useContext(CarritoContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  if (!user.nombre) {
    return (
      <div>
        <Row>
          <Col xs={8} style={{ textAlign: "-webkit-right" }}>
            <Link to="Login_registrar" className="clean_link">
              <button className="botonlogin p-1 align-items-center botonlogin d-flex justify-content-around">
                MI CUENTA{" "}
                <img
                  src={MagicWhite}
                  alt="Magic"
                  className="iconpequeño fondoiconpequeño"
                />
              </button>
            </Link>
          </Col>
          <Col xs={4} style={{ alignSelf: "center" }}>
            <button className="botoncarrito" disabled>
              <div className="fondocarrito">
                <svg
                  width="18"
                  height="21"
                  viewBox="0 0 18 21"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svgwhite"
                >
                  <path
                    d="M16.712 5.728a.643.643 0 00-.64-.585h-3.215V3.857A3.86 3.86 0 009 0a3.861 3.861 0 00-3.857 3.857v1.286H1.929a.643.643 0 00-.64.585L.002 19.87a.642.642 0 00.64.7h16.714a.64.64 0 00.64-.7L16.712 5.728zM6.429 3.858A2.574 2.574 0 019 1.285a2.574 2.574 0 012.571 2.571v1.286H6.43V3.857zM1.347 19.285L2.515 6.429h2.628v1.463A1.28 1.28 0 004.5 9a1.286 1.286 0 002.571 0c0-.474-.26-.885-.642-1.108V6.43h5.142v1.463A1.28 1.28 0 0010.93 9a1.286 1.286 0 002.57 0c0-.474-.26-.885-.643-1.108V6.43h2.627l1.169 12.857H1.347z"
                    fill-rule="evenodd"
                    class="icon-empty"
                  ></path>
                </svg>
              </div>
            </button>
          </Col>
        </Row>
      </div>
    );
  } else {
    return (
      <div>
        <Row>
          <Col xs={8} style={{ textAlign: "-webkit-right" }}>
            <Link to="Micuenta" className="clean_link">
              <button className="botonlogin p-1 align-items-center botonlogin d-flex justify-content-around">
                MI CUENTA{" "}
                <img
                  src={MagicWhite}
                  alt="Magic2"
                  className="iconpequeño fondoiconpequeño"
                />
              </button>
            </Link>
          </Col>
          <Col xs={4} style={{ alignSelf: "center" }}>
            <button
              className="botoncarrito"
              onClick={handleShow}
            >
              <div className="fondocarrito">
                <svg
                  width="18"
                  height="21"
                  viewBox="0 0 18 21"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svgwhite"
                >
                  <path
                    d="M16.712 5.728a.643.643 0 00-.64-.585h-3.215V3.857A3.86 3.86 0 009 0a3.861 3.861 0 00-3.857 3.857v1.286H1.929a.643.643 0 00-.64.585L.002 19.87a.642.642 0 00.64.7h16.714a.64.64 0 00.64-.7L16.712 5.728zM6.429 3.858A2.574 2.574 0 019 1.285a2.574 2.574 0 012.571 2.571v1.286H6.43V3.857zM1.347 19.285L2.515 6.429h2.628v1.463A1.28 1.28 0 004.5 9a1.286 1.286 0 002.571 0c0-.474-.26-.885-.642-1.108V6.43h5.142v1.463A1.28 1.28 0 0010.93 9a1.286 1.286 0 002.57 0c0-.474-.26-.885-.643-1.108V6.43h2.627l1.169 12.857H1.347z"
                    fill-rule="evenodd"
                    class="icon-empty"
                  ></path>
                </svg>
              </div>
            </button>
            <Offcanvas show={show} onHide={handleClose} placement="end" className="ofcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> {carrito.length>0?<h5>MI CARRITO:</h5>:<h5>NO HAY ELEMENTOS EN EL CARRITO</h5>}</Offcanvas.Title>
        </Offcanvas.Header>
        {carrito.length>0?(
                  <ListarCarrito/>
                ):<p></p>}
      </Offcanvas>
            <div
              className="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header">
                {carrito.length>0?<h5>MI CARRITO:</h5>:<h5>NO HAY ELEMENTOS EN EL CARRITO</h5>}
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              
                
              
                
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
