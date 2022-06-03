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
        return axios.get(`https://youtube.com/oembed?url=${url}&format=json`)
        .then(res => {
            let result = res.data;
            return result;
        },
        (error) => {
            console.error(error);
            throw error;
        });
    }

    updateShared(videoId, title) {
        return axios.post(`${API_BASE_URL}/api/share/update`, null, {
            params: {videoId, title}
        })
        .then(res => res.data).catch(error => console.log(error))
    }
}