import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '배운 것이 있을 때 희열을 느끼는 백엔드 개발자입니다.',
    '문제 해결 자체도 중요하지만 그 과정을 더 깊게 탐구하고 이해하는 것을 좋아합니다.',
    '여러 의견이 나오고 커뮤니케이션을 통해 최적의 답을 찾아가는, 동료들과의 협업을 좋아합니다.',
  ],
  sign: 'PRS',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
