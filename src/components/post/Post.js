
import Link from 'next/link'
import { useRouter } from 'next/router'
function Post() {


    const router = useRouter()

  return (
    
    <div className="content">

        <div className="item">
          <div className='card'>

          <div className='card-img' 
           onClick={()=>router.push('/post/dom-frontend-source-code')} 
          style={{backgroundImage: "url('/images/dogedom.png')"}}> 
        
          </div>

          <h2 className='card-text'>
            Hair of the dom next js front-end example code and deployment example
          </h2>
          
          <div className='card-caption'>
            <Link href="/post/dom-frontend-source-code">Dom Frontend Source Code</Link>
          </div>

          </div>
        </div>


        <div className="item">
          hello
        </div>

        </div>


  )
}

export default Post