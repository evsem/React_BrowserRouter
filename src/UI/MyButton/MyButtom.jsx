import React from 'react'
import classes from './MyButton.module.css'

const MyButtom = ({ children, ...props }) => {
  return (
    <button className={classes.myButton} {...props}>
      {children}
    </button>
  )
}

export default MyButtom
