import React from "react";
import { Col, Row } from "react-bootstrap";

export default function PreguntasF() {
  return (
    <div id="PreguntasF" >
      <center>
        <h1 className="text-danger">Preguntas Mas Frecuentes</h1>
        <hr></hr>
        <br></br>
        <Row>
          <Col md="5">
          <br></br>
            <h4><i>¿Con qué formas de pago cuentan?</i></h4>
          </Col>
          <Col md="2">
            <img
              src="https://cdn.discordapp.com/attachments/847517027823779841/938327998837424128/pngwing.com_1.png"
              width="120"
              alt="alt"
              height="100"
            ></img>
          </Col>
          <Col md="5">
            <i>
            <br></br>
              Efectivo, POS, transferencias y aplicaciones de pagos en línea.
            </i>
          </Col>
        </Row>
        <hr></hr>
        <br></br>
        <Row>
          <Col md="5">
          <br></br>
            <h4><i>¿Ofrecen sus servicios a provincia?</i></h4>
          </Col>
          <Col md="2">
            <img
              src="https://cdn.discordapp.com/attachments/847517027823779841/938327998837424128/pngwing.com_1.png"
              width="120"
              alt="sa"
              height="100"
            ></img>
          </Col>
          <Col md="5">
          <br></br>
            <i>
              Aunque nos encanta ir a dónde nuestros clientes nos inviten,
              nuestra zona de operación es el departamento de Lima.
            </i>
          </Col>
        </Row>
        <hr></hr>
        <br></br>
        <Row>
          <Col md="5">
          <br></br>
            <h4><i>¿Hay descuentos para clientes frecuentes?</i></h4>
          </Col>
          <Col md="2">
            <img
              src="https://cdn.discordapp.com/attachments/847517027823779841/938327998837424128/pngwing.com_1.png"
              width="120"
              height="100"
              alt="as"
            ></img>
          </Col>
          <Col md="5">
          <br></br>
            <i>
              Lamentablemente no contamos actualmente con esa propiedad debido a
              los gastos que suponen realizar los shows virtuales
            </i>
          </Col>
        </Row>
        <hr></hr>
        <br></br>
        <Row>
          <Col md="5">
          <br></br>
            <h4><i>¿Los niños disfrutan de un espacio virtual?</i></h4>
          </Col>
          <Col md="2">
            <img
              src="https://cdn.discordapp.com/attachments/847517027823779841/938327998837424128/pngwing.com_1.png"
              width="120"
              height="100"
              alt="as2"
            ></img>
          </Col>
          <Col md="5">
          <br></br>
            <i>
              Se le entrega un espacio atractivo y virtual donde pueda
              divertirse de forma segura con sus conocidos y amigos, así se
              encuentren al otro lado del mundo podrán celebrar con él su
              cumpleaños o show infantil de la forma más cercana.
            </i>
          </Col>
        </Row>
        <hr></hr>
        <br></br>
        <br></br>
      </center>
    </div>
  );
}
