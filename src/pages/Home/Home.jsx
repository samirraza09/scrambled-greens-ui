import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context';

const Home = () => {
    const { currentUser, setCurrentUser } = useContext(AuthContext);
    return (
        <div>HOME PAGE</div>
    )
}

export default Home