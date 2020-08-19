import React from 'react';

const Coders = ({ coders, deleteCoder }) => {
    const codersList = coders.map(coder => {
        return (
            <div key={coder.id} className="coder">
                <h4>name: {coder.name}</h4>
                <p>skills: {coder.level}</p>
                <button style={{ background: 'red', color: 'white', cursor: 'pointer' }} onClick={() => deleteCoder(coder.id)}>X</button>
            </div>
        )
    })
    return (
        <div className="coders-list">
            {codersList}
        </div>
    )

}

export default Coders;