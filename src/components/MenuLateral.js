import React from 'react';
import { Link } from "react-router-dom";

import './MenuLateral.css';

function MenuLateral() {
    return (
        <>
            <ul className="MenuLateral">
                <li>
                    <h3>SECCIÓN I</h3>
                    <ul>
                        <li><Link to="/"><b>Reporte 1</b><br />Validación de Estructura del Reporte</Link></li>
                        <li><Link to="/seccion-uno-reporte-dos"><b>Reporte 2</b><br />Validación de Etiquetas</Link></li>
                        <li><Link to="/seccion-uno-reporte-tres"><b>Reporte 3</b><br />Errores en CURP / RFC</Link></li>
                        <li><Link to="/seccion-uno-reporte-cuatro"><b>Reporte 4</b><br />Etiquetas relacionadas y reglas especiales</Link></li>
                        <li><Link to="/seccion-uno-reporte-cinco"><b>Reporte 5</b><br />Visualizador de etiquetas y registros</Link></li>
                    </ul>
                </li>
                <li>
                    <h3>SECCIÓN II</h3>
                    <ul>
                        <li><Link to="/seccion-dos-reporte-uno"><b>Reporte 6</b><br />Flujos de transferencias internacionales de fondos enviados fuera de México</Link></li>
                        <li><Link to="/seccion-dos-reporte-dos"><b>Reporte 7</b><br />Flujos de transferencias internacionales de fondos enviados a México</Link></li>
                        <li><Link to="/seccion-dos-reporte-tres"><b>Reporte 8</b><br />Transferencias internacionales de fondos de personas físicas mayores de 80 años menores de edad y personas morales con menos de tres años de constitución</Link></li>
                        <li><Link to="/seccion-dos-reporte-cuatro"><b>Reporte 9</b><br />Análisis de registros de envío en reporte de Transferencias Internacionales de Fondos (TIF) por ordenante y destinatario</Link></li>
                    </ul>
                </li>
                <li>
                    <h3>SECCIÓN III</h3>
                    <ul>
                        <li><Link><b>Reporte 10</b><br />Visualización en red de Reporte de Transferencias Internacionales de Fondos (TIF)</Link></li>
                        <li><Link><b>Reporte 11</b><br />Análisis de Registros y atributos de Personas Físicas en Reporte de Transferencias Internacionales (TIF)</Link></li>
                        <li><Link><b>Reporte 12</b><br />Análisis de Registros y Atributos de Personas Morales en Reporte de Transferencias Internacionales (TIF)</Link></li>
                        <li><Link><b>Reporte 13</b><br />Análisis de registros en reporte de Transferencias Internacionales de Fondos (TIF) de acuerdo a Montos</Link></li>
                        <li><Link><b>Reporte 14</b><br />Análisis de registros en Reporte de Transferencias Internacionales de Fondos (TIF)  enviadas de acuerdo a Geografía "destino"</Link></li>
                    </ul>
                </li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </>
    );
}

export default MenuLateral;
