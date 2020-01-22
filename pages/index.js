import React from 'react';
import styles from './index.module.scss'


import Hero from '../components/hero'
import Main from '../components/main'
import Nav from '../components/nav'
import Footer from '../components/footer'

const Home = () => {
  //return (
  //  <article id={styles.grid}/>
  //)
  return (
    <>
      <Hero />
      <Main />
      <Nav As="nav"/>
      <Footer />
    </>
  );
};

export default Home;
