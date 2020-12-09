import axios from 'axios'

import http from "../http-common";

class UserService {
  getAll() {
    return http.get("/");
  }

  create(data) {
    return http.post("/register", data);
  }

  update(id, data) {
    return http.put(`/updateDetails/${id}`, data);
  }

  delete(id) {
    return http.delete(`/Delete/${id}`);
  }

  getUserByemailId(id){
    return http.get(`/${id}`);
  }
  validateUser(email,password){
    return http.get(`/LoginValidation/${email}/${password}`);
  }

  
}

export default new UserService();