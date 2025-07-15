import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: '실무에 바로 적용 가능한 기술',
  items: [
    {
      title: 'Node.js',
    },
    {
      title: 'TypeScript',
    },
    {
      title: 'AWS',
    },
    {
      title: 'MySQL',
    },
    {
      title: 'Express.js',
    },
    {
      title: 'MongoDB',
    },
    {
      title: 'Redis',
    },
    {
      title: 'Docker',
    },
  ],
};

const database: ISkill.Skill = {
  category: '사용해본 경험이 있는 기술',
  items: [
    {
      title: 'JAVA',
    },
    {
      title: 'Kotlin',
    },
    {
      title: 'Spring Boot',
    },
    {
      title: 'Python',
    },
    {
      title: 'Nest.js',
    },
    {
      title: 'Next.js(React)',
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Git',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Confluence',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database],
  // tooltip: '3: 주도적 설계 및 개발 가능한 수준\n2: 도움받아 개발 가능한 수준\n1: 기초 수준',
};

export default skill;
