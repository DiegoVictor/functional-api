import { IFeatureFlag } from './IFeatureFlag';

export interface IFeatureFlagRepository {
  getAll(): Promise<IFeatureFlag[]>;
}
