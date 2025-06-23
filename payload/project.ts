import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
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
        {
          content: '프로젝트 개요 링크',
          href:
            'https://superficial-crab-d02.notion.site/SuperSlap-fca506b272984c2a9471ee65bc9a3460',
        },
      ],
    },
    {
      title: 'ERP 컨설팅',
      startedAt: '2019-10',
      endedAt: '2021-07',
      where: '내외정보기술',
      descriptions: [
        { content: '스마트 팩토리 사업 컨설팅, MS SQL 활용' },
      ],
    },
  ],
};

export default project;
