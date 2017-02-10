import assert from 'assert';
import TRANSFORMERS, { NAMES as TRANSFORMERS_NAMES } from '../commands';
import validateParam from './utils/validateParam';
import castParam from './utils/castParam';

export default function (command, args = []) {
  assert(TRANSFORMERS_NAMES.indexOf(command) > -1, `Unkown transformation "${command}"`);

  const cfg = TRANSFORMERS.get(command);
  const argsConfig = cfg.has('args') ? cfg.get('args') : {};
  const alias = cfg.has('aliasOf') ? cfg.get('aliasOf') : undefined;

  const castedParams = Object.keys(argsConfig).map((property, index) => {
    const config = argsConfig[property];
    const defaultValue =
      Object.prototype.hasOwnProperty.call(config, 'default') ? config.default : undefined;

    const value = args.length >= index ? args[index] : defaultValue;
    const required = config.required;
    const validator = config.type && config.type.has('validate') ? config.type.get('validate') : null;
    const caster = config.type && config.type.has('cast') ? config.type.get('cast') : null;

    try {
      validateParam({ value, required, validator });
    } catch (error) {
      throw new Error(
        `Property ${property} no valid (arg #${index + 1} of "${command}"): ${error.message}`);
    }

    try {
      return castParam({ value, caster });
    } catch (error) {
      throw new Error(
        `Property ${property} cast failed (arg #${index + 1} of "${command}"): ${error.message}`);
    }
  });

  return {
    command: alias || command,
    args: castedParams,
  };
}
