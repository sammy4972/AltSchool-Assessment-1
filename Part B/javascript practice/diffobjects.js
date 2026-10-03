function diffObjects(oldObj, newObj) {
  const result = {
    added: {},
    removed: {},
    changed: {}
  };

  // Check for added and changed properties
  for (const key of Object.keys(newObj)) {
    if (!Object.hasOwn(oldObj, key)) {
      result.added[key] = newObj[key];
    } else if (oldObj[key] !== newObj[key]) {
      result.changed[key] = {
        from: oldObj[key],
        to: newObj[key]
      };
    }
  }

  // Check for removed properties
  for (const key of Object.keys(oldObj)) {
    if (!Object.hasOwn(newObj, key)) {
      result.removed[key] = oldObj[key];
    }
  }

  return result;
}
console.log(diffObjects(
  { name: 'Setemi', role: 'Engineer', country: 'Jamaica' },
  { name: 'Setemi', role: 'Senior Engineer', city: 'Kingston' }
));