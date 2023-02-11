import React from 'react'
import axios from "axios";
import PostForm from "@/components/post/PostForm";




function PostUpdate(props) {

  const {post} = props;

  const onFormSubmit = async (data) => {
    data._id = post._id
    const res = await axios.put(`${process.env.API_ENDPOINT}/post`, data, {headers: { "Authorization": data.key }  });
  }

  return (
    <div className='page'>
         <h2>Update A Post</h2>
        <PostForm submitHandler={onFormSubmit} data={post} />
    </div>
  )
}


PostUpdate.getInitialProps = async ({ query }) => {
  const {id} = query;
  const res = await axios.get(`${process.env.API_ENDPOINT}/post/${id}`);
  return { post: res.data.results };
}

export default PostUpdate