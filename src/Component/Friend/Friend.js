import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const{name,username,id}=props.friend
    let navigate = useNavigate()
    const ShowFriendDetails =()=>{
       const path= `/friend/ ${id}`
       navigate(path)
    }
    return (
        <div>
            <p>Name:{name}</p>
            <Link to={'/friend/'+id}>Click</Link>
            <button onClick={ShowFriendDetails}>{username} id:{id}</button>
        </div>
    );
};

export default Friend;