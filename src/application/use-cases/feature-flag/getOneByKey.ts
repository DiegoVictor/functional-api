import { resolve } from '../../services/resolve';
import { IFeatureFlagRepository } from '../../contracts/IFeatureFlagRepository';

export const getOneByKey = async (key: string) => {
  const featureRepository = resolve<IFeatureFlagRepository>(
    'FeatureFlagRepository'
  );
  return featureRepository.getOneByKey(key);
};
