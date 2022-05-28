import { INameService } from '@application/contracts/INameService';
import { IFeatureFlagRepository } from '@application/contracts/IFeatureFlagRepository';
import { featureFlatRepository } from 'src/frameworks/repositories';
import * as namedService from 'src/frameworks/services/named';

export const dependencies: Record<string, () => any> = {
  FeatureFlagRepository: (): IFeatureFlagRepository => featureFlatRepository,
  NameService: (): INameService => namedService,
};
