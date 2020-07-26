import React from 'react';
import './Character.css';

const Character = ({ item }) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={item.img} alt='' />
                </div>
                <div className='card-back'>
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Actor Name:</strong> <span>{item.portrayed}</span>
                        </li>
                        <li>
                            <strong>Nickname:</strong> <span>{item.nickname}</span>
                        </li>
                        <li>
                            <strong>Birthday:</strong> <span>{item.birthday}</span>
                        </li>
                        <li>
                            <strong>Status:</strong> <span>{item.status}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Character;