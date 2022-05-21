import { INameService } from '../application/contracts/INameService';
import { IFeatureFlagRepository } from '../application/contracts/IFeatureFlagRepository';
import { featureFlatRepository } from './repositories';
import * as namedService from './services/named';

export const factories: Record<string, () => any> = {
  FeatureFlagRepository: (): IFeatureFlagRepository => featureFlatRepository,
  NameService: (): INameService => namedService,
};
