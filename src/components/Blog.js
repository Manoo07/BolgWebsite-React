import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';

function Blog() {
    // consume the context 
    const {posts,loading} = useContext(AppContext);
  return (
    <div className='w-11/12 max-w-[540px] py-3 flex flex-col gap-y-8 mb-[3.75rem]'>
        {
            loading ? (<Spinner/>) :
             (
                posts.length === 0 ? 
                (
                    <div>
                        <p>No Posts Found</p>
                    </div>
                ) :
                (posts.map(post=>(
                    <div className='flex flex-col' key={post.id}>
                        <p className='font-bold text-sm'>{post.title}</p>
                        <p className='text-[0.75rem]'>
                            By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
                        </p>
                        <p className='text-[0.75rem] mt-[0.625rem]'>Posted on {post.date}</p> 
                        <p className='text-sm mt-[0.625rem]'>{post.content}</p>
                        <div className='flex '>
                            {post.tags.map((tag,index)=>{
                                return <span className='text-blue-500 underline bold 
                                text-[0.75rem] ' key={index}>{`#${tag}`}</span>
                            })}
                        </div>
                    </div>
                )))
            ) 
        }
    </div>
  )
}

export default Blog