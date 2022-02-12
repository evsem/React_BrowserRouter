import React from 'react'
import MyButton from '../../UI/MyButton/MyButton'
import classes from './Item.module.css'

const Item = ({ remove, props_forItem, number }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.infoContainer}>
        <h3 className={classes.infoContainer_title}>
          {number}. {props_forItem.title}
        </h3>
        <p className={classes.infoContainer_infoAboutPosts}>
          {props_forItem.body}
        </p>
        <p className={classes.infoContainer_infoAboutCreatorPosts}>
          {props_forItem.creator}
        </p>
      </div>
      <MyButton onClick={() => remove(props_forItem)}>Delete</MyButton>
    </div>
  )
}

export default Item
