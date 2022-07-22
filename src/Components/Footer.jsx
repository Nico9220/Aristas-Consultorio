import React from 'react'
import '../Styles/Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='footer'>
            <div>
                <Link to={"/"}>Whatsapp</Link>
            </div>
            <div>
                <Link to={"/"}>Whatsapp</Link>
            </div>
        </div>
    )
}
