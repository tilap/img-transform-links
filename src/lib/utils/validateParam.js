export default function ({ value, required, validator }) {
  if (value === undefined) {
    if (required) {
      throw new Error('required');
    }
    return value;
  }

  if (validator) {
    try {
      validator(value);
    } catch (error) {
      throw new Error(error.message || error);
    }
  }
  return value;
}
