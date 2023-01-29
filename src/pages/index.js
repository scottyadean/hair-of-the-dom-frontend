
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
  const res = await axios.get("https://36r6061fu2.execute-api.us-east-1.amazonaws.com/development/posts");
  return {
    props: { posts: res.data.results },
  };
};