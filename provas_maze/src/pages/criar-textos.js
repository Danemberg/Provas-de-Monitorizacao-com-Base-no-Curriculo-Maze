import React from 'react'
import {withRouter} from 'react-router-dom'




class CriarTextos extends React.Component{

    render(){
        return(  
        <form>
            <div class="card border-danger mb-3 my-card">
                <div class="card-header titulo">Criar texto:
                    <div class="card-body">
                    <div className="row">
                      <div className="col-sm">
                        <div class="form-group row campo">
                                <label for="exampleInputPassword1">Titulo:</label>
                            <div class="col-sm">
                                <input type="text" class="form-control " id="exampleInputPassword1"></input>
                            </div>
                        </div>
                      </div>
                      <div className="col-sm">
                        <div class="form-group row campo">
                                <label for="exampleInputPassword1">Autor:</label>
                            <div class="col-sm">
                                <input type="text" class="form-control " id="exampleInputPassword1"></input>
                            </div>
                        </div>
                      </div>
                    </div>
                        <div className="row-sm">
                            <div class="form-group row campo">
                                    <label for="exampleInputPassword1">Editora do manual:</label>
                                <div class="col-sm-5">
                                    <input type="text" class="form-control " id="exampleInputPassword1"></input>
                                </div>
                            </div>
                            <div class="form-group row campo">
                                        <label for="exampleTextarea">Insira o texto:</label>
                                    <div class="col-lg-10">
                                        <textarea class="form-control" id="exampleTextarea" rows="8"></textarea>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div class="form-group row campo">
                                        <label for="exampleSelect1">Ano:</label>
                                        <div class="col-sm-5">
                                            <select class="form-control" id="exampleSelect1">
                                            <option>1º/2ºano</option>
                                            <option>3º/4ºano</option>
                                            <option>5ºano</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" class="botao1">Criar</button>
                            </div>
                        </div>
                    </div>
                </div>    
        </form>
        )
    }
}


export default withRouter (CriarTextos);