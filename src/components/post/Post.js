import PostItem from './PostItem'
function Post(props) {
    const {posts} = props;
    console.log(posts)
  return (
    <div className="content">
      {posts.map( (p, i) => <PostItem key={`post-${i}`} post={p} /> )}
    </div>)
}

export default Post