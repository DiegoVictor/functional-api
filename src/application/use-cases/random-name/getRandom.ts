import { IFeatureFlagRepository } from 'src/application/contracts/IFeatureFlagRepository';
import { getNames } from '../../../infra/services/named';

export const getRandom = async (
  featureFlatRepository: IFeatureFlagRepository
): Promise<string[] | string> => {
  const [featureFlag, names] = await Promise.all([
    featureFlatRepository.getOneByKey('encode_output'),
    getNames(),
  ]);

  const shouldEncode = featureFlag && featureFlag.active;
  if (shouldEncode) {
    return Buffer.from(JSON.stringify(names)).toString('base64');
  }

  return names;
};
