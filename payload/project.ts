import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'SuperSlap',
      startedAt: '2021-11',
      endedAt: '2021-12',
      where: 'SW사관학교 정글',
      descriptions: [
        { content: '미니게임 웹앱' },
        {
          content: '프로젝트 개요 링크',
          href: 'https://superficial-crab-d02.notion.site/SuperSlap-fca506b272984c2a9471ee65bc9a3460'
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
