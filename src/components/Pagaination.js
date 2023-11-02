import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Pagaination() {
    const {page,handlePageChange,totalPages} = useContext(AppContext);
  return (
    <div>
        <div>
            { page > 1 &&
                <button onClick={()=>handlePageChange(page-1)}>Prev</button>
            }
        
            {
                page < totalPages &&
                <button onClick={()=>handlePageChange(page+1)}>Next</button>
            }
            </div>
            <p>
                Page {page} of {totalPages}
            </p>
    </div>
  )
}

export default Pagaination;