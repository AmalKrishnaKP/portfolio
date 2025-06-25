import React from 'react'

const ItemProject = () => {
  return (
    <div className=''>
        <h2 className='text-2xl font-medium pb-5 pl-5'>MASTER CHEF</h2>
        <div className='flex flex-row justify-between max-sm:flex-col max-sm:items-center'>

            <div className=''>
                <img src="src/assets/chef.png" alt="img" className='h-[20vw] max-sm:h-50 object-fill rounded-3xl '/>
            </div>
            <div className='flex flex-col justify-evenly items-center max-sm:pt-5 '>
                <p className='w-[40vw] max-sm:w-100 max-sm:text-center '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, repellendus architecto repellat distinctio minima optio aut cupiditate in, expedita eaque possimus numquam! Nesciunt corporis necessitatibus reiciendis nostrum aspernatur minima maiores cumque pariatur? Distinctio aperiam at voluptatem eum veritatis fuga facilis labore harum tempore beatae vel est officia, repudiandae magni ratione ipsum </p>
                <div className='flex flex-row justify-evenly w-full max-sm:pt-5'>
                    <button className='py-4 px-8 bg-white text-black font-medium rounded-2xl '>GitHub repo</button>
                    <button className='py-4 px-8 bg-white text-black font-medium rounded-2xl '>Live Demo</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemProject