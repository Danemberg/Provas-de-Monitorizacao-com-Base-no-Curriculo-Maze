import React from 'react'
import RegistoService from '../app/RegistoService'
import {withRouter} from 'react-router-dom'




class RegistoUtilizador extends React.Component{

    render(){
        return(  
        <form>
            <div class="card border-danger mb-3">
                <div class="card-header titulo">Registar:
                    <div class="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div class="form-group row campo">
                                <label for="exampleInputPassword1">Nome:</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control " id="exampleInputPassword1"></input>
                            </div>
                        </div>
                            <div class="form-group row campo">
                                    <label for="exampleInputEmail1">Email:</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                </div>
                            </div>
                      </div>
                    </div>
                        <div class="form-group row campo">
                                <label for="exampleInputEmail1">Senha de acesso:</label>
                            <div class="col-sm-3">
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 ">
                                <div class="form-group row campo">
                                      <label for="exampleSelect1">Entidade:</label>
                                    <div class="col-sm-9">
                                        <select class="form-control" id="exampleSelect1">
                                        <option>Instituto Politécnico de Bragança</option>
                                        <option>Universidade do Minho</option>
                                        <option>Universidade do Porto</option>
                                        <option>Universidade de Lisboa</option>
                                        <option>Universidade de Coimbra</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                                <div className="col-md-6 ">
                                <div class="form-group row campo">
                                        <label for="exampleInputEmail1">Outros:</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 ">
                                <div class="form-group row campo">
                                        <label for="exampleInputEmail1">Concelho:</label>
                                    <div class="col-sm-6">
                                        <input type="text" readonly="" class="form-control-plaintext" id="staticEmail" value="Bragança"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <div class="form-group row campo">
                                        <label for="exampleInputEmail1">Concelho:</label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row campo">
                                <label for="exampleTextarea">Justificação de registo:</label>
                            <div class="col-md-6">
                                <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
                            </div>
                        </div>
                        <div>
                            <button type="button" class="botao">Registar</button>
                        </div> 
                    </div> 
                </div> 
            </div>    
        </form>
   
      
        )
    }
}


export default withRouter (RegistoUtilizador);