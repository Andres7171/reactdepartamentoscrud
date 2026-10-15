import React, { Component } from "react";
import loading from "./../assets/images/loading.webp";
import ServiceDepartamentos from "../services/ServiceDepartamentos";
import { NavLink } from "react-router-dom";
import DeleteDepartamento from "./DeleteDepartamento";
export default class HomeComponent extends Component {
  state = {
    departamentos: [],
    status: false,
    mostrar:false,
    eliminar:false
  };

  service = new ServiceDepartamentos();

  loadDepartamentos = () => {
    this.service.getDepartamentos().then((result) => {
      this.setState({
        departamentos: result,
        status: true,
      });
    });
  };

  deleteDepartamento=(idDepartamento)=>{
    this.service.deleteDepartamento(idDepartamento).then(result=>{
        this.loadDepartamentos()
    })
  }

  mostrarModal=()=>{
    
  }
  



  componentDidMount = () => {
    this.loadDepartamentos();
  };

  render() {
    if (this.state.status == true) {
      return (
        <div>
          <h1>Home Component</h1>
          
         
          <table className="table table-primary table-striped table-hover">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Localidad</th>
                <th></th>
                <th></th>
                
              </tr>
            </thead>
            <tbody>
              {this.state.departamentos.map((departamento, index) => {
                return (
                  <tr key={index}>
                    <td>{departamento.nombre}</td>
                    <td>{departamento.localidad}</td>
                    <td>
                      <NavLink
                        to={
                          "/update/" +
                          departamento.numero +
                          "/" +
                          departamento.nombre +
                          "/" +
                          departamento.localidad
                        }
                        className="btn btn-info"
                      >Edit</NavLink>
                    </td>
                    <td><button  onClick={()=>{
                        this.mostrarModal(departamento)
                    }} className="btn btn-danger">Delete</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <img src={loading} alt="loading..." />;
    }
  }
}
