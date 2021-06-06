import React , {useState,alert, useEffect} from 'react'
import '../index.css';
import {Link, useHistory, useParams} from 'react-router-dom'
import Logo from '../images/LogoMBCL.png';
import axios from 'axios';

const RegistoUtilizador = () => {
    let history = useHistory()
    const {id} = useParams();
    const [utilizadores, setUtilizador] = useState({
        nome: "",
        email: "",
        senha: "",
        tipo_de_utilizador: "",
        entidade_id: "",
    })
   
    const{nome, email, senha, tipo_de_utilizador, entidade_id} = utilizadores;
    const onInputChange = e =>{
     setUtilizador({...utilizadores,[e.target.email]: e.target.value});
    };

    useEffect(() => {
        loadUtilizadores();
    }, []);
    
    const onSubmit = async e =>{
      e.preventDefault()
      await axios.put(`http://192.168.1.84/projeto-maze/web/rest/utilizadors/${id}`, utilizadores);
      history.push("/validar-utilizador-admin")
    };
    
    const loadUtilizadores = async () =>{
        const result = await axios.get(`http://192.168.1.84/projeto-maze/web/rest/utilizadors/${id}`)
        setUtilizador(result.data);
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
            <div className="card border-danger mb-3 my-card">
                <div className="card-header titulo">Registo de utilizador:
                    <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row campo">
                                <label for="exampleInputPassword1">Nome:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control " id="exampleInputPassword1" 
                                 value={nome}
                                 onChange={e => onInputChange(e)}/>
                            </div>
                        </div>
                            <div className="form-group row campo">
                                    <label for="exampleInputEmail1">Email:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    value={email}
                                   onChange={e => onInputChange(e)}/>
                                </div>
                            </div>
                      </div>
                    </div>
                        <div className="row">
                            <div className="col-lg-6 ">
                                <div className="form-group row campo">
                                      <label for="exampleSelect1">Entidade:</label>
                                    <div className="col-sm-9">
                                        <select className="form-control" id="exampleSelect1">
                                        <option></option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                                <div className="col-md-6 ">
                                <div className="form-group row campo">
                                        <label for="exampleInputEmail1">Outros:</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 ">
                                <div className="form-group row campo">
                                        <label for="exampleInputEmail1">Concelho:</label>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control-plaintext" id="staticEmail" value="Bragança"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <div className="form-group row campo">
                                        <label for="exampleInputEmail1">Concelho:</label>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="form-group row campo">
                                <label for="exampleTextarea">Observações:</label>
                            <div className="col-md-6">
                                <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
                            </div>
                        </div>
                        <div>
                            <Link to="/paginaprincipal-adm" type="button" className="btn botao">Salvar</Link>
                        </div> 
                    </div> 
                </div> 
            </div>    
        </div>
   
      
        )
    }


export default RegistoUtilizador;