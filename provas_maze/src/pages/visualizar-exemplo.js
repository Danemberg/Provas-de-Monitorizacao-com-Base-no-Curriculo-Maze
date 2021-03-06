import React, {useEffect,useState} from 'react';
import {Link,  useParams} from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const VisualizarExemplo = () =>{
    const {logout} = useAuth0();
    const {id} = useParams();
    const [exemplos, setExemplo] = useState({
        conteudo:""

    });
    const{conteudo} = exemplos;

      useEffect(()=>{
           loadExemplos();
      }, []);
      const loadExemplos = async () =>{
          const result = await axios.get(`http://192.168.1.84/projeto-maze/web/rest/exemplos/${id}`);
          setExemplo(result.data)
      }
   
        return(
            <div>
                <nav className="navbar navbar-expand-lg my-navbar">     
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <img className="navbar-left" src={Logo} height="50" width="80" />
                                </li>
                                <li>
                                     <Link to="/listar-exemplos"><i class="material-icons icone-redirect">subdirectory_arrow_left</i></Link>  
                                   </li>
                                <li className="nav-item active title-navbar">
                                        Plataforma para geração de Provas de Monitorização com base no currículo - Maze
                                </li>
                                <li className="nav-item item-navbar">
                                    <Link onClick={()=>logout()} className="nav-link item-navbar" to="/">Sair</Link>
                                </li>
                            </ul>  
                        </div>
                    </nav>
                    
            <ul className="texto">
                <p>{conteudo}</p>
            </ul>                          
                    
            </div>
        )
       
    }


export default VisualizarExemplo;