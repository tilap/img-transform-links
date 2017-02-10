export default function ({ value, caster }) {
  if (value === undefined) {
    return '';
  }
  return caster ? caster(value) : value;
}
