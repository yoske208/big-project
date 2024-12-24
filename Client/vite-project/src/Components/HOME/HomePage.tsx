import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
        <Link to="/crud/update" ><button>update</button></Link>
        <Link to="/crud/add" ><button>create new</button></Link>
    
        
    </>
  )
}

export default HomePage