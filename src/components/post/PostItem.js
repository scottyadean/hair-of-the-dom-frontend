
import Link from 'next/link'
import { useRouter } from 'next/router'

function PostItem(props) {
    const {post} = props;
    const router = useRouter()

  return (<div className="item">
          <div className='card'>

          <div className='card-img' 
           onClick={()=>router.push('/post/'+post.slug)} 
          style={{backgroundImage: `url(${post.image})`}}> 
        
          </div>

          <h2 className='card-text'>
            {post.title}
          </h2>
          
          <div className='card-caption'>
            <Link href={`/post/${post.slug}`}>{post.description_sort}</Link>
          </div>

          <Link href={`/post/${post.slug}/update`} style={{fontSize: "80%", textAlign:"right"}}><small>edit</small></Link>

          </div>
        </div>
  )
}

export default PostItem