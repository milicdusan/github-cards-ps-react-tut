import axios from 'axios';

class API {
    static async getProfile(username) {
        const response = await axios.get(`https://api.github.com/users/${username}`); 
        return response.data;
    }
}

export default API;