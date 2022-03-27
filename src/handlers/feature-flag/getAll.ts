import { featureFlagService } from '../../application/use-cases';
import { featureFlatRepository } from '../../infra/repositories';
import { IFeatureFlag } from '../../application/contracts/IFeatureFlag';

export const getAll = async (): Promise<IFeatureFlag[]> => {
  const flags: IFeatureFlag[] = await featureFlagService.getAll(
    featureFlatRepository
  );

  return flags;
};
