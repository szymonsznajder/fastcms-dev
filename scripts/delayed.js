// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './aem.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
// If you need any delayed stuff client-side add it to the callbackAfter3SecondsChain
for (const callback of window.cmsplus.callbackAfter3SecondsChain) {
  await callback();
}
