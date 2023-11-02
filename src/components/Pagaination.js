import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Pagaination() {
    const {page,handlePageChange,totalPages} = useContext(AppContext);
  return (
    <div className='flex items-center justify-center border-2 w-full fixed bottom-0 bg-white'>
        <div className='w-11/12 max-w-[540px] flex justify-between py-2'>
           <div className='flex gap-x-2'>
           { page > 1 &&
                <button 
                className='rounded-md border-2 px-3 py-1'
                onClick={()=>handlePageChange(page-1)}>Prev</button>
            }
        
            {
                page < totalPages &&
                <button
                className='rounded-md border-2 px-3 py-1' 
                onClick={()=>handlePageChange(page+1)}>Next</button>
            }
            
           </div>
            <p className='font-bold text-sm'>
                Page {page} of {totalPages}
            </p>
            </div>
    </div>
  )
}

export default Pagaination;