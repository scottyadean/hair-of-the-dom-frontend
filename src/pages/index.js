
import DefaultLayout from "@/layout/Default"
import Post from "@/components/post/Post"
import axios from "axios";
const Home = (props) => {
  const {posts} = props;
  return (
    <DefaultLayout>
        <div className="content">
          {posts && <Post posts={posts} /> }
        </div>
    </DefaultLayout>
  )
}

export default Home;

export const getStaticProps = async () => {
  const res = await axios.get("http://localhost:3001/posts");
  return {
    props: { posts: res.data.results },
  };
};