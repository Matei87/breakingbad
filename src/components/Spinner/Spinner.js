import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Spinner = () => {
    return (
        <>
            <div className="center">
                <div className="spinner-grow text-light" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                {/* <img src={require('../../img/spinner.gif')} alt="loading" /> */}
            </div>
        </>
    );
}

export default Spinner;