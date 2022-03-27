import { IFeatureFlag } from '../../application/contracts/IFeatureFlag';

const flags: IFeatureFlag[] = [];

export const getAll = async (): Promise<IFeatureFlag[]> => {
  return flags;
};

export const getOneByKey = async (
  key: string
): Promise<IFeatureFlag | undefined> => {
  return flags.find((flag) => flag.key === key);
};
