import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NAMED_BASE_URL,
});

export const getNames = async (): Promise<string[]> =>
  api
    .get('/names', {
      params: {
        dataset: process.env.NAMED_DATASET_ID,
      },
    })
    .then(({ data }) => data);
