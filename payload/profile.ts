import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/prs.png';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '박래성',
    small: 'prs',
  },
  contact: [
    {
      title: 'qwbsy@daum.net',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: '정비중입니다..',
      link: '',
      icon: faGithub,
    },
    {
      title: '',
      link: '',
      icon: faFacebook,
    },
    {
      title: '',
      link: '',
      // icon: faRss,
      icon: faYoutube,
    },
  ],
  notice: {
    title: '이메일로 연락주시기 바랍니다.',
    icon: faBell,
  },
};

export default profile;
