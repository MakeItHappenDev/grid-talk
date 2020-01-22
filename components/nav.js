import React from 'react'

import styles from './nav.module.scss'

export default ({As = "nav"}) => {
  return (
    <As className={styles.nav}>
      <a>Resume</a>
      <a>Porfolio</a>
      <a>Tweeter</a>
      <a>Youtube</a>
      <a>Twitch</a>
    </As>
  )
}