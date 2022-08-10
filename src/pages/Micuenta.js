import React, { useContext } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { UserContext } from "../Context";
import { Link, useNavigate } from "react-router-dom";
export default function Micuenta() {
  var navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  var desloguearme = ()=>{
    setUser({});
    navigate("/", { replace: true })
  }
  return (
    <div className="container pt-5">
      <Row>
        <Col>
          <Row>
            <Col>
              <h1 className="text-danger">NOMBRE:</h1>
            </Col>
            <Col>
              <h2>{user.nombre}</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1 className="text-danger">APELLIDOS:</h1>
            </Col>
            <Col>
              <h2>{user.apellidos}</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1 className="text-danger">DNI:</h1>
            </Col>
            <Col>
              <h2>{user.dni}</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className="text-danger">ROL:</h2>
            </Col>
            <Col>
              <h2>{user.rol}</h2>
            </Col>
          </Row>
        </Col>
        <Col>
          <div className="CuentaAcciones text-center p-4">
            {user.rol == "ADMIN" ? (
              <Row>
                <Col>
                  <Link to="Pedidos">
                    <Button className="botonAccion" variant="warning">
                      HISTORIAL DE TODOS LOS PEDIDOS
                    </Button>
                  </Link>
                </Col>
              </Row>
            ) : (
              <Row>
                <Col>
                  <Link to="Pedidos">
                    <Button className="botonAccion" variant="warning">
                      HISTORIAL DE TUS PEDIDOS
                    </Button>
                  </Link>
                </Col>
              </Row>
            )}
            <Row>
              <Col>
                <Button className="botonAccion" variant="danger" onClick={desloguearme}>
                  DESLOGUEARTE
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
