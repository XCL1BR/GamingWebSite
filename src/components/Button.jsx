import React from 'react'

const Button = ({title,id,rightIcon,leftIcon,containerClass}) => {
  return (
    <button id={id} className={'group relative z-10 w-fit cursor-pointer bg-yellow-300 overflow-hidden rounded-full  px-6 py-3 text-black ${containerClass} '}>
    
    <span className='flex items-center'>
      {leftIcon}
      <span className='relative incline-flex overflow-hidden font-general text-xs uppercase'>
        <div>
            {title}
        </div>
      </span>
    </span>
    {rightIcon}
    </button>
  )
}

export default Button








//we can use (props) and <div>{props.title}</div>,
// but for convienience we destructure the props as {title} and dircectly call the {title} property in the div. 