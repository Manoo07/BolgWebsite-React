import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';

function Blog() {
    // consume the context 
    const {posts,loading} = useContext(AppContext);
  return (
    <div className='w-11/12 max-w-[540px]'>
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
                        <p>
                            By <span>{post.author}</span> on <span>{post.category}</span>
                        </p>
                        <p>Posted on {post.date}</p> 
                        <p>{post.content}</p>
                        <div>
                            {post.tags.map((tag,index)=>{
                                return <span key={index}>{`#${tag}`}</span>
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