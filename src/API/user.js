import axios from "axios";

let url = process.env.REACT_APP_BASE_URL || "http://localhost:3000";
const userAPI = {
  register(user) {
    return axios.post(`${url}/users/`, user).then(res => res.data);
  },
  login(credentials) {
    return axios.post(`${url}/users/authenticate`, credentials).then(res => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userid", res.data.user._id);
    });
  },
  getProfile() {
    return axios
      .get(`${url}/users/profile`, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(res => res.data);
  }
};

export default userAPI;
