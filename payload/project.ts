import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    // {
    //   title: '리뷰 시스템 구현',
    //   startedAt: '2023-09',
    //   endedAt: '2023-11',
    //   where: '다윈프로퍼티',
    //   descriptions: [
    //     { content: '리뷰 생성 및 관리하는 기능 개발' },
    //     { content: '리뷰 관련 기능이 트리거가 되는 기존 코드에 이식' },
    //     { content: '상담, 계약에 따른 리뷰요청 발생 및 발생된 리뷰요청을 관리해서 실제 리뷰가 쌓이고 있는 중' },
    //   ],
    // },
    {
      title: '결제 시스템 구현',
      startedAt: '2022-09',
      endedAt: '2023-01',
      where: '다윈프로퍼티',
      descriptions: [
        { content: '새로운 상품에 대한 정기 자동 결제 시스템 필요' },
        {
          content:
            '상품, 결제, 할인 등의 복합적인 구조를 감안하여 설계하고 특정 시점에 여러 태스크가 처리되기도 해서 메세지 큐 활용',
        },
        {
          content:
            '현재 특정 상품을 매월 결제하고 있는 유저들이 있고, 새로운 결제 유저도 계속해서 발생. 결제 취소 및 상품 해지 유저도 존재',
        },
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
        {
          content:
            '새로운 채팅 코드 적용 후, 채팅 사용 유저가 증가했고 관련 로그 및 통계를 확인할 수 있어서 분석 및 마케팅 활용에 용이',
        },
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
