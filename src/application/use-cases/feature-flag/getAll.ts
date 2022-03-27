import { IFeatureFlagRepository } from '../../contracts/IFeatureFlagRepository';

export const getAll = async (repository: IFeatureFlagRepository) => {
  const flags = await repository.getAll();

  return flags;
};
