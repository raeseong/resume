import { ICareer } from '../component/experience/ICareer';

const career: ICareer.Payload = {
  disable: false,
  disableTotalPeriod: true,
  list: [
    {
      title: '다윈 프로퍼티',
      position: 'Node.js Backend Developer',
      startedAt: '2022-02',
      descriptions: [
        {
          main: '내부 라이브러리 및 어드민 개발',
          subItems: [
            'DB커넥션 관리, 캐시 관리, 로깅 관리 등 공통 모듈 개발로 코드 재사용률 30% 증가',
            '수동 작업 자동화 및 어드민 페이지 사용성 개선으로 휴먼에러 비율 70% 감소',
          ]
        },
        {
          main: 'MSA 아키텍처 적용',
          subItems: [
            '서비스 단위로 분리 개발하여 유지보수 용이성 및 확장성 향상 유도',
            '서비스 간 통신비용을 줄이기 위해 http 요청을 lambda invoke 방식을 적용하여 응답시간 50% 감소',
            '하지만 인력이 적어 한 사람이 여러 서비스를 담당해서 처리하다 보니 오히려 코드 추적 및 디버깅 시간 증가하는 문제 발생',
          ]
        },
        {
          main: '결제 시스템 구현',
          subItems: [
            '결제에 필요한 상품 정보, 할인 정보, 결제 정보 등을 각각 담당하는 서비스 구현 후 이를 오케스트레이션 하는 서비스 설계',
            '각 서비스를 인원별로 분담하여 개발 시간 절반으로 단축',
          ]
        },
        {
          main: '채팅 서비스 개편',
          subItems: [
            '버그가 종종 발생하던 채팅 서비스를 개편',
            '구조적인 문제를 개선하여 버그 발생 원인을 제거하였고, 이후 채팅 사용 유저 200% 증가'
          ]
        },
        {
          main: '외주 작업',
          subItems: [
            '전시회 이벤트 페이지 개발 - 고객사에서 매년 진행하던 이벤트로 전년도 대비 방문 사용자 수 약 35배 증가',
            '온라인 학원 사이트 개발 및 유지보수 - 통계 페이지 호출 api 최적화로 페이지 로딩 시간 40% 감소, 수강료 납부 시스템 개편 등'
          ]
        },
      ],
      skillKeywords: ['Node.js', 'TypeScript', 'Express.js', 'RESTful API', 'AWS', 'MySQL', 'Redis'],
    },
  ],
};

export default career;
