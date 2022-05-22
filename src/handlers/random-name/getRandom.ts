import { Request, Response } from 'express';

import { randomName } from '../../application/use-cases';

export const getRandom = async (
  _: Request,
  response: Response
): Promise<Response> => {
  const names = await randomName.getRandom();
  return response.json(names);
};
