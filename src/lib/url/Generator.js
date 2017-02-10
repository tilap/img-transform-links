import { COMMAND_ARGS, ARGS, ARGS_OBJECT, COMMANDS } from '../separators';
import castCommand from './castCommand';
import convertValueToString from './utils/convertValueToString';

export class Generator {
  constructor() {
    this.commands = [];
  }

  add(command, ...params) {
    const { args: argsCast } = castCommand(command, params);
    const paramStr = argsCast.map(elemt => convertValueToString(elemt, ARGS_OBJECT)).join(ARGS);

    const separator = paramStr.length > 0 ? COMMAND_ARGS : '';
    this.commands.push(`${command}${separator}${paramStr}`);
    return this;
  }

  get() {
    return this.commands.join(COMMANDS);
  }

  toString() {
    return this.get();
  }
}

export default function () {
  return new Generator();
}
