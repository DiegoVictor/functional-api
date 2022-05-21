import axios from 'axios';
import { INameService } from '../../application/contracts/INameService';

const api = axios.create({
  baseURL: process.env.NAMED_BASE_URL,
});

export const getNames: INameService['getNames'] = async (): Promise<string[]> =>
  api
    .get('/names', {
      params: {
        dataset: process.env.NAMED_DATASET_ID,
      },
    })
    .then(({ data }) => data);
