import UrlGenerator from './Generator';

export default function (args) {
  const generator = new UrlGenerator();
  args.forEach(arg => generator.add(...arg));
  return generator.toString();
}
