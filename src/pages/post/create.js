import React from 'react'
import axios from "axios";
import PostForm from "@/components/post/PostForm";

function PostUpdate(props) {

  const post = {

    key: "",
    title: "",
    category: "",
    sub_category: "",
    repo_link: "",
    image: "", 
    description: "",
    description_sort: "",
    published: true,
    html_content: "",
    post_body:  [],

  }

  const onFormSubmit = async (data) => {
    const res = await axios.post(`${process.env.API_ENDPOINT}/post`, data, {headers: { "Authorization": data.key }  });
  }

  return (
    <div className='page'>
         <h2>Create A Post</h2>
        <PostForm submitHandler={onFormSubmit} data={post} />
    </div>
  )
}



export default PostUpdate