import React from 'react';
import './Characters.css';
import Character from './../Character/Character';
import Spinner from './../Spinner/Spinner';


const Characters = (props) => {
    return (
        <div className="container">
            {props.isLoading ? <> <Spinner /> </> :
                <section className="cards">
                    {props.items.map(item => (
                        <Character key={item.char_id} item={item} />))}
                </section>}
        </div >
    );
};

export default Characters;