import axios from 'axios';
import * as functions from 'firebase-functions';

import { INameService } from '@application/contracts/INameService';

const { named_base_url, named_dataset_id } = functions.config();
const api = axios.create({
  baseURL: named_base_url,
});

export const getNames: INameService['getNames'] = async (): Promise<string[]> =>
  api
    .get('/names', {
      params: {
        dataset: named_dataset_id,
      },
    })
    .then(({ data }) => data);
