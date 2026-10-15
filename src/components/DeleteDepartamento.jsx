import React, { Component } from "react";
import ServiceDepartamentos from "../services/ServiceDepartamentos";

export default class DeleteDepartamento extends Component {
  

  service= new ServiceDepartamentos()
  cancelModal=()=>{
    this.props.cambiarMostrar()
  }

  deleteDepartamento=()=>{
    this.service.deleteDepartamento(this.props.departamento.numero).then(result=>{
      this.props.loadDepartamentos()
      this.cancelModal()
    })
  }
 
  
  
    render() {
    return (
      <div className="modal" tabIndex="-1" style={{display:"block", backgroundColor:"rgba(0,0,0,0.5)"}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Eliminar Departamento</h5>
              <button  onClick={this.cancelModal}
                type="button"
                //data-bs-dismiss="modal"
                className="btn-close"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>{this.props.departamento.numero}</p>
              <p>{this.props.departamento.nombre}</p>
              <p>{this.props.departamento.localidad}</p>
            </div>
            <div className="modal-footer">
              <button onClick={this.cancelModal}
                type="button"
                className="btn btn-secondary"
              >
                Cancelar
              </button>
              <button onClick={this.deleteDepartamento} type="button" className="btn btn-danger">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
