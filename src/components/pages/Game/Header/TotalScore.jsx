import React, { useContext } from 'react'
import scoreContext from '../../../context/score'

const TotalScore = () => {
  const ctx = useContext(scoreContext)
  return (
    <div className='w-[135px] flex items-center flex-col'>
        <h1 className='poppins-medium text-[100px] leading-none'>{ctx.score}</h1>
        <p className='text-2xl poppins-medium'>Total Score</p>
    </div>
  )
}

export default TotalScore