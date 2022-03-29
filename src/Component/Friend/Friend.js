import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    console.log(props)
    const{name,username,id}=props.friend
    let navigate = useNavigate()
    const ShowFriendDetails =()=>{
       const path= `Friend/${id}`
       navigate(path)
    }
    return (
        <div>
            <p>Name:{name}</p>
            <button onClick={ShowFriendDetails}>{username} id:{id}</button>
        </div>
    );
};

export default Friend;