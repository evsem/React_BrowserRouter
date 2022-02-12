import React, { useState } from 'react'
import MyButton from '../../UI/MyButton/MyButton'
import MyInput from '../../UI/MyInput/MyInput'

const Form = ({ func_forAddNewPost }) => {
  let [param, setParam] = useState({ title: '', body: '', creator: '' })

  const addNewPosts = (e) => {
    e.preventDefault()
    let newPost = {
      ...param,
      id: Date.now(),
    }
    func_forAddNewPost(newPost)
    setParam({ title: '', body: '', creator: '' })
  }
  return (
    <form>
      <MyInput
        placeholder="Title"
        value={param.title}
        onChange={(e) => setParam({ ...param, title: e.target.value })}
      />
      <MyInput
        placeholder="Body"
        value={param.body}
        onChange={(e) => setParam({ ...param, body: e.target.value })}
      />
      <MyInput
        placeholder="Creator"
        value={param.creator}
        onChange={(e) => setParam({ ...param, creator: e.target.value })}
      />
      <MyButton onClick={addNewPosts}>Add</MyButton>
    </form>
  )
}

export default Form
