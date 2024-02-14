import React from 'react'

function ButtonList() {
    const buttonNames = ['All', 'Mixes', 'Music', 'Live', 'Stocks', 'News', 'History', 'Motorcycles', 'Javscript', 'Computer programming', 'Indian pop music', 'Game shows', 'Javscript', 'Computer programming', 'Indian pop music']
  return (
    <div className='flex max-w-[90vw] overflow-x-auto scroll-pr-2'>
        {buttonNames.map((name, index) => {
            return <button key={name} className= {index === 0 ? 'bg-gray-900 px-3 py-1 mx-3 rounded-lg text-white whitespace-nowrap' : 'bg-gray-200 px-3 py-1 mx-3 rounded-lg whitespace-nowrap'} >{name}</button>
        })}
    </div>
  )
}

export default ButtonList