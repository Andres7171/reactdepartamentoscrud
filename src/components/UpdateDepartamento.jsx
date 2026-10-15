import React, { Component } from "react";
import ServiceDepartamentos from "../services/ServiceDepartamentos";
import { Navigate } from "react-router-dom";

export default class UpdateDepartamento extends Component {
  cajaNumero = React.createRef();
  cajaNombre = React.createRef();
  cajaLocalidad = React.createRef();

  state={
    status:false
  }
    
  service=new ServiceDepartamentos()
  updateDepartamento = (event) => {
    event.preventDefault();
    let departamento={
        numero:parseInt(this.cajaNumero.current.value),
        nombre:this.cajaNombre.current.value,
        localidad:this.cajaLocalidad.current.value
    }
    this.service.updateDepartamento(departamento).then(result=>{
        this.setState({
            status:true
        })
    })

  };
  render() {
    return (
      <>
      {
        this.state.status == true &&
        (<Navigate to='/' />)
      }
        <form action="">
          <label htmlFor="">Numero</label>
          <input
            className="form-control"
            type="number"
            ref={this.cajaNumero}
            defaultValue={this.props.id}
          />

          <label htmlFor="">Nombre</label>
          <input
            defaultValue={this.props.nombre}
            className="form-control"
            type="text"
            ref={this.cajaNombre}
          />

          <label htmlFor="">Localidad</label>
          <input
            className="form-control"
            type="text"
            defaultValue={this.props.localidad}
            ref={this.cajaLocalidad}
          />

          <button onClick={this.updateDepartamento} className="btn btn-warning">
            Edit
          </button>
        </form>
      </>
    );
  }
}
