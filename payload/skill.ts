import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Node.js',
      level: 3,
    },
    {
      title: 'TypeScript',
      level: 3,
    },
    {
      title: 'AWS',
      level: 2,
    },
    {
      title: 'Java',
      level: 2,
    },
    {
      title: 'Python',
      level: 1,
    },
    {
      title: 'C/C++',
      level: 1,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
      level: 3,
    },
    {
      title: 'MongoDB',
      level: 3,
    },
    {
      title: 'Redis',
      level: 2,
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
  skills: [backend, database, etc],
  tooltip: '1: 기초 수준\n2: 천천히 개발 가능한 수준\n3: Production 개발 가능 수준',
};

export default skill;
