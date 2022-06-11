import * as functions from 'firebase-functions';
import '@frameworks/firebase';

import { featureFlags as featureFlagsFunction } from '@frameworks/functions/featureFlags';
import { randomNames as randomNamesFunction } from '@frameworks/functions/randomNames';

export const featureFlags = functions.https.onRequest(featureFlagsFunction);
export const randomNames = functions.https.onRequest(randomNamesFunction);
