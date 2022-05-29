import { IFeatureFlagRepository } from '@application/contracts/IFeatureFlagRepository';
import { INameService } from '@application/contracts/INameService';
import { resolve } from '@lib/resolver';

export const getRandom = async (): Promise<string[] | string> => {
  const featureRepository = resolve<IFeatureFlagRepository>(
    'FeatureFlagRepository'
  );
  const nameService = resolve<INameService>('NameService');

  const [featureFlag, names] = await Promise.all([
    featureRepository.getOneByKey('encode_output'),
    nameService.getNames(),
  ]);

  const shouldEncode = featureFlag && featureFlag.active;
  if (shouldEncode) {
    return Buffer.from(JSON.stringify(names)).toString('base64');
  }

  return names;
};
