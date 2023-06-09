import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
<button><a href='/apple'>Apple</a></button>
     <button> <a href='/orange'>Orange</a></button>
    {/* <button><Link to='/apple'>Apple</Link></button>
     <button> <Link to='/orange'>Orange</Link></button> */}
    </div>

  )

}

export default Home
