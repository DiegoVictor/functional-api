import axios from 'axios';

import { INameService } from '@application/contracts/INameService';

const api = axios.create({
  baseURL: 'https://named-api.herokuapp.com',
});

export const getNames: INameService['getNames'] = async (): Promise<string[]> =>
  api
    .get('/names', {
      params: {
        dataset: '1642602568240',
      },
    })
    .then(({ data }) => data);
