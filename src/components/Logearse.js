import React, { useContext, useEffect } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context";

export default function Logearse() {
  const { user, setUser } = useContext(UserContext);
  var navigate = useNavigate();

  useEffect(() => {
    const dni = localStorage.getItem("dni");
    const cont = localStorage.getItem("contrasena");
    if(dni&&cont){
      document.getElementById("dni").value=(JSON.parse(dni));
      document.getElementById("contrasena").value=(JSON.parse(cont))
    }
  }, []);
  

  var validacion = (e)=>{
    e.preventDefault();
    var validado = true;
    let dni = document.getElementById("dni");
    let contrasena = document.getElementById("contrasena").value;
    if (dni.value.length !== 8) {
      dni.style.border = "3px solid red";
      dni.value = "";
      dni.placeholder = "El campo 'DNI' debe contar con 8 dígitos";
      validado = false;
    }
    if(validado){
      validarlogin(dni.value,contrasena)
    }
  }
  var validarlogin = (dni,contrasena)=>{
    Axios.post("http://localhost:3001/api/consultar/login", {
      dni: dni,
    }).then((res) => {
      var resp = res.data;
      if (resp.length === 0) {
        document.getElementById("advertencia").style.display = "";
      } else {
        if(resp[0].contrasena===contrasena){
          Axios.post("http://localhost:3001/api/consultar/usuario", {
          dni: dni,
          }).then((res2)=>{
            localStorage.setItem('dni',JSON.stringify(dni));
          localStorage.setItem('contrasena',JSON.stringify(contrasena));
            var resp2 = res2.data;
            setUser({
              dni : dni,
              rol : resp[0].rol,
              nombre : resp2[0].nombres,
              apellidos : resp2[0].apellidos,
              email : resp2[0].email,
              celular : resp2[0].celular,
              contrasena : resp[0].contrasena
            });
            alert('INGRESO EXITOSO');
            alert(`BIENVENIDO: ${resp2[0].nombres} ${resp2[0].apellidos}`);
            navigate("/", { replace: true })
          })
        }
        else{
          document.getElementById("advertencia").style.display = "";
        }
      }
    });
  }
  return <div  className='p-3 bg-white' style={{ textAlign: "initial"}}>
   <br/>
   <Form onSubmit={validacion}>
   <Row>
       <Col><p className='ps-3 fs-4' style={{fontWeight:'550'}}>INGRESA</p></Col>
       <Col>
            <p
              id="advertencia"
              className="ps-3 fs-5 text-danger"
              style={{ display: "none" }}
            >
              INGRESO INVALIDO
            </p>
          </Col>
   </Row>
   <Row>
        <Col><Form.Control required="required" id="dni" style={{borderRadius:'25px',border: 'solid 1px'}} type="text" placeholder="DNI" /></Col>

   </Row>
   <br/>
   <Row>
     <Col><Form.Control required="required" id="contrasena" style={{borderRadius:'25px',border: 'solid 1px'}} type="password" placeholder="CONTRASEÑA" /></Col>
   </Row>
   <br/>
   <Row style={{padding:'0px 15px'}}>
     <button className='clean_boton ingresarboton' type="submit">INGRESAR</button>
   </Row>
   </Form>
  </div>;
}
