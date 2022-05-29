import { resolve } from '@lib/resolver';
import { IFeatureFlagRepository } from '@application/contracts/IFeatureFlagRepository';

export const getAll = async () => {
  const featureRepository = resolve<IFeatureFlagRepository>(
    'FeatureFlagRepository'
  );
  return featureRepository.getAll();
};
