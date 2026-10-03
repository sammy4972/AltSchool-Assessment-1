function deepFreeze(obj) {
  // Freeze every nested object first
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      deepFreeze(obj[key]);
    }
  }

  // Freeze the current object
  return Object.freeze(obj);
}

const config = deepFreeze({
  api: {
    baseUrl: 'https://x.com',
    retries: 3
  },
  debug: false
});

config.api.baseUrl = 'https://changed.com'; // ignored
config.debug = true;                         // ignored

console.log(config.api.baseUrl, config.debug);
// "https://x.com" false

console.log(Object.isFrozen(config.api));
// true
