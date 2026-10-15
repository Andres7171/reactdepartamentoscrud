import axios from "axios";
import Global from "../Global";

export default class ServiceDepartamentos {
  getDepartamentos() {
    return new Promise((resolve) => {
      let url = Global.urlDepartamentos;
      let request = "api/departamentos";
      axios.get(url + request).then((response) => {
        resolve(response.data);
      });
    });
  }

  insertarDepartamento(departamento) {
    return new Promise((resolve, reject) => {
      let url = Global.urlDepartamentos;
      let request = "api/departamentos";
      axios
        .post(url + request, departamento)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  }

  updateDepartamento(departamento) {
    return new Promise((resolve) => {
      let url = Global.urlDepartamentos;
      let request = "api/departamentos";
      axios.put(url+request,departamento)
      .then((response)=>{
        resolve(response)
      })
    });
  }

  deleteDepartamento(idDepartamento) {
    return new Promise((resolve) => {
      let url = Global.urlDepartamentos;
      let request = "api/departamentos/" + idDepartamento;
      axios.delete(url + request)
      .then((response) => {
        resolve(response);
      });
    });
  }
}
