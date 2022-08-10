import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Logearse from '../components/Logearse';
import Registrarse from '../components/Registrarse';

export default function Login_Registrar() {
    const [logear,setLogear] = useState(true)

    var ToggleButtons1 = () =>{
        if(!logear){
            document.getElementById('ingresarbutton').style.backgroundColor='white';
            document.getElementById('registrarbutton').style.backgroundColor='#e9eaeb';
            setLogear(true)
        }
    }
    var ToggleButtons2 = () =>{
        if(logear){
            document.getElementById('ingresarbutton').style.backgroundColor='#e9eaeb';
            document.getElementById('registrarbutton').style.backgroundColor='white';
            setLogear(false)
        }
    }
  return <div className="p-4 fontcentury" style={{ textAlign: "-webkit-center"}}>
      <article className='w-50'>
          <Row className='gutter0'>
              <Col ><button id='ingresarbutton' className='clean_boton login_register_buttons' onClick={ToggleButtons1} style={{backgroundColor:'white'}}>Ingresa</button></Col>
              <Col ><button id='registrarbutton' className='clean_boton login_register_buttons' onClick={ToggleButtons2}>Registrate</button></Col>
          </Row>
          {logear?<Logearse/>:<Registrarse/>}
      </article>
  </div>;
}
