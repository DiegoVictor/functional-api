import { featureFlagService } from '../../application/use-cases';
import { featureFlatRepository } from '../../infra/repositories';
import { IFeatureFlag } from '../../application/contracts/IFeatureFlag';

export const getAll = async (): Promise<IFeatureFlag[]> =>
  featureFlagService.getAll(featureFlatRepository);
