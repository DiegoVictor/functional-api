import { onRequest } from 'firebase-functions/v2/https';
import '@frameworks/firebase';

import { featureFlags as featureFlagsFunction } from '@frameworks/functions/featureFlags';
import { randomNames as randomNamesFunction } from '@frameworks/functions/randomNames';

export const featureFlags = onRequest(featureFlagsFunction);
export const randomNames = onRequest(randomNamesFunction);
