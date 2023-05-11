import axios from 'axios';
import { settings } from '../data/settings';

export const ApiService = {

  get() {
    return axios.get(settings.formApi, this.getAuthHeaders());
  },

  post(data, action, headers){
    return axios.post(action ? action : settings.formApi, data, headers ? headers : this.getAuthHeaders());
  },

  del() {
    return axios.delete(settings.formApi, this.getAuthHeaders());
  },

  patch(data) {
    return axios.patch(settings.formApi, data, this.getAuthHeaders());
  },

  getAuthHeaders() {
    //return { headers: { 'authorization': 'bearer ' + localStorage.getItem('ACCESS_TOKEN') } };
  },
}