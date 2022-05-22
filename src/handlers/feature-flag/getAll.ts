import { Request, Response } from 'express';

import { featureFlag } from '../../application/use-cases';

export const getAll = async (
  _: Request,
  response: Response
): Promise<Response> => {
  const flags = await featureFlag.getAll();
  return response.json(flags);
};
