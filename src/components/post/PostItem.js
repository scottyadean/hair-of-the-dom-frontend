
import Link from 'next/link'
import { useRouter } from 'next/router'

function PostItem(props) {
    const {post} = props;
    const router = useRouter()

    const truncateTitle = (s, l=40) => {

      if ( s.length > l ){
        return s.substring(0,l) + "..."
      }

      return s;


    }


  return (<div className="item">
          <div className='card'>

          <div className='card-img' 
           onClick={()=>router.push('/post/'+post.slug)} 
          style={{backgroundImage: `url(${post.image})`}}> 
        
          </div>

          <div className='card-text'>
          <Link href={`/post/${post.slug}`}>{truncateTitle(post.title, 100)}</Link>
          </div>
     
          <div className='card-caption'>
            <Link href={`/post/${post.slug}`}>{truncateTitle(post.description_sort)}</Link>
          </div>

          {/* <Link href={`/post/${post.slug}/update`} style={{fontSize: "80%", textAlign:"right"}}><small>edit</small></Link> */}

          </div>
        </div>
  )
}

export default PostItem