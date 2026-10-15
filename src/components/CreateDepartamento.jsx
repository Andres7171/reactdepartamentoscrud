import React, { Component } from "react";
import ServiceDepartamentos from "../services/ServiceDepartamentos";
import { Navigate } from "react-router-dom";

export default class CreateDepartamento extends Component {
  cajaNumero = React.createRef();
  cajaNombre = React.createRef();
  cajaLocalidad = React.createRef();

  state = {
    mensaje: null,
    status: false,
  };

  service = new ServiceDepartamentos();
  insertarDepartamento = (event) => {
    event.preventDefault();
    let departamento = {
      numero: parseInt(this.cajaNumero.current.value),
      nombre: this.cajaNombre.current.value,
      localidad: this.cajaLocalidad.current.value,
    };
    this.service
      .insertarDepartamento(departamento)
      .then((result) => {
        this.setState({
          status: true,
        });
      })
      .catch((error) => {
        this.setState({
          mensaje: error.message,
        });
      });
  };

  render() {
    if (this.state.status ) {
      return <Navigate to="/" />;
    } else {
      return (
        <>
          {this.state.mensaje && (
            <p style={{ color: "red", fontWeight: "bold" }}>
              {this.state.mensaje}
            </p>
          )}
          <h1>Create Departamento</h1>
          <form action="">
            <label htmlFor="">Numero</label>
            <input
              className="form-control"
              type="number"
              ref={this.cajaNumero}
            />

            <label htmlFor="">Nombre</label>
            <input className="form-control" type="text" ref={this.cajaNombre} />

            <label htmlFor="">Localidad</label>
            <input
              className="form-control"
              type="text"
              ref={this.cajaLocalidad}
            />

            <button
              onClick={this.insertarDepartamento}
              className="btn btn-warning"
            >
              Create
            </button>
          </form>
        </>
      );
    }
  }
}
