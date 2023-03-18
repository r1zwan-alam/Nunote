import React from 'react'

function Header() {
  return (
    <div className='flex flex-col'>
    
    <h1>Notes App</h1>
    <input type="search" placeholder='Search Note' className='bg-slate-200 p-1 px-3 rounded-lg focus:outline-none'/>
    </div>
  )
}

export default Header