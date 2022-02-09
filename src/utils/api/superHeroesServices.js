import {axios} from '@adk/apiclient';
import Client from './apiClient';

class SuperheroeService extends Client {
  async getList() {
    let {data} = await axios.get(
      'https://www.superheroapi.com/api.php/10158234183617397/search/a',
    );
    return data;
  }

  async getDetails(superHeroeId) {
    let {data} = await axios.get(
      `https://www.superheroapi.com/api.php/10158234183617397/ + ${superHeroeId}`,
    );
    return data;
  }
}

export default new SuperheroeService();
