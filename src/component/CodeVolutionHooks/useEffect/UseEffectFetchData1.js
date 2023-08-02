import React,{useState,useEffect} from 'react'; 
import axios from 'axios'

export default function UseEffectFetchData1() {
    const [post,setPost] =useState({});
    const [id,setId] = useState(1);
    const [idFromButtonClick,setIdFromButtonClick] = useState(1);

     const handleClick = () =>{
        setIdFromButtonClick(id)
     }
    useEffect(()=>{
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then(res =>{
    setPost(res.data)
    console.log(res)
  })
  .catch(err =>{
    console.log(err)
  })
    },[idFromButtonClick])
  return (
   <>
    <div className='App'>
    <input type='text' value={id} onChange={(e) =>setId(e.target.value)} />
    <h1>{post.title}</h1>
    <button type='button' onClick={handleClick}> fetch Post</button>
  {/* <ul>
    {
        post?.map((post) =>(
            <li key={post.id}>{post.title}</li>
        ))
    }
  </ul> */}
    </div>
   </>
  )
}
