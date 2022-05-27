import crypto from 'crypto';

import { IFeatureFlagRepository } from '@application/contracts/IFeatureFlagRepository';
import { IFeatureFlag } from '@entities/IFeatureFlag';

const flags: IFeatureFlag[] = [
  {
    id: crypto.randomUUID(),
    active: true,
    key: 'encode_output',
  },
];

export const getAll: IFeatureFlagRepository['getAll'] = async (): Promise<
  IFeatureFlag[]
> => flags;

export const getOneByKey: IFeatureFlagRepository['getOneByKey'] = async (
  key: string
): Promise<IFeatureFlag | undefined> => flags.find((flag) => flag.key === key);
