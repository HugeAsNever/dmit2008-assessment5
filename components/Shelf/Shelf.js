import React from 'react';

import styles from './styles.module.scss'

function Shelf ({children, ...props})  {
  return (
        <div className={styles.shelf}>
           {children}

        </div>
  )
}

export default Shelf