# JSON Schema Validator

A simple utility to validate JSON objects against a custom schema.

## Installation

```bash
npm install json-schema-validator

Usage Example

const JsonSchemaValidator = require('json-schema-validator');

// Define a JSON schema
const schema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    age: { type: 'integer' },
  },
  required: ['name', 'age'],
};

// Create an instance of the validator with the schema
const validator = new JsonSchemaValidator(schema);

// Sample data to validate
const data = {
  name: 'John Doe',
  age: 30,
};

const isValid = validator.validate(data);

if (isValid) {
  console.log('Data is valid');
} else {
  console.log('Data is invalid');
}
```
