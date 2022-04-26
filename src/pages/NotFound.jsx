import React from 'react';
import lostAstronaut from '@images/astronauts.webp'
import '@styles/pages/NotFound.scss'
import '@styles/_animations.scss'

const NotFound = () => {

    React.useEffect(() => {
        const h1 = document.querySelector('.not-found h1')
        const p = document.querySelector('.not-found__description p')
        setTimeout(() => {
            h1.className = 'bounce animated'
            p.className = 'tada animated'
        }, 1000)

        setTimeout(() => {
            h1.className = ''
            p.className = ''
        }, 2000)

        setTimeout(() => {
            h1.className = 'bounce animated'
            p.className = 'tada animated'
        }, 4000)
    }, [])
    
    return (
        <main className="not-found">
            <h1>404</h1>
            <div className='not-found__description'>
                <img src={lostAstronaut} alt="Astronauta perdido" />
                <p>Página no encontrada.</p>
            </div>
        </main>
    );
};

export {NotFound}