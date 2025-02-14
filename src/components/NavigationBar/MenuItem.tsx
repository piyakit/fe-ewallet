import React, { ReactNode } from 'react'

type Props = {
  icon: ReactNode,
  menuName: string
}

const MenuItem: React.FC<Props> = ({icon, menuName}) => {
  return (
    <div className='flex flex-col items-center'>
      {icon}
      <span className='text-[#A8A8A8]'>{menuName}</span>
    </div>
  )
}

export default MenuItem
