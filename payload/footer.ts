import { homepage, version } from '../package.json';

import { IFooter } from '../component/footer/IFooter';
import { dependencies } from '../package.json';

const footer: IFooter.Payload = {
  version,
  github: homepage,
  nextVersion: dependencies.next,
  reactVersion: dependencies.react,
  bootstrapVersion: dependencies.bootstrap,
};

export default footer;
