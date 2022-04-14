import React from 'react';
import lostAstronaut from '@images/astronauts.png'

const NotFound = () => {
    return (
        <main>
            <h1>404</h1>
            <div>
                <img src={lostAstronaut} alt="Astronauta perdido" />
                <p>Página no encontrada.</p>
            </div>
        </main>
    );
};

export {NotFound}