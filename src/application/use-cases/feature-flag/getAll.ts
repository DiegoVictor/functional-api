import { IFeatureFlagRepository } from '../../contracts/IFeatureFlagRepository';

export const getAll = async (repository: IFeatureFlagRepository) =>
  repository.getAll();
