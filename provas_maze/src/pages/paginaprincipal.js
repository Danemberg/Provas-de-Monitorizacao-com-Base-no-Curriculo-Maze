import React from 'react';
import {Dropdown} from 'react-bootstrap';
import '../index.css';
import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Imagem from '../images/imagem_pagina_principal.png'

class PaginaPrincipal extends React.Component{
    render(){
        return(
            <div>
                <img className="imagem-pp" src={Imagem} height="300" width="300" />
                <br></br>
                Rodrigo Danemberg
                <br></br>
                rdanember@hotmail.com
                <br></br>
                Instituto Politécnico de Bragança
                <br></br>
                Bragança
                <Dropdown className="menu-pp">
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="menu-pp">
                        Texto
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/gerir-textos">Gerir Textos</Dropdown.Item>
                        <Dropdown.Item href="#/listar-textos">Listar Textos</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="menu-pp1">
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="menu-pp1">
                        Prova
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/gerir-textos">Gerir Provas</Dropdown.Item>
                        <Dropdown.Item href="#/listar-textos">Listar Provas</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )   
       
    }
}

export default withRouter (PaginaPrincipal);