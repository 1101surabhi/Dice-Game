import React from 'react'
import TotalScore from './TotalScore'
import UserSelection from './UserSelection'

const Header = () => {

  return (
    <div className='flex justify-between mx-20'>
        <TotalScore />
        <UserSelection/>
    </div>
  )
}

export default Header