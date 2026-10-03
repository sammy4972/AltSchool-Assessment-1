function validateSchema(obj, schema) {
  const errors = [];

  for (let key in schema) {
    if (!obj.hasOwnProperty(key)) {
      errors.push(`${key}: missing property`);
    } else if (typeof obj[key] !== schema[key]) {
      errors.push(
        `${key}: expected ${schema[key]}, got ${typeof obj[key]}`
      );
    }
  }

  return errors;
}

const schema = {
  name: 'string',
  age: 'number',
  isAdmin: 'boolean'
};

console.log(
  validateSchema(
    { name: 'Ada', age: 21, isAdmin: false },
    schema
  )
);

console.log(
  validateSchema(
    { name: 'Ada', age: '21' },
    schema
  )
);
