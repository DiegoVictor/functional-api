import { IFeatureFlag } from '../../application/contracts/IFeatureFlag';

const flags: IFeatureFlag[] = [];

export const getAll = async (): Promise<IFeatureFlag[]> => {
  return flags;
};
