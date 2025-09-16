import React from 'react'
import useFetch from '../hooks/useFetch';
import PostCard from '../components/PostCard';
const Posts = () => {

    const {data :posts,loading,error}=useFetch("https://jsonplaceholder.typicode.com/posts");

         console.log("Full posts object:", posts);
    if(loading) return <div>Loading...</div>;
    if(error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-4"> 
        <h2 className='mb-4 text-center'>Latest Posts</h2>
        <div className="row">
            {posts.slice(0,10).map((post)=>(
               <div key={post.id} className="col-md-6 mb-4">
                <PostCard title={post.title} body={post.body} userId={post.userId}/>
               </div> 
            ))}
          </div>  
    </div>
  )
}

export default Posts