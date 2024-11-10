// test/validate.test.js

const JsonSchemaValidator = require('../src/index');

describe('JsonSchemaValidator', () => {
  it('should validate correct data against the schema', () => {
    const schema = {
      type: 'object',
      properties: {
        name: { type: 'string' },
        age: { type: 'integer' },
      },
      required: ['name', 'age'],
    };

    const validData = { name: 'Jane', age: 25 };
    const validator = new JsonSchemaValidator(schema);

    expect(validator.validate(validData)).toBe(true);
  });

  it('should invalidate incorrect data against the schema', () => {
    const schema = {
      type: 'object',
      properties: {
        name: { type: 'string' },
        age: { type: 'integer' },
      },
      required: ['name', 'age'],
    };

    const invalidData = { name: 'John' }; // Missing 'age'
    const validator = new JsonSchemaValidator(schema);

    expect(validator.validate(invalidData)).toBe(false);
  });
});
