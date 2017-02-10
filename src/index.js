import libUrlGenerator from './lib/url/Generator';
import libCast from './lib/url/castCommand';
import libParse from './lib/url/parse';
import libBuild from './lib/url/build';

export const UrlGenerator = libUrlGenerator;

export const parse = libParse;
export const build = libBuild;
export const cast = libCast;

export const generator = () => new UrlGenerator();
