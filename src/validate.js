// src/validate.js

const Ajv = require('ajv');

function validate(schema, data) {
  const ajv = new Ajv(); // Instantiate Ajv for schema validation
  const validate = ajv.compile(schema); // Compile the schema
  const valid = validate(data); // Validate the data against the schema

  if (!valid) {
    console.error('Validation Errors:', validate.errors);
  }
  return valid;
}

module.exports = validate;
