
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
            <Link href="/post/dom-frontend-source-code">{post.description_sort}</Link>
          </div>

          </div>
        </div>
  )
}

export default PostItem