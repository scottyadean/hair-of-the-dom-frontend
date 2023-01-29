
import axios from "axios";
import DefaultLayout from '@/layout/Default'



const PostBody = (props) => {
  const {body} = props;

  return (

    <div>
        {body.type == "paragraph" && (<p>{body.content}</p>) }
        {body.type == "code" && (<pre className="code">{body.content}</pre>) }
    </div>
  );


}


const PostView = (props) => {
  const {post} = props;
  return (

      <div className="content-padding">
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <hr />
        {post.post_body.map((p, i)=><PostBody key={`post-body-${i}`} body={p} />)}
        catagory: {post.catagory} | {post.created_on} <br />
        {post.repo_link && (<a href={post.repo_link} target="_blank" aria-label={`download ${post.title}`} > download the code here</a> )}
    
      </div>

  )
}


function PostIndex( props ) {
  return (
    <DefaultLayout>
      { props.post && <PostView post={props.post} /> }
    </DefaultLayout>
  )
}


PostIndex.getInitialProps = async ({ query }) => {
  const {id} = query;
  const res = await axios.get("http://localhost:3001/post/"+id);
  return { post: res.data.results };
}




export default PostIndex