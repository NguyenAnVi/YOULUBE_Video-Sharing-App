import axios from 'axios';

const API_URL = 'http://localhost:3000/';

class AuthService {
  async login(user) {
    return await axios
      .post(API_URL + 'signin', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        console.log(response.data);
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      name: user.name,
      email: user.email,
      phone: user.phone,
      confirmPassword: user.confirmpassword,
      password: user.password
    });
  }
}

export default new AuthService();