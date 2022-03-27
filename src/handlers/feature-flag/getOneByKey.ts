import { featureFlagService } from '../../application/use-cases';
import { featureFlatRepository } from '../../infra/repositories';
import { IFeatureFlag } from '../../application/contracts/IFeatureFlag';

export const getOneByKey = async (
  key: string
): Promise<IFeatureFlag | undefined> => {
  const flag = await featureFlagService.getOneByKey(featureFlatRepository, key);

  return flag;
};
