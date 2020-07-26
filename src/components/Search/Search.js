import React, { useState } from 'react';
import './Search.css';

const Search = (props) => {
    const [text, setText] = useState('');

    const inputOnChange = (name) => {
        setText(name);
        props.getQuery(name);
    }
    return (
        <div className="container Search">
            <form>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search character..."
                    onChange={(e) => inputOnChange(e.target.value)}
                    autoFocus
                />
            </form>
        </div>
    );
}

export default Search;