import express from 'express';
import cors from 'cors';

export const createServer = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());

  return app;
};
