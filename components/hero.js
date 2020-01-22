import React from 'react'

import styles from './hero.module.css'

export default ({As = "aside"}) => {
  return(
    <As className={styles.hero} />
  )
}