/* eslint-disable no-restricted-syntax */
/* site configuration module */


let releaseVersion = 'plusplus 1.0.2';

import {
  tidyDOM,
  possibleMobileFix,
  swiftChangesToDOM
} from './reModelDom.js';

import {
  constructGlobal
} from './variables.js';

import {
  initializeClientConfig
} from './clientConfig.js';

import {
  handleMetadataJsonLd,
  createJSON
} from './jsonHandler.js';

import { } from './externalImage.js';

await import('/config/config.js');

import {} from "/plusplus/src/clientExpressions.js";

function noAction() {
}
export async function initializeSiteConfig() {
// Determine the environment and locality based on the URL
  const getEnvironment = () => {
    // Define an array of environments with their identifying substrings in the URL

    // An Environment is defined as a normal place to serve Helix Content
    const environments = [
      { key: '.hlx.page', value: 'preview' },
      { key: '.hlx.live', value: 'live' },
      { key: '.aem.page', value: 'preview' },
      { key: '.aem.live', value: 'live' },
    ];

    for (const env of environments) {
      if (window.location.hostname.includes(env.key)) {
        return env.value;
      }
    }
    // If no match is found, it defaults to 'live' - hardest case.
    return 'live';
  };

  // a locality is defined as a place to serve Helix Content for a regulated industry
  const getLocality = () => {
    const localities = [
      { key: "localhost", value: "local" },
      { key: "127.0.0.1", value: "local" },
      { key: "-stage", value: "stage" },
      { key: "fastly", value: "preprod" },
      { key: "preprod.", value: "preprod" },
      { key: "-prod", value: "prod" },
      { key: "-dev", value: "dev" },
    ];
    for (const env of localities) {
      if (window.location.hostname.includes(env.key)) {
        return env.value;
      }
    }

    // Return 'prod' if no environment matches -- hardest case.
    return 'prod';
  };

  window.cmsplus = {
    environment: getEnvironment(),
    locality: getLocality(),
    release: releaseVersion,
  };
  window.cmsplus.callbackPageLoadChain = [];
  window.cmsplus.callbackAfter3SecondsChain = [];

  window.cmsplus.callbackAfter3SecondsChain.push(noAction); // set up nop.
  window.cmsplus.callbackPageLoadChain.push(noAction); // set up nop.
  possibleMobileFix('hero');
  await constructGlobal();
  swiftChangesToDOM();
  await createJSON();
  await initializeClientConfig();
  if (window.cmsplus.environment === 'preview') {
    import('./debugPanel.js');
  }

  // all configuration completed, make any further callbacks from here


  await tidyDOM();
  await handleMetadataJsonLd();
  await window.cmsplus?.callbackMetadataTracker?.();
  if (window.cmsplus.environment !== 'final') {
    window.cmsplus.callbackCreateDebugPanel?.();
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const callback of window.cmsplus.callbackPageLoadChain) {
  // eslint-disable-next-line no-await-in-loop
    await callback();
  }
}
await initializeSiteConfig();
