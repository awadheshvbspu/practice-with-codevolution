import React,{useState,useEffect} from 'react';
import axios from 'axios';

export default function UseReduceFetchData() {
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState({})
    const [post, setPost] = useState('')

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res =>{
            setLoading(false)
            setPost(res.data)
            setError('')
        })
        .catch(err =>{
            setLoading(false)
            setPost({})
            setError('something went wrong')
        })
    },[])
  return (
   <>
    <div className='App'>
        {
            loading? 'Loading' :post.title
        }
        {
            error ? 'error' :null
        }
    </div>
   </>
  )
}
