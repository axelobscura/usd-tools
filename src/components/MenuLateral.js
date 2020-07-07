import React from 'react';
import { Link } from "react-router-dom";

function MenuLateral() {
    return (
        <>
            <ul>
                <li><h3>SECCIÓN I</h3>
                    <ul>
                        <li><Link><b>Reporte 1</b><br />Validación de Estructura  del Reporte</Link></li>
                    </ul>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </>
    );
}

export default MenuLateral;
