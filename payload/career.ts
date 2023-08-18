import { ICareer } from '../component/experience/ICareer';

const career: ICareer.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '다윈 프로퍼티',
      position: 'Node.js Backend Developer',
      startedAt: '2022-02',
      descriptions: ['MSA 아키텍처 적용', '채팅, 결제, 알림 서비스 등'],
      skillKeywords: ['Node.js', 'TypeScript', 'Express.js', 'RESTful API', 'AWS'],
    },
  ],
};

export default career;
