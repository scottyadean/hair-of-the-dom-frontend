
import axios from "axios";
import Link from 'next/link'
import DefaultLayout from '@/layout/Default'
import Tabs from '@/components/ui/Tabs'


const ContentTabs = (props) => {

  const { content } = props;

  return (<Tabs> 
          {content.map((c, i)=>{
              return (
                  <div key={`tab-${i}`} label={c.label}>
                  <pre className={c.tag}> 
                    {c.data}
                  </pre>
                </div>
              );
          })}

          </Tabs>);
}


const ContentParagraph = (props) => { 


  const { content } = props;

 return (<div> 
          {content.map((c, i)=>{
              return (
                  <p key={`p-content-${i}`} className={c.tag}> 
                    {c.data}
                  </p>
              );
          })}

          </div>);
}



const ContentCode = (props) => { 


  const { content } = props;

 return (<div> 
          {content.map((c, i)=>{
              return (
                  <pre key={`code-content-${i}`} className={c.tag}> 
                    {c.data}
                  </pre>
              );
          })}

          </div>);

}


const ContentVideo = (props) => {
  const { content } = props;
  return (<div> 
    {content.map((c, i)=>{
        return (
          <div key={`video-content-${i}`} dangerouslySetInnerHTML={{ __html: c.data }}></div>
        );
    })}

    </div>);
}

const ContentHTML = (props) => {

  const { content } = props;
  return (<div> 
    {content.map((c, i)=>{
        return (
          <div key={`html-content-${i}`} className={c.tag} dangerouslySetInnerHTML={{ __html: c.data }}></div>
        );
    })}

    </div>);

}


const PostBody = (props) => {
  const {body} = props;

  return (<div>
          <h3>{body.caption}</h3>
          { body.type === "tabs" && <ContentTabs content={body.content} /> }
          { body.type === "paragraph" && <ContentParagraph content={body.content} /> }
          { body.type === 'youtube' && <ContentVideo content={body.content} /> }
          { body.type === 'html' && <ContentHTML content={body.content} /> }
          { body.type === 'code' && <ContentCode content={body.content} /> }
          
          
          </div>);
}


const PostView = (props) => {
  const {post} = props;
  return (

      <div className="content-padding">

        <div className="grid-container">
          <div className="grid-item fity-percent"> 
          <h1>{post.title}</h1>
          </div>

          <div className="grid-item fity-percent" > 
            <div className="txt-right"> Category: {post.category} </div>          
          </div>
        </div>
       
        <p>{post.description}</p>

        <div dangerouslySetInnerHTML={{ __html: post.html_content }}></div>

        <hr />
        {post.post_body.map((pb, i)=><PostBody key={`post-body-${i}`} body={pb} />)}
        {post.created_on} <br />
        {post.repo_link && (<a href={post.repo_link} target="_blank" aria-label={`download ${post.title}`} > download the code here</a> )}
        <br />
        <Link href={`/post/${post.slug}/update`} style={{fontSize: "80%", textAlign:"right"}}><small>edit</small></Link>
    
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
  const res = await axios.get(`${process.env.API_ENDPOINT}/post/${id}`);
  return { post: res.data.results };
}

export default PostIndex