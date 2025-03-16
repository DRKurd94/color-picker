import { useState } from "react";

function ColorPicker(){

    // consts
    const [color,setColor]=useState("#FFFFFF")


    // functions
    function handleColorPickerChange(event){
        setColor(event.target.value)
    }

    // Main
    return(
        <div className="color-picker-container">
            <h1>Color Picker App</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a color: </label>
            <input type="color" value={color} onChange={handleColorPickerChange}></input>
        </div>
    )
}

export default ColorPicker