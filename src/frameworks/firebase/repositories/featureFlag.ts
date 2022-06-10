import admin from 'firebase-admin';

import { IFeatureFlagRepository } from '@application/contracts/IFeatureFlagRepository';
import { IFeatureFlag } from '@entities/IFeatureFlag';
import { parseFeatureFlag } from '../parsers/fetureFlag';

const featureFlags = admin.firestore().collection('feature-flags');

export const getAll: IFeatureFlagRepository['getAll'] = async (): Promise<
  IFeatureFlag[]
> =>
  featureFlags.get().then((data) => {
    if (data.empty) {
      return [];
    }

    return data.docs.map(parseFeatureFlag);
  });

export const getOneByKey: IFeatureFlagRepository['getOneByKey'] = async (
  key: string
): Promise<IFeatureFlag | undefined> =>
  featureFlags
    .where('key', '==', key)
    .limit(1)
    .get()
    .then((data) => {
      if (data.size === 1) {
        return data.docs.map(parseFeatureFlag).pop();
      }
      return undefined;
    });
