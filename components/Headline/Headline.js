import React from 'react';

import styles from './styles.module.scss'

function Headline ({children, title, tagline, ...props})  {
  return (
    <header className={styles.headline}>
      <h1>{title || "business name"}</h1>
      <p>{tagline || "tagline here"}</p>
    </header>
  )
}

export default Headline