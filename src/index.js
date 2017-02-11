import libUrlGenerator from './Generator';
import libCast from './castCommand';
import libParse from './parse';
import libBuild from './build';

export const UrlGenerator = libUrlGenerator;

export const parse = libParse;
export const build = libBuild;
export const cast = libCast;

export const generator = () => new UrlGenerator();
