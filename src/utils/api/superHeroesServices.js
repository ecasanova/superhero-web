import {axios} from 'axios';
import Client from './apiClient';
import jsonData from '@/data.json';
class SuperheroeService extends Client {
  /* FAKE API CALL FROM JSON*/
  async getList() {
    let data = jsonData;
    return data;
  }

  /* FAKE API CALL FROM JSON*/
  async getListApi() {
    let {data} = await axios.get(
      'https://www.superheroapi.com/api.php/10158234183617397/search/a',
    );
    return data;
  }

  /* GET ALL DATA FROM API*/
  async getAllData() {
    let list = {results: []};
    for (let i = 1; i <= 731; i++) {
      let {data} = await axios.get(
        `https://www.superheroapi.com/api.php/10158234183617397/ + ${i}`,
      );
      delete data.response;
      list.results.push(data);
    }
    console.log(list);
    return list;
  }

  async getDetails(superHeroeId) {
    let {data} = await axios.get(
      `https://www.superheroapi.com/api.php/10158234183617397/ + ${superHeroeId}`,
    );
    return data;
  }
}

export default new SuperheroeService();
