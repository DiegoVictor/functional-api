import crypto from 'crypto';
import { IFeatureFlag } from '../../application/contracts/IFeatureFlag';

const flags: IFeatureFlag[] = [
  {
    id: crypto.randomUUID(),
    active: true,
    key: 'encode_output',
  },
];

export const getAll = async (): Promise<IFeatureFlag[]> => {
  return flags;
};

export const getOneByKey = async (
  key: string
): Promise<IFeatureFlag | undefined> => {
  return flags.find((flag) => flag.key === key);
};
