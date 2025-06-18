import { IGlobal } from '../component/common/IGlobal';

const title = 'RESUME: RaeSeong Park';
const description = 'This is a simple web resume sample.';

export const _global: IGlobal.Payload = {
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: '/preview.jpg',
          width: 800,
          height: 600,
          alt: 'OpenGraph Image Sample.png',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Lorem',
        lastName: 'ipsum',
        username: 'lorem',
        gender: 'female',
      },
    },
  },
};
