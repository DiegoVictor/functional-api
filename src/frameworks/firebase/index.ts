import admin from 'firebase-admin';
import * as functions from 'firebase-functions';

import {
  project_id,
  client_email,
  private_key,
} from '@config/service-account.json';
import { featureFlags as featureFlagsFunction } from '@frameworks/firebase/functions/featureFlags';
import { randomNames as randomNamesFunction } from '@frameworks/firebase/functions/randomNames';

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: project_id,
    clientEmail: client_email,
    privateKey: private_key,
  }),
});

export const featureFlags = functions.https.onRequest(featureFlagsFunction);
export const randomNames = functions.https.onRequest(randomNamesFunction);
