import React from 'react';
import Grid from '@material-ui/core/Grid';
import imgc from "../image/imagen en construccion.jpg";

export const TextConstruction = () => {
    return (
        <div style={{marginBottom: 0}} className="container">
            <div className="blinkPosi">
            <h1 className="blink" style={{color:'red',  textAlign:"center",marginLeft: 110}}>PAGINA EN CONSTRUCCION</h1>
            <p style={
                {marginRight:-630, fontSize:"x-large", fontWeight:"bold"}
                }>Para entregas comunicarse a los siguientes numeros:</p>
                <ul style={{fontWeight:"bold", fontSize:"20px"}}>
                <li>(0212)-756788.</li>
                <li>(0417)-889753.</li> 
                </ul>
            </div>
            <div>         
            <img src={imgc} alt="" className="imageCons" style={
                {width:550, height:360}
                }/>
            </div>
                
        </div>
    )
}

export default TextConstruction;