import { resolve } from '../../services/resolve';
import { IFeatureFlagRepository } from '../../contracts/IFeatureFlagRepository';

export const getAll = async () => {
  const featureRepository = resolve<IFeatureFlagRepository>(
    'FeatureFlagRepository'
  );
  return featureRepository.getAll();
};
