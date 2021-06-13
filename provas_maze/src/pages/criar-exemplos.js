import React , {useEffect, useState,alert} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import axios from 'axios';
   
   
const CriarExemplos = () => {
    let history = useHistory()
    const {id} = useParams();
    const [exemplos, setExemplo] = useState({
      titulo: "",
      conteudo: "",
      ano: "",
      
    })
useEffect(() => {
    loadExemplos();
}, []);

const loadExemplos = async () =>{
    const result = await axios.get(`http://192.168.1.84/projeto-maze/web/rest/exemplos`)
    setExemplo(result.data);
}
   
    const{titulo,conteudo, ano} = exemplos;
    const onInputChange = e =>{
     setExemplo({...exemplos,[e.target.id]: e.target.value})
    }
    const onSubmit = async e =>{
      e.preventDefault()
      await axios.post("http://192.168.1.84/projeto-maze/web/rest/exemplos", exemplos);
      history.push("/")
    };
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
        <form onSubmit={e =>onSubmit(e)}>
            <div className="card border-danger mb-3 my-card">
                    <div className="card-header titulo">Criar exemplos para provas:
                        <div className="card-body">
                        <div className="col-sm-6">
                        <div className="form-group row campo">
                                <label>Titulo:</label>
                            <div className="col-sm-6">
                                <input type="text" className="form-control" id="titulo" name="titulo"
                                value={exemplos.titulo}
                                onChange={e => onInputChange(e)}/>
                            </div>
                        </div>
                      </div>
                            <div className="col">
                                <div className="form-group row campo">
                                        <label>Insira um exemplo:</label>
                                    <div className="col-lg-10">
                                        <textarea className="form-control" rows="10" id="conteudo" name="conteudo"
                                        value={exemplos.conteudo}
                                        onChange={e => onInputChange(e)}/>
                                    </div>
                                </div>
                                <br></br>
                                <div className="col-sm-3 ">
                                    <div className="form-group row campo">
                                        <label>Ano:</label>
                                        <div className="col-sm-9">
                                        <input className="form-control" id="ano" name="ano" type="text"
                                             value={exemplos.ano}
                                             onChange={e => onInputChange(e)}/>   
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button  type="submit" className="btn botao1">Gerar</button>
                                </div> 
                        </div> 
                    </div> 
                </div> 
            </div>   
        </form>
    </div>
   
        )
    }


export default CriarExemplos;