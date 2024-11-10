// src/index.js

const Ajv = require('ajv');
const validate = require('./validate');

class JsonSchemaValidator {
  constructor(schema) {
    this.schema = schema;
    this.ajv = new Ajv(); // Create an instance of Ajv validator
  }

  validate(jsonObject) {
    const isValid = validate(this.schema, jsonObject);
    return isValid;
  }
}

module.exports = JsonSchemaValidator;
