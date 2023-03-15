import { useState, useEffect } from 'react'
import { IApiCallWithId } from './Interfaces';

import axios from 'axios'

export const ApiCallWithId = () => {
    const apiCall: IApiCallWithId = {userId: 0, id: "", title: "", body: ""}
    const [singlePost, setSinglePost] = useState(apiCall);
    const [id, setId] = useState<string>('');


    const changeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
        setId(e.currentTarget.value)
    }

    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
            setSinglePost(res.data)
        })
        .catch(console.log)
    }, [id])
    
    return (
        <div className="div-api-id">
            <input type="text" placeholder="Search by id" value={id} onChange={changeHandler}/>
            
            {id && 
            <div>
                <h1>{singlePost.title}</h1>
                <p>{singlePost.body}</p>
            </div>
            }
        </div>
    )
} 