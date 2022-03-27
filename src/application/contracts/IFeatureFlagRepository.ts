import { IFeatureFlag } from './IFeatureFlag';

export interface IFeatureFlagRepository {
  getAll(): Promise<IFeatureFlag[]>;
  getOneByKey(key: string): Promise<IFeatureFlag | undefined>;
}
