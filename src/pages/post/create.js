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
    //https://36r6061fu2.execute-api.us-east-1.amazonaws.com/development/post/"+id

    
    console.log(data)
    const res = await axios.post("http://localhost:3001/post", data, {headers: { "Authorization": data.key }  });
    
    console.log(res)
  
  
  }

  return (
    <div className='page'>
         <h2>Create A Post</h2>
        <PostForm submitHandler={onFormSubmit} data={post} />
    </div>
  )
}



export default PostUpdate