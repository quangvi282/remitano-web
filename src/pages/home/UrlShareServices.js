import axios from "axios";
import { API_BASE_URL } from "../../constants/constants";

export class UrlShareServices  {

    getSharedList(search, page, size, column, order) {
        let sort = column + "," + order
        return axios.get(`${API_BASE_URL}/url/shared`, {
            params: {search, page, size, sort}
        }).then(res => res.data).catch(error => console.log(error));
    }

    getMetaData (url) {
        return axios.get(`http://youtube.com/oembed?url=${url}&format=json`)
        .then(res => res.data).catch(error => console.log(error));
    }
}