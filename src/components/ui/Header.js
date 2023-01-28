import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
function Header() {
    const router = useRouter()
    const playSound = (e) => {
        e.preventDefault()
        new Audio('/audio/dombark.mp3').play();
        router.push('/')
    }


  return (
    <header className="header">
        <div className="content">

            <div className='item' onClick={playSound} style={{cursor: "pointer"}}>
            <div className='site-name'>Hair of the Dom</div>
             <div className='dom'></div>
            </div>

            <div className='item' style={{'flexGrow': 1}}>
                <nav className='header-nav'>
                <Link href='/'> Home </Link> | <Link href='/about'> About Me </Link>
                </nav>
            </div>

        </div>

        
        
    </header>
  )
}

export default Header