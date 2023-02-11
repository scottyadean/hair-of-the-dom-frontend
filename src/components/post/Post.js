import PostItem from './PostItem'
function Post(props) {
    const {posts} = props;
  return (
    <div className="content">
      {posts.map( (p, i) => <PostItem key={`post-${i}`} post={p} /> )}
    </div>)
}

export default Post