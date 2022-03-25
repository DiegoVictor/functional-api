import { IFeatureFlagRepository } from '../../contracts/IFeatureFlagRepository';

export const getAll = async (repository: IFeatureFlagRepository) => {
  const flags = repository.getAll();

  return flags;
};
