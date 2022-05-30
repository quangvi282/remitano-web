import axios from "axios";
import { saveLoginInfo } from "../../security/auth";
import { API_BASE_URL } from "../../constants/constants";

export function login(username, password){
    const headers = {
        'email': username,
        'pass': password,
    }

    return axios.post(`${API_BASE_URL}/api/auth`, null, {
        headers: headers
    })
    .then(res => res.data)
    .then(data => {
        if (data && data.token) {
            saveLoginInfo(data)
        }
        return data;
    })
}

// export function refreshToken() {
//     return axios.post(`${API_BASE_URL}/login`, 
//         querystring.stringify({
//             refresh_token: getRefreshToken(),
//             grant_type: 'refresh_token',
//             client_id: CLIENT_ID
//         }), {
//             headers: { 
//                 'Content-Type': 'application/x-www-form-urlencoded',
//                 'Tenant': getTenantAlias(getSubDomain())
//             },
//             auth: {
//                 username: CLIENT_ID,
//                 password: CLIENT_CREDENTIALS
//             },
//     })
//     .then(res => res.data)
//     .then(data => {
//         if (data.loggedUser && data.loggedUser.type === 2) {
//             saveLoginOrgInfo(data)
//         } else {
//             saveLoginInfo(data);
//         }
//         return data;
//     });
// }