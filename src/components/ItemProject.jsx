import React, { useRef } from 'react'

const ItemProject = (props) => {
    const Ref1=useRef(null)
    const Ref2=useRef(null)
  return (
    <div className='pt-3'>
        <h2 className='text-2xl font-medium pb-5 pl-5 max-sm:pl-10'>{props.title}</h2>
        <div className='flex flex-row justify-between max-sm:flex-col max-sm:items-center'>

            <div className='pr-2'>
                <img src={props.img} alt="img" className='h-[20vw] max-sm:h-50 object-fill rounded-3xl  '/>
            </div>
            <div className='flex flex-col justify-evenly items-center max-sm:pt-5 '>
                <p className='w-[40vw] max-sm:w-100 max-sm:text-center '>{props.discription}</p>
                <div className='flex flex-row justify-evenly w-full max-sm:pt-5'>
                    {props.github!=""?
                    <button 
                        className='py-4 px-8 bg-white text-black font-medium rounded-2xl hover:bg-gray-700 hover:cursor-pointer'>
                        <a 
                            href={props.github}
                            ref={Ref1}>GitHub repo
                        </a>
                    </button>:""}
                    {props.deploy!=""?
                    <button 
                        className='py-4 px-8 bg-white text-black font-medium rounded-2xl hover:bg-gray-700 hover:cursor-pointer'> 
                        <a href={props.diploy}
                        ref={Ref2}>Live Demo</a></button>:""}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemProject