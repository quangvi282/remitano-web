import axios from "axios";
import { API_BASE_URL, EVENT_ID } from "../../constants/constants";

export class AccountServices  {

    login (email, password) {
        return axios.post(`${API_BASE_URL}/api/auth`, null, {
            params: {email, password}
        }).then(res => res.data).catch(error => console.log(error));
    }

    register(email, password) {
        return axios.post(`${API_BASE_URL}/api/register`, null, {
            params: {email, password}
        }).then(res => res.data).catch(error => console.log(error));
    }
}