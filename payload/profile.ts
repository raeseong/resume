import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image: '/prs.png',
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
      title: '010-2980-0196',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/raeseong',
      link: 'https://github.com/raeseong',
      icon: faGithub,
    },
    // {
    //   title: '',
    //   link: '',
    //   icon: faFacebook,
    // },
    // {
    //   title: '',
    //   link: '',
    //   // icon: faRss,
    //   icon: faYoutube,
    // },
  ],
  // notice: {
  //   title: '',
  //   icon: faBell,
  // },
};

export default profile;
