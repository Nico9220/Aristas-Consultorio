import React from 'react'
import '../Styles/Home.css';
import Nosotros from './Nosotros';

export default function Home() {

    return (
        <section className='main-container'>
            <div className='title-home'>
                <h1>Bienvenido a Aristas, Odontología integrada.</h1>
            </div>
            <div className='title-base'>
                <h3>
                    Clínica Odontológica en Plottier
                    <div>
                        Abierto hoy hasta las 19:00
                    </div>
                </h3>
            </div>
            <Nosotros />
        </section>
    )
}
