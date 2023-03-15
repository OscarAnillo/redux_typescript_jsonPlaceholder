import { useState, useEffect } from 'react'

import axios from 'axios'


import { useSelector, useDispatch } from 'react-redux/es/exports';
import { addSinglePost } from '../Redux/features/apiCall-slice';

export const ApiCallWithId = () => {
    const [singlePost, setSinglePost] = useState(null);
    const [id, setId] = useState<string>('');

    const {title, body} = useSelector((state: any) => state.apiCall.initialValues)
    const dispatch = useDispatch();

    const changeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
        setId(e.currentTarget.value)
        
    }

    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
            setSinglePost(res.data);
            dispatch(addSinglePost({
                id: res.data.id,
                title: res.data.title,
                body: res.data.body
            }))
        })
        .catch(console.log)
    }, [id, dispatch])
    
    return (
        <div className="div-api-id">
            <input type="text" placeholder="Search by id" value={id} onChange={changeHandler}/>
            
            {id && 
            <div>
                <p>Post #{id}</p>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
            }
        </div>
    )
} 