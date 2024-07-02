import React, {useState } from "react";
import axios from 'axios';
import './DataFetch.css';
import DataFetchButton from "./DataFetchButton";
import './DataFetchButton.css'


const DataFetch = () => {
    const [data , setData] = useState([]);
    
    const [error , setError] = useState(null);

    const handleFetchData = () => {
        setError(null);

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                setError(error);
            });
    };

    // useEffect(()=> {
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //         .then(response => {
    //             setData(response.data);
    //             setLoading(false);
    //         })
    //         .catch(error => {
    //             setError(error);
    //             setLoading(false);
    //         });
    // },[]);

    // if(loading) {
    //     return <p>Loading....</p>;
    // }
    // if(error) {
    //     return <p>Error fetching data: {error.message}</p>
    // }

    return (
        <div className="data-container">
            <DataFetchButton  onClick={handleFetchData} />
            {error && <p>Error on fetching Data: {error.message}</p>}
            <h2>Users List</h2>
            <ul>
                {data.map(user => (
                    <li key={user.id}>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default DataFetch;