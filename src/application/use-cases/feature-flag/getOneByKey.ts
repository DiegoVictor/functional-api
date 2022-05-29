import { resolve } from '@lib/resolver';
import { IFeatureFlagRepository } from '@application/contracts/IFeatureFlagRepository';

export const getOneByKey = async (key: string) => {
  const featureRepository = resolve<IFeatureFlagRepository>(
    'FeatureFlagRepository'
  );
  return featureRepository.getOneByKey(key);
};
