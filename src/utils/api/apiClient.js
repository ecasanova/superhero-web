import {CreateClient} from '@adk/apiclient';

const Client = CreateClient({
  baseUrl: '/api',
  showLog: process.env.NODE_ENV === 'development',
});

export default class extends Client {
  constructor() {
    super();
    this.http.interceptors.request.use((config) => {
      return config;
    });
    this.http.interceptors.response.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
  }
}
