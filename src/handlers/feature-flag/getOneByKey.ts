import { Request, Response } from 'express';

import { featureFlag } from '../../application/use-cases';

export const getOneByKey = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const { key } = request.params;
  const flag = await featureFlag.getOneByKey(key);

  if (flag) {
    return response.json(flag);
  }

  return response.status(404).json({
    message: 'Feature flag not found',
  });
};
