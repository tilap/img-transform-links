import assert from 'assert';
import { COMMAND_ARGS, ARGS, ARGS_OBJECT, COMMANDS } from './lib/separators';
import convertStringToValue from './lib/utils/convertStringToValue';

export default function parse(string = '') {
  const result = [];

  if (!string) {
    return result;
  }

  const commandsStrings = string.split(COMMANDS);
  commandsStrings.forEach((commandStr) => {
    const cmdResult = { command: '', args: [] };
    const res = commandStr.split(COMMAND_ARGS);
    assert(res[0], 'No command found');
    cmdResult.command = res[0];

    if (res[1]) {
      const argsStr = res[1].split(ARGS);
      cmdResult.args = argsStr.map(k => convertStringToValue(k, ARGS_OBJECT));
    }

    result.push(cmdResult);
  });

  return result;
}
