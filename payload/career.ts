import { ICareer } from '../component/experience/ICareer';

const career: ICareer.Payload = {
  disable: false,
  disableTotalPeriod: true,
  list: [
    {
      title: '다윈 프로퍼티',
      position: 'Node.js Backend Developer',
      startedAt: '2022-02',
      descriptions: ['MSA 아키텍처 적용', '채팅, 결제, 알림 서비스 등'],
      skillKeywords: ['Node.js', 'TypeScript', 'Express.js', 'RESTful API', 'AWS'],
    },
    {
      title: '내외정보기술',
      position: '컨설턴트',
      startedAt: '2019-10',
      endedAt: '2021-07',
      descriptions: ['스마트 팩토리 사업 컨설팅'],
      skillKeywords: ['MS SQL', 'ERP', 'ERP 컨설팅'],
    },
  ],
};

export default career;
