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
            '공통적으로 사용할 수 있을만한 기능들이 보이기 시작해서 모듈화 시도',
            'DB커넥션 관리, 캐시 관리, 로깅 관리 등 공통 모듈 개발로 코드 재사용률 30% 증가',
            '수동 작업 자동화 및 어드민 페이지 사용성 개선으로 휴먼에러 비율 70% 감소',
          ]
        },
        {
          main: 'MSA 아키텍처 적용',
          subItems: [
            '서비스 단위로 분리 개발하여 유지보수 용이성 및 확장성 향상 유도',
            '서비스 간 통신비용을 줄이기 위해 http 요청을 lambda invoke 방식으로 변경하여 응답시간 50% 감소',
            'AWS SQS를 활용해 서비스 간 비동기 처리 및 장애 전파 방지',
            '하지만 인력이 적어 한 사람이 여러 서비스를 담당해서 처리하다 보니 오히려 코드 추적 및 디버깅 시간 증가하는 문제 발생',
            '저장소는 하나로 통일하여 모노레포 구조로 관리 필요'
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
            '동일한 메세지가 중복으로 보여지거나 읽은 메세지가 처리되지 않는 등의 버그 발생',
            '웹소켓 통신과 메세지 읽음 위치 커서 활용 등 구조적인 문제를 개선, 이후 채팅 사용 유저 200% 증가'
          ]
        },
        {
          main: '온라인 학원 사이트 개발 및 유지보수',
          subItems: [
            '통계 페이지 호출 api 최적화로 페이지 로딩 시간 40% 감소, 수강료 납부 시스템 개편 등'
          ]
        },
        {
          main: '전시회 이벤트 페이지 개발',
          subItems: [
            '고객사에서 매년 진행하던 이벤트로 전년도 대비 방문 사용자 수 약 35배 증가',
          ]
        }
      ],
      // skillKeywords: ['Node.js', 'TypeScript', 'Express.js', 'RESTful API', 'AWS', 'MySQL', 'Redis'],
    },
  ],
};

export default career;
