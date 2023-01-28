import React from 'react'
import { useRouter } from 'next/router'
import DefaultLayout from '@/layout/Default'


function PostIndex() {

  const router = useRouter()
  const id = router.query.id


  return (
    <DefaultLayout>
      <div>Posts {id}</div>
    </DefaultLayout>
  )
}

export default PostIndex