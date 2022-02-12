import React, { useState } from 'react'
import Form from './Components/Form/Form'
import Item from './Components/Item/Item'
import List from './Components/List/List'
import './Style/App.css'

const App = () => {
  let [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'Programming language', creator: 'by soua' },
  ])

  const addNewPosts = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  return (
    <div className="App">
      <Form func_forAddNewPost={addNewPosts} />
      <List props_forList={posts} remove_func={removePost} />
    </div>
  )
}

export default App
