/* eslint-disable react/jsx-props-no-spreading */
import { Container } from 'reactstrap';

import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { Education } from '../component/education';
import { Experience } from '../component/experience';
import { Footer } from '../component/footer';
import { Introduce } from '../component/introduce';
import { Profile } from '../component/profile';
import { Project } from '../component/project';
import { Skill } from '../component/skill';
import { Style } from '../component/common/Style';
import Payload from '../payload';

function resume() {
  return (
    <>
      <NextSeo {...Payload._global.seo} />
      <Head>
        <title>{Payload._global.headTitle}</title>
      </Head>
      <Container style={Style.global}>
        <Profile.Component payload={Payload.profile} />
        <Introduce.Component payload={Payload.introduce} />
        <Skill.Component payload={Payload.skill} />
        <Experience.Component payload={Payload.career} />
        <Project.Component payload={Payload.project} />
        {/* <OpenSource.Component payload={Payload.openSource} /> */}
        {/* <Presentation.Component payload={Payload.presentation} /> */}
        {/* <Article.Component payload={Payload.article} /> */}
        <Education.Component payload={Payload.education} />
        {/* <Etc.Component payload={Payload.etc} /> */}
        <Footer.Component payload={Payload.footer} />
      </Container>
    </>
  );
}

export default resume;
