import { useState, useEffect } from 'react';
import { IApiCall } from './Interfaces';

import axios from 'axios';


export const SimpleApiCallComponent = () => {
    const [apiData, setApiData] = useState<IApiCall[]>([]);

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            setApiData(res.data);
        })
        .catch(console.log)
    },[])

    return (
        <div className="div-input">
            {apiData.map((item) => (
                <div key={item.id} className="map-div">
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    )
}