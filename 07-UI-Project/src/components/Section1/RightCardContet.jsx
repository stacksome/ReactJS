import React from 'react'

const RightCardContet = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
      <h2 className='bg-white text-2xl font-semibold rounded-full h-14 w-14 flex justify-center items-center'>{props.id+1}</h2>
      <div>
        <p className='text-shadow-2xs text-lg text-white mb-10 leading-relaxed'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, expedita iste voluptatibus laborum dolor atque?</p>
        <div className='flex justify-between'>
          <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full '>{props.tag}</button>
          <button className='bg-blue-600 text-white font-medium px-4 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
        </div>
      </div>
    </div>
  )
}

export default RightCardContet
