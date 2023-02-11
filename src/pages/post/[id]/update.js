import React from 'react'
import axios from "axios";
import PostForm from "@/components/post/PostForm";




function PostUpdate(props) {

  const {post} = props;

  const onFormSubmit = async (data) => {
    //https://36r6061fu2.execute-api.us-east-1.amazonaws.com/development/post/"+id

    data._id = post._id
    console.log(data)
    const res = await axios.put("http://localhost:3001/post", data, {headers: { "x-api-token": data.key }  });
    
    console.log(res)
  
  
  }

  return (
    <div className='page'>
         <h2>Update A Post</h2>
        <PostForm submitHandler={onFormSubmit} data={post} />
    </div>
  )
}

//https://36r6061fu2.execute-api.us-east-1.amazonaws.com/development/post
PostUpdate.getInitialProps = async ({ query }) => {
  const {id} = query;
  const res = await axios.get("http://localhost:3001/post/"+id);
  return { post: res.data.results };
}

export default PostUpdate