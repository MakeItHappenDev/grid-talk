import React from 'react';
import './index.module.scss'

import Hero from '../components/hero'
import Main from '../components/main'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Section from '../components/section'

const Home = () => {
  return (
    <>
      <Hero As="aside"/>
      <Main/>
      <Nav/>
      <Section />
      <Section />
      <Footer />
    </>
  );
};

export default Home;
