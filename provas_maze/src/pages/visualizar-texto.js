import React, {useEffect,useState} from 'react';
import '../index.css';
import { Link } from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import axios from 'axios';


function VisualizarTexto(){
    const [textos, setTexto] = useState([]);
    
      useEffect(()=>{
           loadTextos();
      }, []);
      const loadTextos = async () =>{
          const result = await axios.get("http://192.168.1.84/projeto-maze/web/rest/textos");
          console.log(result);
          setTexto(result.data)
      }
   
        return(
            <div>
                <nav className="navbar navbar-expand-lg my-navbar">     
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <img className="navbar-left" src={Logo} height="50" width="80" />
                                </li>
                                <li className="nav-item active title-navbar">
                                        Plataforma para geração de Provas de Monitorização com base no currículo - Maze
                                </li>
                                <li className="nav-item item-navbar">
                                    <Link className="nav-link item-navbar" to="/">Sair</Link>
                                </li>
                            </ul>  
                        </div>
                    </nav>
                    {
                    textos.map((texto, index) =>(
                        <div >    
                            <p>{texto.conteudo}</p>
                        </div>   
                ))}
            </div>
        )
       
    }


export default VisualizarTexto;