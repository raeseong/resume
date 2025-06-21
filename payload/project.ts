import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '외주작업',
      startedAt: '2025-01',
      endedAt: '2025-06',
      where: '다윈프로퍼티',
      descriptions: [
        { content: '전시회 이벤트 페이지 개발' },
        { content: '온라인 학원 사이트 개발 및 유지보수' },
        { content: '6건의 통계 api 및 추가 api 호출 화면 로딩 속도 개선(캐시 적용 및 비동기 작업으로 각 api별 응답 시간 최대 10배 감소)' },
      ],
    },
    {
      title: '어드민 페이지 개발 및 운영',
      startedAt: '2024-04',
      endedAt: '2024-12',
      where: '다윈프로퍼티',
      descriptions: [
        { content: '사이트 내부 관리자 페이지 개발' },
        { content: '사용성 개선 및 자동화를 통해 휴먼 에러 70% 감소' },
      ],
    },
    {
      title: '내부 라이브러리 개발',
      startedAt: '2024-01',
      endedAt: '2024-03',
      where: '다윈프로퍼티',
      descriptions: [
        { content: 'msa 환경을 시도하다보니 각 서비스별 공통으로 필요로하는 기능이 많아짐' },
        { content: 'lambda connector, db 커넥션 관리, 로깅, 트랜잭션 관리 등 공통 기능 개발' },
        { content: '내부 서비스간 통신 비용 40% 감소(요청 응답 속도 반으로 감소 및 불필요 DB 커넥션 제거 등)' },
        { content: '코드 유지보수 용이성 향상' },
      ],
    },
    {
      title: '결제 시스템 구현',
      startedAt: '2022-09',
      endedAt: '2023-01',
      where: '다윈프로퍼티',
      descriptions: [
        { content: '정기 자동 결제 시스템 구축' },
        { content: '상품, 결제, 할인 등의 복합적인 구조를 감안하여 설계하고 특정 시점에 여러 태스크가 처리될 때 부하를 줄이기 위해 메세지 큐 활용' },
        { content: '동시 처리 부하' },
      ],
    },
    {
      title: '채팅 시스템 개편',
      startedAt: '2022-07',
      endedAt: '2022-09',
      where: '다윈프로퍼티',
      descriptions: [
        {
          content:
            '기존에 채팅 기능이 있었지만 사용되지 않아서 문제 원인을 파악하고 앞으로 사용할 채팅에 필요한 기능 정리',
        },
        { content: '채팅 기능을 하는 microservice를 생성하고, 기존 채팅코드는 deprecated' },
      ],
    },
    {
      title: 'SuperSlap',
      startedAt: '2021-11',
      endedAt: '2021-12',
      where: 'SW사관학교 정글',
      descriptions: [
        { content: '미니게임 웹앱' },
        {
          content: '프로젝트 개요 링크',
          href:
            'https://superficial-crab-d02.notion.site/SuperSlap-fca506b272984c2a9471ee65bc9a3460',
        },
      ],
    },
    {
      title: 'SW 사관학교 정글',
      startedAt: '2021-08',
      endedAt: '2021-12',
      where: '카이스트 문지캠퍼스',
      descriptions: [
        { content: '알고리즘 문제풀이' },
        { content: 'RB Tree, Malloc-Lab, Tiny Web Server' },
        { content: 'pintOS' },
        { content: '팀 프로젝트(SuperSlap)' },
      ],
    },
  ],
};

export default project;
