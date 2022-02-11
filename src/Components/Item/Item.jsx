import React from 'react'
import MyButton from '../../UI/MyButton/MyButton'
import classes from './Item.module.css'

const Item = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.infoContainer}>
        <h3 className={classes.infoContainer_title}>JS</h3>
        <p className={classes.infoContainer_infoAboutPosts}>Language</p>
        <p className={classes.infoContainer_infoAboutCreatorPosts}>by soua</p>
      </div>
      <MyButton>Delete</MyButton>
    </div>
  )
}

export default Item
